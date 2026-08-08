export type Lang = "en" | "ar"

export type Localized = { en: string; ar: string }

export type Tool = {
  id: string
  name: string
  url?: string
  tagline: Localized
  category: Localized
  icon: string
  votes: number
  rating: number
  featured?: boolean
  tag?: Localized
}

export const dictionary = {
  brand: { en: "arab-ai-experts", ar: "خبراء الذكاء العربي" },
  nav: {
    discover: { en: "Discover", ar: "اكتشف" },
    categories: { en: "Categories", ar: "الفئات" },
    submit: { en: "Submit a Tool", ar: "أضف أداة" },
    signIn: { en: "Sign In", ar: "تسجيل الدخول" },
  },
  hero: {
    badge: { en: "The #1 Arabic AI Tools Directory", ar: "الدليل الأول لأدوات الذكاء الاصطناعي العربية" },
    title: {
      en: "Discover the best AI tools, every day",
      ar: "اكتشف أفضل أدوات الذكاء الاصطناعي، كل يوم",
    },
    subtitle: {
      en: "A curated directory of the most powerful AI tools for creators, founders, and teams across the Arab world.",
      ar: "دليل مختار لأقوى أدوات الذكاء الاصطناعي للمبدعين ورواد الأعمال والفرق في العالم العربي.",
    },
    ctaPrimary: { en: "Explore Tools", ar: "استكشف الأدوات" },
    ctaSecondary: { en: "Submit Your Tool", ar: "أضف أداتك" },
    search: { en: "Search AI tools...", ar: "ابحث عن أدوات الذكاء الاصطناعي..." },
    statTools: { en: "AI Tools", ar: "أداة ذكاء" },
    statCategories: { en: "Categories", ar: "فئة" },
    statUsers: { en: "Monthly Users", ar: "مستخدم شهريًا" },
  },
  sections: {
    featured: { en: "Top Featured Tools", ar: "أبرز الأدوات المميزة" },
    featuredSub: { en: "Hand-picked tools trending this week", ar: "أدوات مختارة بعناية رائجة هذا الأسبوع" },
    video: { en: "Video Production", ar: "إنتاج الفيديو" },
    videoSub: { en: "Generate, edit, and scale video content", ar: "أنشئ وحرّر ووسّع محتوى الفيديو" },
    productivity: { en: "Productivity", ar: "الإنتاجية" },
    productivitySub: { en: "Work smarter and automate your day", ar: "اعمل بذكاء وأتمت يومك" },
    business: { en: "Business Tools", ar: "أدوات الأعمال" },
    businessSub: { en: "Grow, analyze, and run your company", ar: "نمِّ وحلّل وأدر شركتك" },
    viewAll: { en: "View all", ar: "عرض الكل" },
  },
  card: {
    visit: { en: "Visit", ar: "زيارة" },
    upvote: { en: "Upvote", ar: "تصويت" },
  },
  submit: {
    title: { en: "Submit your AI tool", ar: "أضف أداة الذكاء الاصطناعي الخاصة بك" },
    subtitle: {
      en: "Share your tool with the Arab world's fastest-growing AI community. Free submissions are reviewed before going live.",
      ar: "شارك أداتك مع أسرع مجتمع ذكاء اصطناعي نموًا في العالم العربي. تتم مراجعة الطلبات المجانية قبل نشرها.",
    },
    name: { en: "Tool name", ar: "اسم الأداة" },
    url: { en: "Website URL", ar: "رابط الموقع" },
    taglineEn: { en: "Short description (English)", ar: "وصف قصير (بالإنجليزية)" },
    taglineAr: { en: "Short description (Arabic)", ar: "وصف قصير (بالعربية)" },
    categoryEn: { en: "Category (English)", ar: "الفئة (بالإنجليزية)" },
    categoryAr: { en: "Category (Arabic)", ar: "الفئة (بالعربية)" },
    section: { en: "Section", ar: "القسم" },
    email: { en: "Your email", ar: "بريدك الإلكتروني" },
    send: { en: "Submit for review", ar: "إرسال للمراجعة" },
    sending: { en: "Submitting...", ar: "جارٍ الإرسال..." },
    success: {
      en: "Thank you! Your tool has been submitted and is pending review.",
      ar: "شكرًا لك! تم إرسال أداتك وهي قيد المراجعة.",
    },
    error: { en: "Something went wrong. Please try again.", ar: "حدث خطأ ما. حاول مرة أخرى." },
    back: { en: "Back to directory", ar: "العودة إلى الدليل" },
    featuredTitle: { en: "Want the spotlight?", ar: "تريد أن تكون في الصدارة؟" },
    featuredDesc: {
      en: "Get your tool featured at the top of the directory, seen by thousands of daily visitors.",
      ar: "اجعل أداتك مميزة في أعلى الدليل، ليراها آلاف الزوار يوميًا.",
    },
    featuredCta: { en: "Feature my tool", ar: "ميّز أداتي" },
  },
  sectionNames: {
    featured: { en: "Featured", ar: "مميزة" },
    video: { en: "Video Production", ar: "إنتاج الفيديو" },
    productivity: { en: "Productivity", ar: "الإنتاجية" },
    business: { en: "Business Tools", ar: "أدوات الأعمال" },
  },
  footer: {
    tagline: {
      en: "The home of Arabic AI innovation. Curated daily.",
      ar: "موطن الابتكار العربي في الذكاء الاصطناعي. مختارة يوميًا.",
    },
    product: { en: "Product", ar: "المنتج" },
    company: { en: "Company", ar: "الشركة" },
    resources: { en: "Resources", ar: "الموارد" },
    follow: { en: "Follow us", ar: "تابعنا" },
    rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
    links: {
      browse: { en: "Browse Tools", ar: "تصفح الأدوات" },
      submit: { en: "Submit a Tool", ar: "أضف أداة" },
      pricing: { en: "Pricing", ar: "الأسعار" },
      about: { en: "About", ar: "من نحن" },
      blog: { en: "Blog", ar: "المدونة" },
      contact: { en: "Contact", ar: "تواصل معنا" },
      privacy: { en: "Privacy", ar: "الخصوصية" },
      terms: { en: "Terms", ar: "الشروط" },
    },
  },
} as const

export const featuredTools: Tool[] = [
  {
    id: "nova-write",
    name: "NovaWrite",
    tagline: { en: "AI copywriter for Arabic & English campaigns", ar: "كاتب إعلانات بالذكاء الاصطناعي للحملات العربية والإنجليزية" },
    category: { en: "Writing", ar: "الكتابة" },
    icon: "Sparkles",
    votes: 2841,
    rating: 4.9,
    featured: true,
    tag: { en: "Editor's Choice", ar: "اختيار المحررين" },
  },
  {
    id: "lumio",
    name: "Lumio AI",
    tagline: { en: "Turn text prompts into cinematic video", ar: "حوّل النصوص إلى فيديو سينمائي" },
    category: { en: "Video", ar: "فيديو" },
    icon: "Clapperboard",
    votes: 2105,
    rating: 4.8,
    featured: true,
    tag: { en: "Trending", ar: "رائج" },
  },
  {
    id: "sahab",
    name: "Sahab Analytics",
    tagline: { en: "Predictive insights for MENA businesses", ar: "رؤى تنبؤية لأعمال منطقة الشرق الأوسط" },
    category: { en: "Business", ar: "أعمال" },
    icon: "TrendingUp",
    votes: 1789,
    rating: 4.7,
    featured: true,
    tag: { en: "New", ar: "جديد" },
  },
]

export const videoTools: Tool[] = [
  {
    id: "reelforge",
    name: "ReelForge",
    tagline: { en: "Auto-generate short-form reels at scale", ar: "إنشاء مقاطع قصيرة تلقائيًا على نطاق واسع" },
    category: { en: "Video", ar: "فيديو" },
    icon: "Video",
    votes: 1342,
    rating: 4.6,
  },
  {
    id: "voicelayer",
    name: "VoiceLayer",
    tagline: { en: "Natural Arabic AI voiceovers & dubbing", ar: "تعليق صوتي ودبلجة عربية طبيعية بالذكاء الاصطناعي" },
    category: { en: "Audio", ar: "صوت" },
    icon: "AudioLines",
    votes: 1190,
    rating: 4.7,
  },
  {
    id: "framecut",
    name: "FrameCut",
    tagline: { en: "AI editor that cuts footage in seconds", ar: "محرر ذكي يقص اللقطات في ثوانٍ" },
    category: { en: "Editing", ar: "تحرير" },
    icon: "Scissors",
    votes: 988,
    rating: 4.5,
  },
  {
    id: "motionly",
    name: "Motionly",
    tagline: { en: "Text-to-motion graphics in one click", ar: "رسوم متحركة من النص بنقرة واحدة" },
    category: { en: "Motion", ar: "موشن" },
    icon: "Film",
    votes: 742,
    rating: 4.4,
  },
]

export const productivityTools: Tool[] = [
  {
    id: "tasksense",
    name: "TaskSense",
    tagline: { en: "AI planner that organizes your week", ar: "مخطط ذكي ينظم أسبوعك" },
    category: { en: "Planning", ar: "تخطيط" },
    icon: "CalendarCheck",
    votes: 1521,
    rating: 4.8,
  },
  {
    id: "notewise",
    name: "NoteWise",
    tagline: { en: "Summarize meetings & notes instantly", ar: "تلخيص الاجتماعات والملاحظات فورًا" },
    category: { en: "Notes", ar: "ملاحظات" },
    icon: "NotebookPen",
    votes: 1308,
    rating: 4.7,
  },
  {
    id: "inboxzero",
    name: "InboxZero AI",
    tagline: { en: "Draft and triage emails automatically", ar: "صياغة وفرز البريد الإلكتروني تلقائيًا" },
    category: { en: "Email", ar: "بريد" },
    icon: "Mail",
    votes: 1077,
    rating: 4.6,
  },
  {
    id: "flowbot",
    name: "FlowBot",
    tagline: { en: "Automate repetitive workflows visually", ar: "أتمتة المهام المتكررة بصريًا" },
    category: { en: "Automation", ar: "أتمتة" },
    icon: "Workflow",
    votes: 864,
    rating: 4.5,
  },
]

export const businessTools: Tool[] = [
  {
    id: "ledgerai",
    name: "LedgerAI",
    tagline: { en: "Smart bookkeeping for startups", ar: "محاسبة ذكية للشركات الناشئة" },
    category: { en: "Finance", ar: "مالية" },
    icon: "Calculator",
    votes: 1433,
    rating: 4.7,
  },
  {
    id: "pitchcraft",
    name: "PitchCraft",
    tagline: { en: "Generate investor-ready decks fast", ar: "إنشاء عروض جاهزة للمستثمرين بسرعة" },
    category: { en: "Sales", ar: "مبيعات" },
    icon: "Presentation",
    votes: 1276,
    rating: 4.6,
  },
  {
    id: "supportgenie",
    name: "SupportGenie",
    tagline: { en: "AI customer support in Arabic dialects", ar: "دعم عملاء بالذكاء الاصطناعي باللهجات العربية" },
    category: { en: "Support", ar: "دعم" },
    icon: "Headset",
    votes: 1102,
    rating: 4.8,
  },
  {
    id: "marketmind",
    name: "MarketMind",
    tagline: { en: "Competitor & market research on autopilot", ar: "أبحاث المنافسين والسوق تلقائيًا" },
    category: { en: "Research", ar: "أبحاث" },
    icon: "Lightbulb",
    votes: 935,
    rating: 4.5,
  },
]
