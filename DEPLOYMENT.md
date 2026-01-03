# دليل النشر على Vercel

هذا المشروع Static Site جاهز للنشر على Vercel بدون أي تعديلات.

## الخطوات السريعة

### 1. رفع المشروع على GitHub

```bash
# إنشاء repository جديد على GitHub
# ثم:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/alrukun-alsakani.git
git push -u origin main
```

### 2. نشر على Vercel

#### الطريقة الأولى: عبر Vercel Dashboard (الموصى بها)

1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط "New Project"
3. اختر "Import Git Repository"
4. اختر repository من GitHub
5. Vercel سيكتشف الإعدادات تلقائياً:
   - **Framework**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
6. اضغط "Deploy"

#### الطريقة الثانية: عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر (من جذر المشروع)
vercel

# أو للإنتاج مباشرة:
vercel --prod
```

### 3. ربط Domain مخصص (اختياري)

1. في Vercel Dashboard، اذهب إلى Project Settings
2. اختر "Domains"
3. أضف domain مخصص
4. اتبع التعليمات لتحديث DNS

## الملفات المهمة

- **vercel.json**: إعدادات Vercel (لا تحتاج تعديل)
- **vite.config.ts**: إعدادات Vite (لا تحتاج تعديل)
- **package.json**: المتعلقات والـ scripts

## التحقق من البناء محلياً

```bash
# بناء المشروع
pnpm build

# معاينة البناء
pnpm preview

# سيفتح على http://localhost:4173
```

## ملاحظات مهمة

✅ **المشروع جاهز للنشر بدون أي تعديلات**

- لا توجد متغيرات بيئة مطلوبة
- لا توجد قاعدة بيانات
- لا توجد API endpoints
- جميع الملفات الثابتة في `client/public/`
- البناء ينتج في `dist/`

## استكشاف الأخطاء

### الموقع يعرض 404 بعد النشر

تأكد من أن `vercel.json` يحتوي على:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### الصور لا تظهر

تأكد من أن الصور في `client/public/images/` وتم الإشارة إليها بـ `/images/filename`

### الأنماط (CSS) لا تظهر

تأكد من أن `vite.config.ts` يحتوي على:
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
}
```

## الدعم

للمزيد من المعلومات:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
