// pages/about.jsx
import SeoHead from '../components/SeoHead';
import styles from '../styles/About.module.css';
import { FaInfoCircle, FaHome, FaEnvelope } from 'react-icons/fa';

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
          <h1 className={styles.title}><FaHome className={styles.titleIcon} title='من نحن' aria-label='من نحن' /> من نحن</h1>
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
          <h2 className={styles.title}><FaEnvelope className={styles.titleIcon} title='التواصل' aria-label='التواصل' /> التواصل</h2>
          <p className={styles.paragraph} title='يمكنكم التواصل معنا عبر البريد الإلكتروني أو تيليجرام أو GitHub لأي استفسارات.' aria-label='يمكنكم التواصل معنا عبر البريد الإلكتروني أو تيليجرام أو GitHub لأي استفسارات.'>
            يمكنكم التواصل معنا عبر البريد الإلكتروني أو تيليجرام أو GitHub لأي استفسارات أو ملاحظات.
          </p>
          <p title='تواصل عبر البريد الإلكتروني [rn0x.me@gmail.com].' aria-label='تواصل عبر البريد الإلكتروني [rn0x.me@gmail.com].'>
            تواصل عبر البريد الإلكتروني: <a href="mailto:rn0x.me@gmail.com" className={styles.link} title='تواصل هنا' aria-label='تواصل هنا'>rn0x.me@gmail.com</a>
          </p>
          <p title='تواصل عبر تيليجرام [f93ii].' aria-label='تواصل عبر تيليجرام [f93ii].'>
            تواصل عبر تيليجرام: <a href="https://t.me/f93ii" target="_blank" rel="noopener noreferrer" className={styles.link} title='تواصل عبر تيليجرام' aria-label='تواصل عبر تيليجرام'>@f93ii</a>
          </p>
          <p title='تواصل عبر GitHub [rn0x].' aria-label='تواصل عبر GitHub [rn0x].'>
            تواصل عبر GitHub: <a href="https://github.com/rn0x" target="_blank" rel="noopener noreferrer" className={styles.link} title='تواصل عبر GitHub' aria-label='تواصل عبر GitHub'>@rn0x</a>
          </p>
        </section>


      </main>
    </>
  );
}