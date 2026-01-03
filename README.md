# الركن السكني للصيانة والتشغيل

موقع تعريفي عصري وأنيق للشركة - Static Site جاهز للنشر على Vercel.

## المميزات

- ✅ Frontend فقط (Vite + React)
- ✅ بدون Back-end أو Server
- ✅ صفحة واحدة (Landing Page)
- ✅ SPA Routing مع Wouter
- ✅ تصميم عصري مع Tailwind CSS
- ✅ جاهز للنشر على Vercel
- ✅ دعم RTL (العربية)

## المتطلبات

- Node.js 16+
- pnpm (أو npm/yarn)

## التثبيت والتطوير

```bash
# تثبيت المتعلقات
pnpm install

# تشغيل خادم التطوير
pnpm dev

# بناء المشروع للإنتاج
pnpm build

# معاينة البناء
pnpm preview
```

## البناء والنشر على Vercel

### الطريقة 1: عبر GitHub (الموصى بها)

1. ارفع المشروع على GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. اختر "Import Project"
4. اختر repository من GitHub
5. Vercel سيكتشف الإعدادات تلقائياً من `vercel.json`
6. اضغط Deploy

### الطريقة 2: عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

## بنية المشروع

```
client/
├── public/           # الملفات الثابتة والصور
├── src/
│   ├── components/   # مكونات React
│   ├── pages/        # الصفحات
│   ├── contexts/     # React Contexts
│   ├── lib/          # دوال مساعدة
│   ├── App.tsx       # تطبيق رئيسي
│   ├── main.tsx      # نقطة الدخول
│   └── index.css     # الأنماط العامة
└── index.html        # ملف HTML الرئيسي

dist/                 # مجلد البناء (ينتج عند البناء)
vercel.json           # إعدادات Vercel
vite.config.ts        # إعدادات Vite
```

## الإعدادات

### vercel.json

يحتوي على:
- `buildCommand`: أمر البناء (`pnpm build`)
- `outputDirectory`: مجلد الإخراج (`dist`)
- `framework`: نوع الإطار (`vite`)
- `rewrites`: إعادة توجيه جميع الطلبات إلى `index.html` (لـ SPA routing)

## البيئة

لا توجد متغيرات بيئة مطلوبة للتشغيل الأساسي.

## الترخيص

MIT
