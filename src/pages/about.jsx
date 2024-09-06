// pages/about.jsx
import SeoHead from '../components/SeoHead';
import styles from '../styles/About.module.css';
import { FaInfoCircle, FaHome, FaDonate } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <SeoHead
        title="من نحن - موقع القرآن الكريم"
        description="تعرف على موقع القرآن الكريم ورؤيته لتقديم محتوى متكامل للقرآن الكريم."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/images/about-image.jpg`}
        keywords="موقع القرآن الكريم, معلومات عنا, رؤية الموقع"
      />
      <main className={styles.container}>
        <section className={styles.section}>
          <h1 className={styles.title}><FaHome className={styles.titleIcon} title='من نحن' aria-label='من نحن'/> من نحن</h1>
          <p className={styles.paragraph} title='موقع القرآن الكريم يهدف إلى تقديم محتوى شامل ومتقدم يخص القرآن الكريم' aria-label='موقع القرآن الكريم يهدف إلى تقديم محتوى شامل ومتقدم يخص القرآن الكريم'>
            موقع القرآن الكريم يهدف إلى تقديم محتوى شامل ومتقدم يخص القرآن الكريم، بما في ذلك فهرس القرآن،
            ملفات PDF و MP3، وصفحات للقراء. نعمل على توفير تجربة متميزة للمستخدمين وتسهيل الوصول إلى المحتوى القرآني.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}><FaInfoCircle className={styles.titleIcon} title='رؤيتنا' aria-label='رؤيتنا' /> رؤيتنا</h2>
          <p className={styles.paragraph}>
            نسعى من خلال هذا الموقع إلى تقديم محتوى دقيق وموثوق يتماشى مع احتياجات المستخدمين في استكشاف وتعلم القرآن الكريم.
            نحن ملتزمون بتوفير تجربة مريحة وسلسة لمساعدة المستخدمين على الوصول إلى الموارد القرآنية بسهولة.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}><FaDonate className={styles.titleIcon} title='الدعم' aria-label='الدعم' /> الدعم</h2>
          <p className={styles.paragraph} title='يمكنكم دعم تطوير الموقع وتحسين خدماته عبر التبرع من خلال PayPal.' aria-label='يمكنكم دعم تطوير الموقع وتحسين خدماته عبر التبرع من خلال PayPal.'>
            يمكنكم دعم تطوير الموقع وتحسين خدماته عبر التبرع من خلال PayPal.
            كل تبرع يسهم في تطوير بنية الموقع الأساسية وتعزيز التجربة المقدمة.
          </p>
          <p>
            تبرع عبر PayPal: <a href="https://paypal.me/i8xTeam?country.x=SA&locale.x=ar_EG" target="_blank" rel="noopener noreferrer" className={styles.link} title='تبرع هنا' aria-label='تبرع هنا'>تبرع هنا</a>
          </p>
          <p title='يمكنكم أيضًا التواصل معنا عبر البريد الإلكتروني [rn0x.me@gmail.com] لأي استفسارات.' aria-label='يمكنكم أيضًا التواصل معنا عبر البريد الإلكتروني [rn0x.me@gmail.com] لأي استفسارات.'>
            يمكنكم أيضًا التواصل معنا عبر البريد الإلكتروني [rn0x.me@gmail.com] لأي استفسارات.
          </p>
        </section>
      </main>
    </>
  );
}