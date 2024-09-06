// components/Footer.jsx
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.socialLinks}>
        <Link href="https://t.me/KanzislamNet" target="_blank" rel="noopener noreferrer" aria-label="قناة تيليجرام كنز الإسلام">
          <FaTelegram className={styles.icon} />
        </Link>
      </div>

      <p title='لا تنسنا من دعوة صالحة بظهر الغيب' aria-label='لا تنسنا من دعوة صالحة بظهر الغيب'>
        لا تنسنا من دعوة صالحة بظهر الغيب
      </p>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/quran-pdf" title='القرآن الكريم PDF' aria-label="تحميل القرآن الكريم بصيغة PDF" className={styles.link}>
            القرآن الكريم PDF
          </Link>
          <Link href="/quran-mp3" title='القرآن الكريم MP3' aria-label="تحميل القرآن الكريم بصيغة MP3" className={styles.link}>
            القرآن الكريم MP3
          </Link>
          <Link href="/about" aria-label="معلومات عن الموقع" className={styles.link}>
            عن الموقع
          </Link>
          <Link href="https://t.me/KanzislamNet" target='__blank' aria-label="اتصل بنا" className={styles.link}>
            اتصل بنا
          </Link>
        </div>
        <div className={styles.copyright}>
          <p dir='ltr'>© 2024 موقع القرآن الكريم. جميع الحقوق محفوظة</p>
          <small>
            تم تطوير الموقع بواسطة <Link href="https://i8x.net" target='__blank' className={styles.poweredBy} aria-label="موقع i8x">i8x</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
