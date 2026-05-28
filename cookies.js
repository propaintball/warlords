/* ================================================================
   COOKIE CONSENT MANAGER — GDPR / ePrivacy / Slovak law compliant
   ================================================================ */
(function () {
  const STORAGE_KEY = 'wl_cookie_consent';
  const CONSENT_VERSION = '1';

  const banner   = document.getElementById('cookieBanner');
  const modal    = document.getElementById('cookieModal');
  const btnAccept    = document.getElementById('cookieAccept');
  const btnReject    = document.getElementById('cookieReject');
  const btnCustomize = document.getElementById('cookieCustomize');
  const btnSave      = document.getElementById('cookieModalSave');
  const btnModalRej  = document.getElementById('cookieModalReject');
  const btnClose     = document.getElementById('cookieModalClose');
  const btnFooter    = document.getElementById('cookiePrefsLink');
  const inAnalytics  = document.getElementById('catAnalytics');
  const inMarketing  = document.getElementById('catMarketing');

  if (!banner) return;

  /* ---- Storage helpers ---- */
  function loadConsent() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.v !== CONSENT_VERSION) return null;
      return data;
    } catch { return null; }
  }

  function saveConsent(analytics, marketing) {
    const data = {
      v: CONSENT_VERSION,
      necessary: true,
      analytics: !!analytics,
      marketing: !!marketing,
      ts: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    applyConsent(data);
    hideBanner();
    closeModal();
  }

  /* ---- Apply consent: enable/disable scripts ---- */
  function applyConsent(data) {
    /* Analytics — Google Analytics gtag */
    if (data.analytics) {
      window.dataLayer = window.dataLayer || [];
      // gtag('consent', 'update', { analytics_storage: 'granted' });
      // Load GA script when user activates a real GA_ID
    }
    /* Marketing — Meta Pixel / Google Ads */
    if (data.marketing) {
      // fbq('consent', 'grant');
    }
    /* Dispatch event for other scripts */
    document.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: data }));
  }

  /* ---- UI helpers ---- */
  function showBanner() { banner.classList.add('visible'); }
  function hideBanner() { banner.classList.remove('visible'); }
  function openModal()  {
    const c = loadConsent() || { analytics: false, marketing: false };
    if (inAnalytics) inAnalytics.checked = c.analytics;
    if (inMarketing) inMarketing.checked = c.marketing;
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  }

  /* ---- Event handlers ---- */
  btnAccept    && btnAccept.addEventListener('click',    () => saveConsent(true, true));
  btnReject    && btnReject.addEventListener('click',    () => saveConsent(false, false));
  btnModalRej  && btnModalRej.addEventListener('click',  () => saveConsent(false, false));
  btnCustomize && btnCustomize.addEventListener('click', openModal);
  btnSave      && btnSave.addEventListener('click',      () => saveConsent(inAnalytics?.checked, inMarketing?.checked));
  btnClose     && btnClose.addEventListener('click',     closeModal);
  btnFooter    && btnFooter.addEventListener('click',    (e) => { e.preventDefault(); openModal(); });

  /* Close modal on backdrop click */
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  /* Esc closes modal */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('visible')) closeModal();
  });

  /* ---- Init: show banner if no consent stored ---- */
  const existing = loadConsent();
  if (!existing) {
    setTimeout(showBanner, 600);
  } else {
    applyConsent(existing);
  }
})();
