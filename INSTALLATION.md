# دليل تثبيت مشروع ORCA Truck Parts

## نظرة عامة
هذا الدليل يشرح خطوات تثبيت وتشغيل مشروع موقع ORCA Truck Parts باستخدام Laravel.

## المتطلبات الأساسية

### 1. النظام والخادم
- نظام تشغيل: Windows، Linux، أو macOS
- ويب سيرفر: Apache أو Nginx
- قاعدة بيانات: MySQL 8.0+ أو MariaDB 10.4+
- PHP 8.1+ مع الامتدادات التالية:
  - OpenSSL
  - PDO
  - Mbstring
  - Tokenizer
  - XML
  - Ctype
  - JSON
  - GD (لدعم الصور)

### 2. الأدوات المطلوبة
- Composer (مدير حزم PHP)
- Git
- Node.js وnpm (لإدارة الحزم الأمامية)

## خطوات التثبيت

### 1. استنساخ المشروع
```bash
git clone <repository-url> orca-truck-parts
cd orca-truck-parts
```

### 2. تثبيت الحزم
```bash
composer install
npm install
```

### 3. إعداد ملف الإعدادات
```bash
cp .env.example .env
```

### 4. إنشاء مفتاح التطبيق
```bash
php artisan key:generate
```

### 5. إعداد قاعدة البيانات
- قم بإنشاء قاعدة بيانات فارغة في MySQL/MariaDB
- قم بتحديث الإعدادات التالية في ملف `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

### 6. تشغيل الترحيلات
```bash
php artisan migrate --seed
```

### 7. إعداد أذونات الملفات
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### 8. إعداد روابط الوسائط
```bash
php artisan storage:link
```

### 9. إعداد المهام المجدولة (اختياري)
أضف هذا السطر إلى crontab:
```
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

## الإعدادات الإضافية

### 1. إعداد البريد الإلكتروني
تحديث الإعدادات التالية في ملف `.env`:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
```

### 2. إعداد التخزين السحابي (اختياري)
```
FILESYSTEM_DISK=public
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
```

## تشغيل المشروع

### 1. تشغيل الخادم المحلي
```bash
php artisan serve
```
ال проект سيتم تشغيله على http://127.0.0.1:8000

### 2. تشغيل واجهة المستخدم
```bash
npm run dev
```

## إعداد لوحة التحكم

### 1. إنشاء حساب المشرف الأول
```bash
php artisan db:seed --class=AdminUserSeeder
```

### 2. اسم المستخدم وكلمة المرور الافتراضية
- البريد الإلكتروني: admin@orcatruckparts.com
- كلمة المرور: password
- يجب تغيير كلمة المرور عند أول تسجيل دخول

## الإعدادات المتقدمة

### 1. التحسينات للأداء
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 2. تشغيل الخلفية (Queue Worker)
```bash
php artisan queue:work
```

## الأمان

### 1. تحديث كلمة مرور المشرف
- قم بزيارة لوحة التحكم
- انتقل إلى إعدادات الحساب
- قم بتغيير كلمة المرور الافتراضية

### 2. تأمين الوصول
- تأكد من تفعيل HTTPS
- قم بتحديث `.env` مع إعدادات الأمان
- قم بتأمين المجلدات المهمة

## الأخطاء الشائعة

### 1. خطأ في الملفات المفقودة
- تأكد من تشغيل `composer install`
- تأكد من تشغيل `php artisan storage:link`

### 2. خطأ في قاعدة البيانات
- تحقق من إعدادات `.env`
- تأكد من تشغيل الخادم
- تأكد من وجود قاعدة البيانات

### 3. خطأ في إذن الملفات
- تأكد من تشغيل أوامر chmod المذكورة أعلاه
- تأكد من أن المستخدم لديه إذن الكتابة

## الصيانة

### 1. النسخ الاحتياطي
```bash
php artisan backup:run
```

### 2. مسح الملفات المؤقتة
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## دعم اللغة

- الموقع يدعم اللغة العربية والإنجليزية
- يمكنك إضافة لغات إضافية في مجلد `resources/lang`
- استخدم وظيفة الترجمة في Laravel

## دعم الوضع المظلم

- ميزة الوضع المظلم مدمجة في واجهة المستخدم
- يتم حفظ تفضيل المستخدم في localStorage
- يمكن تخصيص الألوان من خلال CSS

## الاستنتاج

بمجرد اتباع هذه الخطوات، سيكون لديك نسخة عمل من مشروع ORCA Truck Parts جاهزة للاستخدام. تأكد من مراجعة الوثائق الداخلية للحصول على معلومات إضافية حول كل ميزة.