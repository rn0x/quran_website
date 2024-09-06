// pages/404.jsx
import Link from 'next/link';
import Image from 'next/image';
import SeoHead from '../components/SeoHead'
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <>
      <SeoHead
        title="صفحة غير موجودة - عذرًا"
        description="عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. ربما تم نقلها أو حذفها."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/404`}
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/images/page-not-found.svg`}
        keywords="خطأ 404, صفحة غير موجودة, عذرًا, موقع"
      />
      <main className={styles.container}>
        <div className={styles.illustration}>
          <Image
            src="/images/page-not-found.svg"
            alt="Page not found illustration"
            width={400}
            height={400}
          />
        </div>

        <p className={styles.description} title='عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. ربما تم نقلها أو حذفها.' aria-label='عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. ربما تم نقلها أو حذفها.'>
          عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة. ربما تم نقلها أو حذفها.
        </p>
        <Link href="/" className={styles.cta} title='العودة إلى الصفحة الرئيسية' aria-label='العودة إلى الصفحة الرئيسية'>
          العودة إلى الصفحة الرئيسية
        </Link>
      </main>
    </>
  );
}
