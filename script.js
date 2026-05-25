/* ============================================================
   WARLORDS — Main Script
   Handles: i18n (SK/EN/DE), navbar, tabs, FAQ, animations,
            sticky button, mobile menu
   ============================================================ */

/* ---- TRANSLATIONS ---- */
const T = {
  sk: {
    /* NAV */
    nav_activities: "Aktivity",
    nav_events: "Eventy",
    nav_pricing: "Cenník",
    nav_about: "O nás",
    nav_contact: "Kontakt",
    nav_book: "Rezervovať",
    nav_lasertag: "Laser Tag",
    nav_gelblaster: "Gel Blaster",
    nav_nerf: "Nerf",
    nav_kids: "Detské oslavy",
    nav_bachelor: "Rozlúčky so slobodou",
    nav_team: "Teambuilding",

    /* HERO */
    hero_badge: "Neon Tank Arena · Bratislava · Bez bolesti",
    hero_title_1: "Bojuj.",
    hero_title_2: "Vyhraj.",
    hero_title_3: "Bez bolesti.",
    hero_sub: "Laser Tag, Gel Blaster a Nerf — adrenalín bez modlín. Ideálne pre <strong>detské oslavy</strong>, <strong>rozlúčky so slobodou</strong> a <strong>firemné teambuildingy</strong>.",
    hero_btn_book: "Rezervovať termín",
    hero_btn_discover: "Pozrieť aktivity",
    hero_stat_players: "Spokojných hráčov",
    hero_stat_activities: "Aktivity",
    hero_stat_location: "NEON TANK ARENA",

    /* ACTIVITIES */
    activities_tag: "Naše aktivity",
    activities_title: "Vyber si svoju zbraň",
    activities_sub: "Každá aktivita je bezpečná, vhodná pre každý vek a garantuje nezabudnuteľný zážitok.",

    lt_tagline: "Futuristický boj s laserovými lúčmi",
    lt_desc: "Žiadne projektily, žiadna bolesť — len čistý taktický boj. Infračervené senzory zaznamenávajú každý zásah. Ideálne pre deti od 6 rokov aj dospelých.",
    lt_f1: "Od 6 rokov",
    lt_f2: "Bez projektlov, 100% bezpečné",
    lt_f3: "Vybavenie v cene",
    lt_f4: "Viacero herných módov",
    lt_from: "od",
    lt_price: "11€",
    lt_per: "/ osoba",
    lt_btn: "Zistiť viac",

    gb_tagline: "Vodné guľky — realistický zážitok bez bolesti",
    gb_desc: "Malé vodné guľky, ktoré pri dopade praskajú a zanechávajú iba mokrú stopu. Taktický realizmus bez modlín — vhodné od 6 rokov.",
    gb_f1: "Od 6 rokov",
    gb_f2: "Vodné guľky — bezpečné",
    gb_f3: "Ochranné okuliare v cene",
    gb_f4: "Taktické scenáre",
    gb_from: "od",
    gb_price: "18€",
    gb_per: "/ osoba",
    gb_btn: "Zistiť viac",

    nerf_tagline: "Penové strely — zábava pre celú rodinu",
    nerf_desc: "Profi Nerf bitka s mäkkými penovými strelami. Bezpečné pre každého — od malých detí až po firemné teambuildingy.",
    nerf_f1: "Od 5 rokov",
    nerf_f2: "Penové strely, nula rizika",
    nerf_f3: "Prémiové zbrane k zapožičaniu",
    nerf_f4: "Rodiny, firmy, školy",
    nerf_from: "od",
    nerf_price: "18€",
    nerf_per: "/ osoba",
    nerf_btn: "Zistiť viac",
    nerf_badge: "Najpopulárnejší",

    /* EVENTS */
    events_tag: "Špeciálne eventy",
    events_title: "Akákoľvek oslava, jeden cieľ",
    events_sub: "Postaráme sa o celý program — od herného inštruktora až po organizáciu. Ty sa len bav.",

    ev_kids_title: "Detské narodeniny",
    ev_kids_desc: "Nezabudnuteľná oslava pre deti od 5 rokov. Inštruktor vedie celý program, chladnička a stôl pre tortu zdarma. Penové strely a laserový boj bez zábraní!",
    ev_kids_t1: "Vek 5+",
    ev_kids_t2: "Inštruktor zdarma",
    ev_kids_t3: "Stôl + chladnička",
    ev_kids_t4: "Nerf a Laser Tag",

    ev_bach_title: "Rozlúčka so slobodou",
    ev_bach_desc: "Neobyčajná rozlúčka pre nevestu aj ženícha — kostým zdarma! Ženská verzia s Gel Blasterom a Laser Tagom garantuje adrenalín bez farieb a špiny.",
    ev_bach_t1: "Kostým zdarma",
    ev_bach_t2: "Bez farieb a bolesti",
    ev_bach_t3: "Fotky vhodné na Instagram",
    ev_bach_t4: "Prispôsobený program",

    ev_team_title: "Firemný teambuilding",
    ev_team_desc: "Stmeľovanie tímu cez strategické hry. Laser Tag a Gel Blaster rozvíjajú komunikáciu a súdržnosť. K dispozícii priestory na catering a oddych.",
    ev_team_t1: "Min. 6 ľudí",
    ev_team_t2: "Stratégia a komunikácia",
    ev_team_t3: "Fakturácia na firmu",
    ev_team_t4: "Catering na požiadanie",

    ev_school_title: "Školské výlety & skupiny",
    ev_school_desc: "Bezpečná aktivita pre školy, detské tábory a mládežnícke skupiny. Inštruktori zvládnu celý program od príchodu po odchod. Ceny pre skupiny na požiadanie.",
    ev_school_t1: "Školy a tábory",
    ev_school_t2: "Bezpečné pre deti",
    ev_school_t3: "Skupinové ceny",
    ev_school_t4: "Kompletný program",

    /* WHY */
    why_tag: "Prečo Warlords?",
    why_title: "Adrenalín áno. Bolesť nie.",
    why_sub: "Sme tím nadšencov, ktorí veria že bojový zážitok a bezpečnosť idú ruka v ruke. Všetky naše aktivity sú vhodné pre každý vek — od 5 rokov bez horného limitu.",
    why_i1_title: "100% bezpečné aktivity",
    why_i1_desc: "Žiadne tvrdé projektily. Laserové lúče, vodné guľky a penové strely sú navrhnuté pre maximálnu bezpečnosť.",
    why_i2_title: "Inštruktori, nie animátori",
    why_i2_desc: "Každý event vedie skúsený inštruktor, ktorý zaistí bezpečnosť aj maximálnu zábavu od začiatku do konca.",
    why_i3_title: "Všetko v cene",
    why_i3_desc: "Vybavenie, ochranné pomôcky, inštruktor — žiadne skryté poplatky. Cena je cena.",
    why_i4_title: "NEON TANK ARENA",
    why_i4_desc: "Špeciálne navrhnutá indoor aréna v Bratislave. Klimatizácia, parkovanie priamo pred budovou, herné módy pre každú skupinu.",
    why_review: "\"Úžasná narodeninová párty pre moju dcéru! Inštruktori boli super, deti sa smiali celé 2 hodiny. Určite sa vrátime!\"",
    why_review_author: "Zuzana M.",
    why_review_location: "Bratislava",
    why_stat1: "Spokojných hráčov",
    why_stat2: "Hodnotenie Google",
    why_stat3: "Aktivity",
    why_stat4: "Vek 5+",

    /* PRICING */
    pricing_tag: "Cenník",
    pricing_title: "Transparentné ceny",
    pricing_sub: "Všetko vybavenie, ochranné pomôcky a inštruktor sú zahrnuté v každom balíku. Žiadne skryté poplatky.",
    tab_lt: "Laser Tag",
    tab_gb: "Gel Blaster",
    tab_nerf: "Nerf",
    recommended: "Odporúčané",
    book_btn: "Rezervovať",

    lt_p1_name: "Mini bitka",
    lt_p1_duration: "30 min hry (3 × 10 min) · 1h rezervácia",
    lt_p1_amount: "11",
    lt_p1_f1: "Laserová výbava v cene",
    lt_p1_f2: "3 herné kola",
    lt_p1_f3: "Inštruktor",
    lt_p1_f4: "Min. 4 hráči",
    lt_p1_f5: "Možnosť extra kola +4€/10min",

    lt_p2_name: "Veľká bitka",
    lt_p2_duration: "60 min hry (6 × 10 min) · 2h rezervácia",
    lt_p2_amount: "18",
    lt_p2_f1: "Laserová výbava v cene",
    lt_p2_f2: "6 herných kôl",
    lt_p2_f3: "Inštruktor",
    lt_p2_f4: "Min. 4 hráči",
    lt_p2_f5: "Možnosť extra kola +4€/10min",

    gb_p1_name: "Gel Blaster",
    gb_p1_duration: "2 hodiny · vrátane prípravy",
    gb_p1_amount: "18",
    gb_p1_f1: "Gel Blaster + okuliare v cene",
    gb_p1_f2: "1 000 vodných guľok",
    gb_p1_f3: "Inštruktor",
    gb_p1_f4: "Min. 4 hráči",
    gb_p1_f5: "Extra 1 000 guľok +4€",

    nerf_p1_name: "Nerf bitka",
    nerf_p1_duration: "2 hodiny · vrátane prípravy",
    nerf_p1_amount: "18",
    nerf_p1_f1: "Prémiová Nerf zbraň v cene",
    nerf_p1_f2: "Penové strely v cene",
    nerf_p1_f3: "Inštruktor",
    nerf_p1_f4: "Min. 4 hráči",
    nerf_p1_f5: "Rôzne herné scenáre",

    pricing_note_txt: "Skupina 10+ hráčov pri Paintballe? <strong>Organizátor má 50% zľavu</strong> na svoj balík. Pre špeciálne eventy nás kontaktujte priamo.",
    extra_time_title: "Extra čas",
    extra_time_desc: "Pon–Štv: +40€/h &nbsp;|&nbsp; Pia–Ned: +50€/h &nbsp; za skupinu",

    /* FAQ */
    faq_tag: "Časté otázky",
    faq_title: "Máš otázku? My máme odpoveď.",

    faq_q1: "Od koľkých rokov môžu deti hrať?",
    faq_a1: "Laser Tag, Gel Blaster a Nerf sú vhodné od 5–6 rokov (závisí od postavy a schopnosti udržať zbraň). Deti do 18 rokov potrebujú podpis zákonného zástupcu na waiverí u inštruktora.",

    faq_q2: "Aký je minimálny počet hráčov?",
    faq_a2: "Pre Laser Tag, Gel Blaster a Nerf je minimum 4 hráči, maximum 12 hráčov. Ak ste menej, vieme vás spojiť s inou skupinou — napíšte nám.",

    faq_q3: "Je aktivita bolestivá?",
    faq_a3: "Nie. Laser Tag nepoužíva žiadne projektily — len infračervené lúče. Vodné guľky Gel Blasteru sú mäkké a pri dopade praskajú bez bolesti. Nerf strely sú penové a úplne bezpečné.",

    faq_q4: "Čo si mám priniesť?",
    faq_a4: "Pevnú staršiu športovú obuv (odporúčame), pohodlné oblečenie na pohyb. Na Laser Tag nič extra — vybavenie je k dispozícii na mieste. Na Gel Blaster odporúčame náhradné tričko.",

    faq_q5: "Kde sa nachádza NEON TANK ARENA?",
    faq_a5: "Sme v Bratislave na adrese Kopčianska 6211 (rovnaká budova ako Raccoon City). Parkovanie je priamo pred budovou. Presné inštrukcie dostanete po rezervácii.",

    faq_q6: "Môžem prísť s tortou na narodeninový event?",
    faq_a6: "Áno! Stôl v oddychovej zóne a chladnička na tortu sú k dispozícii zdarma — treba len nahlásiť vopred. Prosíme, prinesie si vlastný nôž, papierové taniere a príbory.",

    faq_q7: "Ako funguje platba a záloha?",
    faq_a7: "Záloha 50€ zabezpečí záväznú rezerváciu (odráta sa z finálnej ceny). Platba na mieste: hotovosť alebo karta. Storno s vrátením zálohy len pri zrušení viac ako 48 hodín vopred.",

    faq_q8: "Je možné vystaviť faktúru na firmu?",
    faq_a8: "Áno, firemné teambuildingy fakturujeme bez problémov. Uveďte to pri rezervácii a my pripravíme podklady.",

    /* CTA */
    cta_title: "Pripravený na bitku?",
    cta_sub: "Rezervuj termín ešte dnes — kapacita je obmedzená.",
    cta_btn_book: "Rezervovať online",
    cta_btn_call: "Zavolať nám",

    /* FOOTER */
    footer_tagline: "Čisté bojové aktivity pre celú rodinu.",
    footer_activities: "Aktivity",
    footer_events: "Eventy",
    footer_info: "Informácie",
    footer_contact: "Kontakt",
    footer_privacy: "Ochrana osobných údajov",
    footer_terms: "Podmienky používania",
    footer_copy: "© 2025 Warlords. Všetky práva vyhradené.",
    footer_kids: "Detské oslavy",
    footer_bach: "Rozlúčky so slobodou",
    footer_team: "Teambuilding",
    footer_school: "Školské skupiny",
    footer_pricing: "Cenník",
    footer_about: "O nás",
    footer_faq: "FAQ",
    footer_booking: "Online rezervácia",
  },

  en: {
    nav_activities: "Activities",
    nav_events: "Events",
    nav_pricing: "Pricing",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book: "Book Now",
    nav_lasertag: "Laser Tag",
    nav_gelblaster: "Gel Blaster",
    nav_nerf: "Nerf",
    nav_kids: "Kids Parties",
    nav_bachelor: "Bachelorette Parties",
    nav_team: "Team Building",

    hero_badge: "Neon Tank Arena · Bratislava · No Pain",
    hero_title_1: "Fight.",
    hero_title_2: "Win.",
    hero_title_3: "No Pain.",
    hero_sub: "Laser Tag, Gel Blaster and Nerf — pure adrenaline with zero bruises. Perfect for <strong>kids parties</strong>, <strong>bachelorette parties</strong> and <strong>corporate team buildings</strong>.",
    hero_btn_book: "Book a Session",
    hero_btn_discover: "Explore Activities",
    hero_stat_players: "Happy Players",
    hero_stat_activities: "Activities",
    hero_stat_location: "NEON TANK ARENA",

    activities_tag: "Our Activities",
    activities_title: "Choose Your Weapon",
    activities_sub: "Every activity is safe, suitable for all ages, and guarantees an unforgettable experience.",

    lt_tagline: "Futuristic combat with laser beams",
    lt_desc: "No projectiles, no pain — pure tactical combat. Infrared sensors register every hit. Perfect for kids from age 6 and adults alike.",
    lt_f1: "Age 6+",
    lt_f2: "No projectiles, 100% safe",
    lt_f3: "Equipment included",
    lt_f4: "Multiple game modes",
    lt_from: "from",
    lt_price: "€11",
    lt_per: "/ person",
    lt_btn: "Learn More",

    gb_tagline: "Water beads — realistic combat without the pain",
    gb_desc: "Small water beads burst on impact leaving only a wet trace. Tactical realism without bruises — suitable from age 6.",
    gb_f1: "Age 6+",
    gb_f2: "Water beads — safe",
    gb_f3: "Protective goggles included",
    gb_f4: "Tactical scenarios",
    gb_from: "from",
    gb_price: "€18",
    gb_per: "/ person",
    gb_btn: "Learn More",

    nerf_tagline: "Foam darts — fun for the whole family",
    nerf_desc: "Pro Nerf battle with soft foam darts. Safe for everyone — from young children to corporate team buildings.",
    nerf_f1: "Age 5+",
    nerf_f2: "Foam darts, zero risk",
    nerf_f3: "Premium blasters for rent",
    nerf_f4: "Families, companies, schools",
    nerf_from: "from",
    nerf_price: "€18",
    nerf_per: "/ person",
    nerf_btn: "Learn More",
    nerf_badge: "Most Popular",

    events_tag: "Special Events",
    events_title: "Any Occasion, One Goal",
    events_sub: "We take care of the entire programme — from game instructors to organisation. You just have fun.",

    ev_kids_title: "Kids Birthday Parties",
    ev_kids_desc: "An unforgettable party for children from age 5. Instructor leads the whole programme; table and fridge for cake included free. Foam darts and laser battles without limits!",
    ev_kids_t1: "Age 5+",
    ev_kids_t2: "Instructor free",
    ev_kids_t3: "Table + fridge",
    ev_kids_t4: "Nerf & Laser Tag",

    ev_bach_title: "Bachelorette / Bachelor Party",
    ev_bach_desc: "An extraordinary send-off for bride or groom — costume free! The ladies' version with Gel Blaster and Laser Tag guarantees adrenaline without paint or mess.",
    ev_bach_t1: "Costume free",
    ev_bach_t2: "No paint or pain",
    ev_bach_t3: "Insta-worthy photos",
    ev_bach_t4: "Custom programme",

    ev_team_title: "Corporate Team Building",
    ev_team_desc: "Team bonding through strategic games. Laser Tag and Gel Blaster develop communication and cohesion. Catering and relaxation area available.",
    ev_team_t1: "Min. 6 people",
    ev_team_t2: "Strategy & communication",
    ev_team_t3: "Company invoice",
    ev_team_t4: "Catering on request",

    ev_school_title: "School Trips & Groups",
    ev_school_desc: "Safe activity for schools, summer camps and youth groups. Instructors handle the full programme from arrival to departure. Group rates available on request.",
    ev_school_t1: "Schools & camps",
    ev_school_t2: "Safe for children",
    ev_school_t3: "Group pricing",
    ev_school_t4: "Full programme",

    why_tag: "Why Warlords?",
    why_title: "Adrenaline yes. Pain no.",
    why_sub: "We are a team of enthusiasts who believe that a combat experience and safety go hand in hand. All our activities are suitable for all ages — from 5 years with no upper limit.",
    why_i1_title: "100% Safe Activities",
    why_i1_desc: "No hard projectiles. Laser beams, water beads and foam darts are designed for maximum safety.",
    why_i2_title: "Instructors, not animators",
    why_i2_desc: "Every event is led by an experienced instructor who ensures safety and maximum fun from start to finish.",
    why_i3_title: "Everything Included",
    why_i3_desc: "Equipment, protective gear, instructor — no hidden fees. The price is the price.",
    why_i4_title: "NEON TANK ARENA",
    why_i4_desc: "Purpose-built indoor arena in Bratislava. Air conditioning, parking right outside, game modes for every group.",
    why_review: "\"Amazing birthday party for my daughter! The instructors were brilliant, the kids laughed for 2 straight hours. We'll definitely be back!\"",
    why_review_author: "Zuzana M.",
    why_review_location: "Bratislava",
    why_stat1: "Happy Players",
    why_stat2: "Google Rating",
    why_stat3: "Activities",
    why_stat4: "Age 5+",

    pricing_tag: "Pricing",
    pricing_title: "Transparent Prices",
    pricing_sub: "All equipment, protective gear and an instructor are included in every package. No hidden fees.",
    tab_lt: "Laser Tag",
    tab_gb: "Gel Blaster",
    tab_nerf: "Nerf",
    recommended: "Recommended",
    book_btn: "Book Now",

    lt_p1_name: "Mini Battle",
    lt_p1_duration: "30 min play (3 × 10 min) · 1h slot",
    lt_p1_amount: "11",
    lt_p1_f1: "Laser gear included",
    lt_p1_f2: "3 game rounds",
    lt_p1_f3: "Instructor",
    lt_p1_f4: "Min. 4 players",
    lt_p1_f5: "Extra round option +€4/10min",

    lt_p2_name: "Big Battle",
    lt_p2_duration: "60 min play (6 × 10 min) · 2h slot",
    lt_p2_amount: "18",
    lt_p2_f1: "Laser gear included",
    lt_p2_f2: "6 game rounds",
    lt_p2_f3: "Instructor",
    lt_p2_f4: "Min. 4 players",
    lt_p2_f5: "Extra round option +€4/10min",

    gb_p1_name: "Gel Blaster Session",
    gb_p1_duration: "2 hours · including setup",
    gb_p1_amount: "18",
    gb_p1_f1: "Gel Blaster + goggles included",
    gb_p1_f2: "1,000 water beads",
    gb_p1_f3: "Instructor",
    gb_p1_f4: "Min. 4 players",
    gb_p1_f5: "Extra 1,000 beads +€4",

    nerf_p1_name: "Nerf Battle",
    nerf_p1_duration: "2 hours · including setup",
    nerf_p1_amount: "18",
    nerf_p1_f1: "Premium Nerf blaster included",
    nerf_p1_f2: "Foam darts included",
    nerf_p1_f3: "Instructor",
    nerf_p1_f4: "Min. 4 players",
    nerf_p1_f5: "Various game scenarios",

    pricing_note_txt: "Group of 10+ players for Paintball? <strong>Organiser gets 50% off</strong> their package. For special events contact us directly.",
    extra_time_title: "Extra Time",
    extra_time_desc: "Mon–Thu: +€40/h &nbsp;|&nbsp; Fri–Sun: +€50/h &nbsp; per group",

    faq_tag: "FAQ",
    faq_title: "Have a question? We have an answer.",

    faq_q1: "From what age can children play?",
    faq_a1: "Laser Tag, Gel Blaster and Nerf are suitable from age 5–6 (depending on height and ability to hold a blaster). Children under 18 need a parent/guardian signature on the waiver with the instructor.",

    faq_q2: "What is the minimum number of players?",
    faq_a2: "For Laser Tag, Gel Blaster and Nerf the minimum is 4 players, maximum 12. If you have fewer people, we can pair you with another group — just contact us.",

    faq_q3: "Does it hurt?",
    faq_a3: "No. Laser Tag uses no projectiles — only infrared beams. Gel Blaster water beads are soft and burst on impact without pain. Nerf darts are foam and completely safe.",

    faq_q4: "What should I bring?",
    faq_a4: "Sturdy older sports shoes (recommended) and comfortable clothes for movement. No extras needed for Laser Tag — all gear is on site. For Gel Blaster we recommend a spare t-shirt.",

    faq_q5: "Where is NEON TANK ARENA located?",
    faq_a5: "We are in Bratislava at Kopčianska 6211 (same building as Raccoon City). Parking is directly outside. You will receive detailed instructions after booking.",

    faq_q6: "Can I bring a birthday cake?",
    faq_a6: "Yes! A table in the relaxation zone and a fridge for the cake are available free of charge — just let us know in advance. Please bring your own knife, paper plates and cutlery.",

    faq_q7: "How does payment and the deposit work?",
    faq_a7: "A €50 deposit secures your reservation (deducted from the final price). On-site payment: cash or card. Deposit refunded only for cancellations more than 48 hours in advance.",

    faq_q8: "Can I get a company invoice?",
    faq_a8: "Yes, we invoice corporate team buildings without any issue. Simply mention it in your booking and we will prepare the documents.",

    cta_title: "Ready for battle?",
    cta_sub: "Book your slot today — capacity is limited.",
    cta_btn_book: "Book Online",
    cta_btn_call: "Call Us",

    footer_tagline: "Clean combat activities for the whole family.",
    footer_activities: "Activities",
    footer_events: "Events",
    footer_info: "Information",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_copy: "© 2025 Warlords. All rights reserved.",
    footer_kids: "Kids Parties",
    footer_bach: "Bachelorette Parties",
    footer_team: "Team Building",
    footer_school: "School Groups",
    footer_pricing: "Pricing",
    footer_about: "About Us",
    footer_faq: "FAQ",
    footer_booking: "Online Booking",
  },

  de: {
    nav_activities: "Aktivitäten",
    nav_events: "Events",
    nav_pricing: "Preise",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    nav_book: "Buchen",
    nav_lasertag: "Laser Tag",
    nav_gelblaster: "Gel Blaster",
    nav_nerf: "Nerf",
    nav_kids: "Kindergeburtstag",
    nav_bachelor: "JGA / Abschiedsfeier",
    nav_team: "Team Building",

    hero_badge: "Neon Tank Arena · Bratislava · Schmerzfrei",
    hero_title_1: "Kämpfe.",
    hero_title_2: "Siège.",
    hero_title_3: "Kein Schmerz.",
    hero_sub: "Laser Tag, Gel Blaster und Nerf — purer Adrenalinspaß ohne blaue Flecken. Ideal für <strong>Kindergeburtstage</strong>, <strong>Junggesellinnenabschiede</strong> und <strong>Firmenweihnachtsfeiern</strong>.",
    hero_btn_book: "Termin buchen",
    hero_btn_discover: "Aktivitäten ansehen",
    hero_stat_players: "Glückliche Spieler",
    hero_stat_activities: "Aktivitäten",
    hero_stat_location: "NEON TANK ARENA",

    activities_tag: "Unsere Aktivitäten",
    activities_title: "Wähle deine Waffe",
    activities_sub: "Jede Aktivität ist sicher, für jedes Alter geeignet und garantiert ein unvergessliches Erlebnis.",

    lt_tagline: "Futuristischer Kampf mit Laserstrahlen",
    lt_desc: "Keine Projektile, kein Schmerz — reiner taktischer Kampf. Infrarotsensoren registrieren jeden Treffer. Ideal für Kinder ab 6 Jahren und Erwachsene.",
    lt_f1: "Ab 6 Jahren",
    lt_f2: "Keine Projektile, 100% sicher",
    lt_f3: "Ausrüstung inklusive",
    lt_f4: "Mehrere Spielmodi",
    lt_from: "ab",
    lt_price: "11€",
    lt_per: "/ Person",
    lt_btn: "Mehr erfahren",

    gb_tagline: "Wasserbällchen — realistisches Erlebnis ohne Schmerz",
    gb_desc: "Kleine Wasserbällchen platzen beim Aufprall und hinterlassen nur eine feuchte Spur. Taktischer Realismus ohne Schmerzen — geeignet ab 6 Jahren.",
    gb_f1: "Ab 6 Jahren",
    gb_f2: "Wasserbällchen — sicher",
    gb_f3: "Schutzbrille inklusive",
    gb_f4: "Taktische Szenarien",
    gb_from: "ab",
    gb_price: "18€",
    gb_per: "/ Person",
    gb_btn: "Mehr erfahren",

    nerf_tagline: "Schaumstoffdarts — Spaß für die ganze Familie",
    nerf_desc: "Profi Nerf-Kampf mit weichen Schaumstoffdarts. Sicher für jeden — von Kleinkindern bis zum Firmenevent.",
    nerf_f1: "Ab 5 Jahren",
    nerf_f2: "Schaumstoffdarts, null Risiko",
    nerf_f3: "Premium-Blaster zum Verleih",
    nerf_f4: "Familien, Firmen, Schulen",
    nerf_from: "ab",
    nerf_price: "18€",
    nerf_per: "/ Person",
    nerf_btn: "Mehr erfahren",
    nerf_badge: "Beliebteste",

    events_tag: "Besondere Events",
    events_title: "Jeder Anlass, ein Ziel",
    events_sub: "Wir kümmern uns um das gesamte Programm — vom Spielleiter bis zur Organisation. Du hast einfach Spaß.",

    ev_kids_title: "Kindergeburtstag",
    ev_kids_desc: "Eine unvergessliche Party für Kinder ab 5 Jahren. Spielleiter leitet das gesamte Programm; Tisch und Kühlschrank für den Kuchen kostenlos. Schaumstoffdarts und Laserkampf ohne Grenzen!",
    ev_kids_t1: "Ab 5 Jahren",
    ev_kids_t2: "Spielleiter kostenlos",
    ev_kids_t3: "Tisch + Kühlschrank",
    ev_kids_t4: "Nerf & Laser Tag",

    ev_bach_title: "JGA / Abschiedsfeier",
    ev_bach_desc: "Ein außergewöhnlicher Abschied für Braut oder Bräutigam — Kostüm kostenlos! Die Damen-Version mit Gel Blaster und Laser Tag garantiert Adrenalin ohne Farbe und Schmutz.",
    ev_bach_t1: "Kostüm kostenlos",
    ev_bach_t2: "Keine Farbe, kein Schmerz",
    ev_bach_t3: "Insta-taugliche Fotos",
    ev_bach_t4: "Maßgeschneidertes Programm",

    ev_team_title: "Firmen Team Building",
    ev_team_desc: "Teamzusammenhalt durch strategische Spiele. Laser Tag und Gel Blaster fördern Kommunikation und Zusammenhalt. Catering und Entspannungsbereich verfügbar.",
    ev_team_t1: "Min. 6 Personen",
    ev_team_t2: "Strategie & Kommunikation",
    ev_team_t3: "Firmenrechnung möglich",
    ev_team_t4: "Catering auf Anfrage",

    ev_school_title: "Schulausflüge & Gruppen",
    ev_school_desc: "Sichere Aktivität für Schulen, Ferienlager und Jugendgruppen. Spielleiter übernehmen das gesamte Programm von Ankunft bis Abreise. Gruppenpreise auf Anfrage.",
    ev_school_t1: "Schulen & Lager",
    ev_school_t2: "Sicher für Kinder",
    ev_school_t3: "Gruppenpreise",
    ev_school_t4: "Vollständiges Programm",

    why_tag: "Warum Warlords?",
    why_title: "Adrenalin ja. Schmerz nein.",
    why_sub: "Wir sind ein Team von Enthusiasten, die glauben, dass ein Kampferlebnis und Sicherheit Hand in Hand gehen. Alle unsere Aktivitäten sind für jedes Alter geeignet — ab 5 Jahren ohne Obergrenze.",
    why_i1_title: "100% sichere Aktivitäten",
    why_i1_desc: "Keine harten Projektile. Laserstrahlen, Wasserbällchen und Schaumstoffdarts sind auf maximale Sicherheit ausgelegt.",
    why_i2_title: "Spielleiter, keine Animateure",
    why_i2_desc: "Jedes Event wird von einem erfahrenen Spielleiter geleitet, der Sicherheit und maximalen Spaß von Anfang bis Ende gewährleistet.",
    why_i3_title: "Alles inklusive",
    why_i3_desc: "Ausrüstung, Schutzausrüstung, Spielleiter — keine versteckten Gebühren. Der Preis ist der Preis.",
    why_i4_title: "NEON TANK ARENA",
    why_i4_desc: "Speziell gestaltete Innenhalle in Bratislava. Klimaanlage, Parkplatz direkt vor dem Gebäude, Spielmodi für jede Gruppe.",
    why_review: "\"Fantastische Geburtstagsparty für meine Tochter! Die Spielleiter waren super, die Kinder haben 2 Stunden lang gelacht. Wir kommen definitiv wieder!\"",
    why_review_author: "Zuzana M.",
    why_review_location: "Bratislava",
    why_stat1: "Glückliche Spieler",
    why_stat2: "Google-Bewertung",
    why_stat3: "Aktivitäten",
    why_stat4: "Ab 5 Jahren",

    pricing_tag: "Preise",
    pricing_title: "Transparente Preise",
    pricing_sub: "Alle Ausrüstung, Schutzausrüstung und ein Spielleiter sind in jedem Paket enthalten. Keine versteckten Gebühren.",
    tab_lt: "Laser Tag",
    tab_gb: "Gel Blaster",
    tab_nerf: "Nerf",
    recommended: "Empfohlen",
    book_btn: "Buchen",

    lt_p1_name: "Mini-Gefecht",
    lt_p1_duration: "30 Min. Spiel (3 × 10 Min.) · 1 Std. Slot",
    lt_p1_amount: "11",
    lt_p1_f1: "Laserausrüstung inklusive",
    lt_p1_f2: "3 Spielrunden",
    lt_p1_f3: "Spielleiter",
    lt_p1_f4: "Mind. 4 Spieler",
    lt_p1_f5: "Extra Runde mögl. +4€/10Min.",

    lt_p2_name: "Großes Gefecht",
    lt_p2_duration: "60 Min. Spiel (6 × 10 Min.) · 2 Std. Slot",
    lt_p2_amount: "18",
    lt_p2_f1: "Laserausrüstung inklusive",
    lt_p2_f2: "6 Spielrunden",
    lt_p2_f3: "Spielleiter",
    lt_p2_f4: "Mind. 4 Spieler",
    lt_p2_f5: "Extra Runde mögl. +4€/10Min.",

    gb_p1_name: "Gel Blaster Session",
    gb_p1_duration: "2 Stunden · inkl. Vorbereitung",
    gb_p1_amount: "18",
    gb_p1_f1: "Gel Blaster + Brille inklusive",
    gb_p1_f2: "1.000 Wasserbällchen",
    gb_p1_f3: "Spielleiter",
    gb_p1_f4: "Mind. 4 Spieler",
    gb_p1_f5: "Extra 1.000 Bällchen +4€",

    nerf_p1_name: "Nerf-Gefecht",
    nerf_p1_duration: "2 Stunden · inkl. Vorbereitung",
    nerf_p1_amount: "18",
    nerf_p1_f1: "Premium Nerf-Blaster inklusive",
    nerf_p1_f2: "Schaumstoffdarts inklusive",
    nerf_p1_f3: "Spielleiter",
    nerf_p1_f4: "Mind. 4 Spieler",
    nerf_p1_f5: "Verschiedene Szenarien",

    pricing_note_txt: "Gruppe von 10+ Spielern für Paintball? <strong>Organisator erhält 50% Rabatt</strong> auf sein Paket. Für besondere Events kontaktieren Sie uns direkt.",
    extra_time_title: "Zusätzliche Zeit",
    extra_time_desc: "Mo–Do: +40€/Std. &nbsp;|&nbsp; Fr–So: +50€/Std. &nbsp; pro Gruppe",

    faq_tag: "Häufige Fragen",
    faq_title: "Frage? Wir haben die Antwort.",

    faq_q1: "Ab welchem Alter können Kinder spielen?",
    faq_a1: "Laser Tag, Gel Blaster und Nerf sind für Kinder ab 5–6 Jahren geeignet (je nach Körpergröße). Kinder unter 18 Jahren benötigen die Unterschrift eines Erziehungsberechtigten.",

    faq_q2: "Wie viele Spieler sind mindestens nötig?",
    faq_a2: "Für Laser Tag, Gel Blaster und Nerf sind mindestens 4 Spieler erforderlich, maximal 12. Bei weniger Personen können wir Sie mit einer anderen Gruppe zusammenlegen — kontaktieren Sie uns.",

    faq_q3: "Tut es weh?",
    faq_a3: "Nein. Laser Tag verwendet keine Projektile — nur Infrarotstrahlen. Gel-Blaster-Bällchen sind weich und platzen beim Aufprall schmerzlos. Nerf-Darts sind aus Schaumstoff und völlig sicher.",

    faq_q4: "Was soll ich mitbringen?",
    faq_a4: "Festes älteres Sportschuhwerk (empfohlen) und bequeme Bewegungskleidung. Für Laser Tag nichts Besonderes — die Ausrüstung liegt vor Ort bereit. Für Gel Blaster empfehlen wir ein Ersatz-T-Shirt.",

    faq_q5: "Wo befindet sich die NEON TANK ARENA?",
    faq_a5: "Wir befinden uns in Bratislava, Kopčianska 6211 (selbes Gebäude wie Raccoon City). Parkplatz direkt vor dem Gebäude. Genaue Anweisungen erhalten Sie nach der Buchung.",

    faq_q6: "Darf ich eine Geburtstagstorte mitbringen?",
    faq_a6: "Ja! Ein Tisch in der Erholungszone und ein Kühlschrank für die Torte stehen kostenlos zur Verfügung — bitte vorher Bescheid geben. Bitte eigenes Messer, Pappteller und Besteck mitbringen.",

    faq_q7: "Wie funktioniert Zahlung und Anzahlung?",
    faq_a7: "Eine Anzahlung von 50€ sichert Ihre verbindliche Reservierung (wird vom Endpreis abgezogen). Zahlung vor Ort: Bargeld oder Karte. Rückerstattung der Anzahlung nur bei Stornierung mehr als 48 Stunden vorher.",

    faq_q8: "Kann ich eine Firmenrechnung bekommen?",
    faq_a8: "Ja, wir fakturieren Firmen-Teambuildings problemlos. Bitte beim Buchen angeben, dann bereiten wir die Unterlagen vor.",

    cta_title: "Bereit für den Kampf?",
    cta_sub: "Buche noch heute — Kapazität ist begrenzt.",
    cta_btn_book: "Online buchen",
    cta_btn_call: "Uns anrufen",

    footer_tagline: "Saubere Kampfaktivitäten für die ganze Familie.",
    footer_activities: "Aktivitäten",
    footer_events: "Events",
    footer_info: "Informationen",
    footer_contact: "Kontakt",
    footer_privacy: "Datenschutz",
    footer_terms: "Nutzungsbedingungen",
    footer_copy: "© 2025 Warlords. Alle Rechte vorbehalten.",
    footer_kids: "Kindergeburtstag",
    footer_bach: "JGA / Abschiedsfeier",
    footer_team: "Team Building",
    footer_school: "Schulgruppen",
    footer_pricing: "Preise",
    footer_about: "Über uns",
    footer_faq: "FAQ",
    footer_booking: "Online-Buchung",
  }
};

/* ---- LANGUAGE ENGINE ---- */
let currentLang = localStorage.getItem('wl_lang') || 'sk';

function applyLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  localStorage.setItem('wl_lang', lang);

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' && el.type !== 'submit') {
        el.placeholder = T[lang][key];
      } else {
        el.innerHTML = T[lang][key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (T[lang][key]) el.href = T[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (T[lang][key]) el.title = T[lang][key];
  });
}

function initLang() {
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam && T[urlParam]) currentLang = urlParam;
  applyLang(currentLang);
}

/* ---- NAVBAR ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ---- PRICING TABS ---- */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

/* ---- FAQ ---- */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ---- STICKY BUTTON ---- */
function initSticky() {
  const btn = document.getElementById('stickyBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/* ---- SCROLL ANIMATIONS ---- */
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ---- LANG BUTTONS ---- */
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ---- SMOOTH SCROLL ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNavbar();
  initTabs();
  initFAQ();
  initSticky();
  initAnimations();
  initLangButtons();
  initSmoothScroll();
});
