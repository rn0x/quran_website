import Head from 'next/head';

/**
 * مكون لتهيئة إعدادات الـ Head للصفحات
 * @param {Object} props
 * @param {string} [props.title='الموقع الإسلامي'] - عنوان الصفحة
 * @param {string} [props.description='وصف افتراضي لموقعك'] - وصف الصفحة
 * @param {string} [props.url=''] - عنوان URL الخاص بالصفحة
 * @param {string} [props.image=''] - رابط صورة تمثل الصفحة
 * @param {string} [props.keywords=''] - كلمات مفتاحية إضافية
 */
export default function SeoHead({
  title = 'موقع التقوى',
  description = 'التقوى هي سفينة النجاة يوم القيامة وهي التزام طاعة الله وطاعة رسوله, يهتم الموقع بنشر الثقافة الإسلامية.',
  url = null,
  image = null,
  keywords = 'Quran,  Quran mp3, قرآن كريم , قران صوت, بوت اذكار, التقوى, القارئ',
}) {
  // تحقق من أن جميع البيانات متاحة وغير فارغة
  const metaTitle = title ? title : 'موقع التقوى';
  const metaDescription = description ? description : 'التقوى هي سفينة النجاة يوم القيامة وهي التزام طاعة الله وطاعة رسوله, يهتم الموقع بنشر الثقافة الإسلامية.';
  const metaUrl = url ? url : null;
  const metaImage = image ? image : null;
  const metaKeywords = keywords ? keywords : 'Quran,  Quran mp3, قرآن كريم , قران صوت, بوت اذكار, التقوى, القارئ';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      {metaImage && <meta property="og:image" content={metaImage} />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
    </Head>
  );
}
