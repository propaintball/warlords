<?php
/**
 * Warlords – Reservation Form Handler
 * WebSupport.sk compatible (PHP 8.x, mail() or SMTP)
 * Sends notification to info@warlords.sk + auto-reply to customer
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/* ---- Config ---- */
define('NOTIFY_EMAIL', 'info@warlords.sk');
define('NOTIFY_CC',    'info@propaintball.sk');   // voliteľná kópia
define('FROM_NAME',    'Warlords Rezervácie');
define('FROM_EMAIL',   'rezervacie@warlords.sk'); // musí existovať na WebSupport
define('SITE_URL',     'https://warlords.sk');
define('DEPOSIT_AMOUNT', 50);

/* ---- Anti-spam: rate limit per IP (file-based) ---- */
$ip      = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$tmpFile = sys_get_temp_dir() . '/wl_rl_' . md5($ip) . '.txt';
$now     = time();
$lastHit = file_exists($tmpFile) ? (int)file_get_contents($tmpFile) : 0;
if ($now - $lastHit < 60) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please wait 60 seconds.']);
    exit;
}
file_put_contents($tmpFile, $now);

/* ---- Only POST ---- */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

/* ---- Sanitize helper ---- */
function clean(string $val, int $maxLen = 200): string {
    return htmlspecialchars(substr(trim($val), 0, $maxLen), ENT_QUOTES, 'UTF-8');
}

/* ---- Read & validate fields ---- */
$meno       = clean($_POST['meno']       ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$telefon    = clean($_POST['telefon']    ?? '', 30);
$aktivita   = clean($_POST['aktivita']   ?? '');
$balik      = clean($_POST['balik']      ?? '');
$event_type = clean($_POST['event_type'] ?? '');
$datum      = clean($_POST['datum_x']    ?? '');
$datum2     = clean($_POST['datum2_x']   ?? '');
$cas        = clean($_POST['cas']        ?? '');
$pocet      = (int)($_POST['pocet']      ?? 0);
$ico        = clean($_POST['ico']        ?? '');
$sprava     = clean($_POST['sprava']     ?? '', 1000);

/* Name must contain a space (first + last name) */
if (!$meno || !str_contains($meno, ' ')) {
    echo json_encode(['ok' => false, 'error' => 'Neplatné meno — vyžaduje sa meno a priezvisko.']);
    exit;
}
if (!$email) {
    echo json_encode(['ok' => false, 'error' => 'Neplatná emailová adresa.']);
    exit;
}
/* Phone: strip spaces, must be 9–15 digits */
$telDigits = preg_replace('/[^0-9]/', '', $telefon);
if (strlen($telDigits) < 9 || strlen($telDigits) > 15) {
    echo json_encode(['ok' => false, 'error' => 'Neplatné telefónne číslo.']);
    exit;
}
if (!$aktivita || !in_array($aktivita, ['lasertag', 'gelblaster', 'nerf'], true)) {
    echo json_encode(['ok' => false, 'error' => 'Prosím vyber aktivitu.']);
    exit;
}

/* Map activity to display label */
$aktivityLabel = [
    'lasertag'   => 'Laser Tag',
    'gelblaster' => 'Gel Blaster',
    'nerf'       => 'Nerf',
];
$aktLabel = $aktivityLabel[$aktivita] ?? $aktivita;

/* ---- Build admin notification email ---- */
$subject_admin = "🎯 Nová rezervácia Warlords — {$aktLabel} | {$meno}";

$body_admin = <<<HTML
<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#0A0C12;color:#F0F2F8;margin:0;padding:20px;}
  .wrap{max-width:600px;margin:0 auto;background:#141822;border-radius:12px;overflow:hidden;}
  .hdr{background:#FFB800;padding:20px 32px;}
  .hdr h1{margin:0;font-size:1.4rem;color:#000;}
  .hdr p{margin:4px 0 0;font-size:0.9rem;color:#333;}
  .body{padding:28px 32px;}
  table{width:100%;border-collapse:collapse;}
  td{padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.95rem;}
  td:first-child{color:#A0A8BC;width:40%;}
  td:last-child{color:#fff;font-weight:600;}
  .sec{font-size:0.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#FFB800;margin:24px 0 8px;}
  .note{background:rgba(255,184,0,0.08);border:1px solid rgba(255,184,0,0.2);border-radius:8px;padding:14px;font-size:0.9rem;color:#FFC933;margin-top:20px;}
  .ftr{padding:16px 32px;background:#0A0C12;font-size:0.8rem;color:#5A6070;text-align:center;}
</style>
</head><body>
<div class="wrap">
  <div class="hdr">
    <h1>🎯 Nová rezervácia Warlords</h1>
    <p>Odoslaná: {$datum} · Aktivita: {$aktLabel}</p>
  </div>
  <div class="body">
    <div class="sec">Kontakt</div>
    <table>
      <tr><td>Meno</td><td>{$meno}</td></tr>
      <tr><td>Email</td><td><a href="mailto:{$email}" style="color:#38B6FF;">{$email}</a></td></tr>
      <tr><td>Telefón</td><td><a href="tel:{$telefon}" style="color:#38B6FF;">{$telefon}</a></td></tr>
    </table>

    <div class="sec">Rezervácia</div>
    <table>
      <tr><td>Aktivita</td><td>{$aktLabel}</td></tr>
      <tr><td>Balík</td><td>{$balik}</td></tr>
      <tr><td>Typ eventu</td><td>{$event_type}</td></tr>
      <tr><td>Preferovaný dátum</td><td>{$datum}</td></tr>
      <tr><td>Náhradný dátum</td><td>{$datum2}</td></tr>
      <tr><td>Čas</td><td>{$cas}</td></tr>
      <tr><td>Počet hráčov</td><td>{$pocet}</td></tr>
HTML;

if ($ico) {
    $body_admin .= "<tr><td>IČO firmy</td><td>{$ico}</td></tr>";
}
if ($sprava) {
    $body_admin .= "<tr><td>Správa</td><td>" . nl2br($sprava) . "</td></tr>";
}

$body_admin .= <<<HTML
    </table>
    <div class="note">
      ✅ <strong>Ďalší krok:</strong> Odpovedz zákazníkovi do 24h — potvrd dostupnosť a pošli SumUp zálohu 50€.
    </div>
  </div>
  <div class="ftr">Warlords · info@warlords.sk · +421 903 199 993</div>
</div>
</body></html>
HTML;

/* ---- Build customer auto-reply ---- */
$subject_customer = "Warlords – Prijali sme tvoju rezerváciu! 🎯";

$body_customer = <<<HTML
<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f5f5f5;color:#333;margin:0;padding:20px;}
  .wrap{max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);}
  .hdr{background:#0A0C12;padding:28px 32px;text-align:center;}
  .hdr img{height:40px;margin-bottom:12px;}
  .hdr h1{color:#FFB800;font-size:1.6rem;margin:0;}
  .hdr p{color:#A0A8BC;margin:6px 0 0;font-size:0.9rem;}
  .body{padding:32px;}
  .body p{color:#444;line-height:1.7;margin:0 0 16px;}
  table{width:100%;border-collapse:collapse;margin:16px 0;}
  td{padding:10px 12px;border:1px solid #eee;font-size:0.9rem;}
  td:first-child{background:#f9f9f9;color:#666;width:40%;font-weight:600;}
  .deposit-box{background:#FFF8E6;border:2px solid #FFB800;border-radius:8px;padding:20px;margin:20px 0;}
  .deposit-box h3{color:#E5A200;margin:0 0 8px;}
  .deposit-box p{margin:0;color:#664d00;font-size:0.9rem;}
  .footer{background:#0A0C12;padding:20px 32px;text-align:center;}
  .footer p{color:#5A6070;font-size:0.8rem;margin:4px 0;}
  .footer a{color:#FFB800;}
</style>
</head><body>
<div class="wrap">
  <div class="hdr">
    <h1>⚡ Warlords</h1>
    <p>NEON TANK ARENA · Bratislava</p>
  </div>
  <div class="body">
    <p>Ahoj <strong>{$meno}</strong>! 👋</p>
    <p>Prijali sme tvoju žiadosť o rezerváciu. Do <strong>24 hodín</strong> sa ti ozveme s potvrdením dostupnosti a zasielame platobné inštrukcie pre zálohu.</p>

    <table>
      <tr><td>Aktivita</td><td><strong>{$aktLabel}</strong></td></tr>
      <tr><td>Balík</td><td>{$balik}</td></tr>
      <tr><td>Typ eventu</td><td>{$event_type}</td></tr>
      <tr><td>Dátum</td><td>{$datum}</td></tr>
      <tr><td>Čas</td><td>{$cas}</td></tr>
      <tr><td>Počet hráčov</td><td>{$pocet}</td></tr>
    </table>

    <div class="deposit-box">
      <h3>💳 Záloha 50€</h3>
      <p>Rezervácia je záväzná až po uhradení zálohy 50€. Link na platbu dostaneš v nasledujúcom emaily. Záloha sa odpočíta z finálnej ceny.</p>
    </div>

    <p>Máš otázky? Neváhaj nás kontaktovať:</p>
    <p>📞 <strong><a href="tel:+421903199993" style="color:#FFB800;">+421 903 199 993</a></strong><br/>
    ✉️ <a href="mailto:info@warlords.sk" style="color:#FFB800;">info@warlords.sk</a></p>

    <p style="color:#888;font-size:0.85rem;">Tešíme sa na teba v NEON TANK ARENA! ⚡</p>
  </div>
  <div class="footer">
    <p>Warlords · Kopčianska 6211, Bratislava</p>
    <p><a href="https://warlords.sk">warlords.sk</a></p>
    <p style="font-size:0.75rem;">Tento email bol odoslaný automaticky. Neodpovedaj na neho priamo.</p>
  </div>
</div>
</body></html>
HTML;

/* ---- Send emails ---- */
$headers_base = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    "From: " . FROM_NAME . " <" . FROM_EMAIL . ">",
    "Reply-To: {$email}",
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$headers_admin = $headers_base . "\r\nCC: " . NOTIFY_CC;

$sent_admin    = mail(NOTIFY_EMAIL, $subject_admin, $body_admin, $headers_admin);
$sent_customer = mail((string)$email, $subject_customer, $body_customer, $headers_base);

if ($sent_admin || $sent_customer) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail send failed. Please call +421 903 199 993.']);
}
