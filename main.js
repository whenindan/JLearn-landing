// Inject the character SVGs into every <!--POKO--> / <!--MAME--> / <!--KON--> slot.
(function injectCharacters() {
  const tpls = {
    POKO: document.getElementById('tpl-poko'),
    MAME: document.getElementById('tpl-mame'),
    KON: document.getElementById('tpl-kon'),
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT);
  const slots = [];
  while (walker.nextNode()) {
    const name = walker.currentNode.nodeValue.trim();
    if (tpls[name]) slots.push([walker.currentNode, tpls[name]]);
  }
  for (const [node, tpl] of slots) node.replaceWith(tpl.content.cloneNode(true));
})();

// Tap / click a character to play its "correct" celebration, then return to idle.
(function celebrateOnTap() {
  function celebrate(el) {
    if (!el || el.classList.contains('st-correct')) return;
    el.classList.replace('st-idle', 'st-correct');
    const whole = el.querySelector('.whole');
    const done = () => el.classList.replace('st-correct', 'st-idle');
    whole.addEventListener('animationend', done, { once: true });
    setTimeout(done, 1400); // fallback when animations are disabled
  }
  document.querySelectorAll('.stage .c').forEach((c) => c.addEventListener('click', () => celebrate(c)));
  document.querySelectorAll('[data-char]').forEach((card) =>
    card.addEventListener('click', () => celebrate(card.querySelector('.poko, .mame, .kon')))
  );
  // Hero bubble cycles through each character's line.
  const bubble = document.querySelector('.bubble');
  const lines = ['いっしょに がんばろう！', 'やった！できた！', 'ふーん、まあまあだね。'];
  let i = 0;
  if (bubble) setInterval(() => { bubble.textContent = lines[++i % lines.length]; }, 3500);
})();

// Placeholder QR code: looks like a real one, encodes nothing.
// TODO: replace with a real QR (e.g. a smart link that redirects to the right store).
(function fakeQR() {
  const N = 25;
  let seed = 20260930;
  const rand = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

  const grid = Array.from({ length: N }, () => Array.from({ length: N }, () => rand() > 0.52));
  const finder = (r0, c0) => {
    for (let r = -1; r <= 7; r++) for (let c = -1; c <= 7; c++) {
      const rr = r0 + r, cc = c0 + c;
      if (rr < 0 || cc < 0 || rr >= N || cc >= N) continue;
      const ring = Math.max(Math.abs(r - 3), Math.abs(c - 3));
      grid[rr][cc] = r >= 0 && c >= 0 && r <= 6 && c <= 6 && ring !== 2;
    }
  };
  finder(0, 0); finder(0, N - 7); finder(N - 7, 0);
  for (let i = 8; i < N - 8; i++) { grid[6][i] = i % 2 === 0; grid[i][6] = i % 2 === 0; } // timing
  for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) { // alignment
    const ring = Math.max(Math.abs(r), Math.abs(c));
    grid[N - 7 + r][N - 7 + c] = ring !== 1;
  }

  let d = '';
  grid.forEach((row, r) => row.forEach((on, c) => { if (on) d += `M${c} ${r}h1v1h-1z`; }));
  const svg = `<svg viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges" role="img" aria-label="QR code (placeholder)"><path d="${d}" fill="#1F1A17"/></svg>`;
  document.querySelectorAll('[data-qr]').forEach((el) => { el.innerHTML = svg; });
})();

// English / Vietnamese copy. English is the markup default; Vietnamese is applied on switch.
// Picks ?lang=vi|en, then the saved choice, then the browser language.
(function i18n() {
  const VI = {
    'meta.title': 'JLearn · Học tiếng Nhật cùng bạn bè',
    'meta.desc': 'JLearn giúp việc học tiếng Nhật vui như đi chơi cùng bạn bè. Bài học ngắn gọn cùng Poko, Mame và Kon.',
    'nav.crew': 'Nhóm bạn',
    'nav.how': 'Cách học',
    'nav.cta': 'Tải ứng dụng',
    'hero.streak': 'Chuỗi ngày học',
    'hero.title': 'Học tiếng Nhật cùng <span class="hl">bạn bè</span>, không phải học vẹt.',
    'hero.lead': 'Bài học 5 phút, hội thoại thực tế, cùng một nhóm bạn thú đáng yêu luôn cổ vũ bạn. Không áp lực, không trách móc.',
    'hero.correct': 'Chính xác!',
    'hero.school': 'trường học',
    'store.apple': 'Tải về trên',
    'store.play': 'Tải nội dung trên',
    'store.apple.aria': 'Tải về trên App Store',
    'store.play.aria': 'Tải nội dung trên Google Play',
    'qr.title': 'Quét mã để tải',
    'qr.body': 'Mở camera điện thoại và quét mã. Dùng được trên iOS và Android.',
    'crew.eyebrow': 'NHÓM BẠN',
    'crew.title': 'Ba người bạn, một mục tiêu: giúp bạn nói được tiếng Nhật.',
    'crew.sub': 'Chạm vào một bạn để chào nhé.',
    'poko.tag': 'Dẫn dắt',
    'poko.desc': 'Chú tanuki kiên nhẫn, giảng ngữ pháp như một thầy giáo bạn yêu quý. Biết mọi thứ nhưng chẳng bao giờ khoe khoang.',
    'poko.quote': '“Cùng nhau cố gắng nhé!”',
    'mame.tag': 'Bạn học',
    'mame.desc': 'Chú shiba đang học cùng bạn. Cổ vũ nhiệt tình, cũng hay sai như bạn, nên mắc lỗi chẳng có gì đáng ngại.',
    'mame.quote': '“Yay! Làm được rồi!”',
    'kon.tag': 'Đối thủ',
    'kon.desc': 'Chú cáo nhỏ hơi kiêu, hay xuất hiện ở bảng xếp hạng và các vòng tính giờ. Thật ra vẫn luôn ủng hộ bạn.',
    'kon.quote': '“Hừm. Cũng tạm được đấy.”',
    'how.eyebrow': 'CÁCH HỌC',
    'how.title': 'Mỗi ngày một chút, tiến bộ thật nhiều.',
    'how.1t': 'Bài học ngắn gọn',
    'how.1b': 'Từ bảng chữ hiragana đến hội thoại thực tế, mỗi buổi chỉ 5 phút, vừa vặn với lịch của bạn.',
    'how.2t': 'Luyện nói thành tiếng',
    'how.2b': 'Tập phát âm, cả nhóm sẽ lắng nghe, phản hồi và giúp bạn tiến bộ.',
    'how.3t': 'Chuỗi ngày học vui vẻ',
    'how.3b': 'Giữ chuỗi ngày học cùng Mame. Lỡ bỏ một ngày? Mame chỉ hơi buồn ngủ thôi.',
    'cta.label': 'MIỄN PHÍ · iOS &amp; ANDROID',
    'cta.title': 'Bắt đầu bài học đầu tiên ngay hôm nay.',
    'cta.body': 'Tải JLearn và làm quen với Poko, Mame và Kon.',
    'cta.scan': 'Quét bằng điện thoại',
    'foot.privacy': 'Quyền riêng tư',
    'foot.terms': 'Điều khoản',
    'foot.contact': 'Liên hệ',
  };

  const nodes = {
    text: [...document.querySelectorAll('[data-i18n]')],
    html: [...document.querySelectorAll('[data-i18n-html]')],
    aria: [...document.querySelectorAll('[data-i18n-aria]')],
  };
  const desc = document.querySelector('meta[name="description"]');
  // Snapshot the English markup so switching back needs no second dictionary.
  const EN = { 'meta.title': document.title, 'meta.desc': desc.content };
  nodes.text.forEach((el) => { EN[el.dataset.i18n] = el.textContent; });
  nodes.html.forEach((el) => { EN[el.dataset.i18nHtml] = el.innerHTML; });
  nodes.aria.forEach((el) => { EN[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  function apply(lang) {
    const dict = lang === 'vi' ? VI : EN;
    const t = (k) => dict[k] ?? EN[k];
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    desc.content = t('meta.desc');
    nodes.text.forEach((el) => { el.textContent = t(el.dataset.i18n); });
    nodes.html.forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    nodes.aria.forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  let saved = null;
  try { saved = localStorage.getItem('jlearn-lang'); } catch (e) {}
  const param = new URLSearchParams(location.search).get('lang');
  const browser = (navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en';
  const initial = [param, saved, browser].find((l) => l === 'vi' || l === 'en');
  if (initial === 'vi') apply('vi');

  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    apply(b.dataset.lang);
    try { localStorage.setItem('jlearn-lang', b.dataset.lang); } catch (e) {}
  }));
})();
