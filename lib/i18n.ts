export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  meta: {
    title: 'JLearn · Learn Japanese with friends',
    description:
      'JLearn makes learning Japanese feel like hanging out with friends. Bite-size lessons with Poko, Mame and Kon.',
  },
  nav: { crew: 'Meet the crew', how: 'How it works', cta: 'Get the app', language: 'Language' },
  hero: {
    streak: 'Daily streak',
    title: { before: 'Learn Japanese with ', highlight: 'friends', after: ', not flashcards.' },
    lead: 'Five-minute lessons, real conversations, and a crew of animal friends who cheer you on. No guilt trips.',
    correct: 'Correct!',
    school: 'school',
  },
  store: {
    apple: { small: 'Download on the', aria: 'Download on the App Store' },
    play: { small: 'Get it on', aria: 'Get it on Google Play' },
  },
  qr: {
    title: 'Scan to download',
    body: 'Point your phone camera here. Works on iOS and Android.',
    alt: 'QR code (placeholder)',
  },
  crew: {
    eyebrow: 'THE CREW',
    title: 'Three friends, one goal: you speaking Japanese.',
    sub: 'Tap a friend to say hi.',
    poko: {
      tag: 'Guide',
      desc: 'A patient tanuki who explains grammar like a favourite teacher. Knows everything, never shows off.',
      quote: '“Let’s do our best together!”',
    },
    mame: {
      tag: 'Buddy',
      desc: 'A shiba learning right alongside you. Cheers loudly, gets things wrong too, so your mistakes feel normal.',
      quote: '“Yay! We did it!”',
    },
    kon: {
      tag: 'Rival',
      desc: 'A smug little fox who shows up on leaderboards and timed rounds. Secretly rooting for you.',
      quote: '“Hmph. Not bad, I guess.”',
    },
  },
  how: {
    eyebrow: 'HOW IT WORKS',
    title: 'A little every day goes a long way.',
    steps: [
      { title: 'Bite-size lessons', body: 'Hiragana to real conversations in five-minute sessions that fit your day.' },
      { title: 'Speak out loud', body: 'Practise pronunciation and the crew listens, reacts and helps you improve.' },
      { title: 'Friendly streaks', body: 'Keep a streak going with Mame. Miss a day? Mame just gets sleepy.' },
    ],
  },
  cta: {
    label: 'FREE · iOS & ANDROID',
    title: 'Start your first lesson today.',
    body: 'Download JLearn and meet Poko, Mame and Kon.',
    scan: 'Scan with your phone',
  },
  footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
};

export type Dictionary = typeof en;

// Vietnamese copy. Keep it in precomposed (NFC) form; the Lexend font covers every Vietnamese letter.
const vi: Dictionary = {
  meta: {
    title: 'JLearn · Học tiếng Nhật cùng bạn bè',
    description:
      'JLearn giúp việc học tiếng Nhật vui như đi chơi cùng bạn bè. Bài học ngắn gọn cùng Poko, Mame và Kon.',
  },
  nav: { crew: 'Nhóm bạn', how: 'Cách học', cta: 'Tải ứng dụng', language: 'Ngôn ngữ' },
  hero: {
    streak: 'Chuỗi ngày học',
    title: { before: 'Học tiếng Nhật cùng ', highlight: 'bạn bè', after: ', không phải học vẹt.' },
    lead: 'Bài học 5 phút, hội thoại thực tế, cùng một nhóm bạn thú đáng yêu luôn cổ vũ bạn. Không áp lực, không trách móc.',
    correct: 'Chính xác!',
    school: 'trường học',
  },
  store: {
    apple: { small: 'Tải về trên', aria: 'Tải về trên App Store' },
    play: { small: 'Tải nội dung trên', aria: 'Tải nội dung trên Google Play' },
  },
  qr: {
    title: 'Quét mã để tải',
    body: 'Mở camera điện thoại và quét mã. Dùng được trên iOS và Android.',
    alt: 'Mã QR (tạm thời)',
  },
  crew: {
    eyebrow: 'NHÓM BẠN',
    title: 'Ba người bạn, một mục tiêu: giúp bạn nói được tiếng Nhật.',
    sub: 'Chạm vào một bạn để chào nhé.',
    poko: {
      tag: 'Dẫn dắt',
      desc: 'Chú tanuki kiên nhẫn, giảng ngữ pháp như một thầy giáo bạn yêu quý. Biết mọi thứ nhưng chẳng bao giờ khoe khoang.',
      quote: '“Cùng nhau cố gắng nhé!”',
    },
    mame: {
      tag: 'Bạn học',
      desc: 'Chú shiba đang học cùng bạn. Cổ vũ nhiệt tình, cũng hay sai như bạn, nên mắc lỗi chẳng có gì đáng ngại.',
      quote: '“Yay! Làm được rồi!”',
    },
    kon: {
      tag: 'Đối thủ',
      desc: 'Chú cáo nhỏ hơi kiêu, hay xuất hiện ở bảng xếp hạng và các vòng tính giờ. Thật ra vẫn luôn ủng hộ bạn.',
      quote: '“Hừm. Cũng tạm được đấy.”',
    },
  },
  how: {
    eyebrow: 'CÁCH HỌC',
    title: 'Mỗi ngày một chút, tiến bộ thật nhiều.',
    steps: [
      { title: 'Bài học ngắn gọn', body: 'Từ bảng chữ hiragana đến hội thoại thực tế, mỗi buổi chỉ 5 phút, vừa vặn với lịch của bạn.' },
      { title: 'Luyện nói thành tiếng', body: 'Tập phát âm, cả nhóm sẽ lắng nghe, phản hồi và giúp bạn tiến bộ.' },
      { title: 'Chuỗi ngày học vui vẻ', body: 'Giữ chuỗi ngày học cùng Mame. Lỡ bỏ một ngày? Mame chỉ hơi buồn ngủ thôi.' },
    ],
  },
  cta: {
    label: 'MIỄN PHÍ · iOS & ANDROID',
    title: 'Bắt đầu bài học đầu tiên ngay hôm nay.',
    body: 'Tải JLearn và làm quen với Poko, Mame và Kon.',
    scan: 'Quét bằng điện thoại',
  },
  footer: { privacy: 'Quyền riêng tư', terms: 'Điều khoản', contact: 'Liên hệ' },
};

const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
