import { useState } from 'react';
import styles from '../styles/SurahsList.module.css';
import quranData from '../../public/json/metadata.json';
import ScrollToTop from './ScrollToTop';

export default function SurahsList({ reciter, onPlay }) {
    const [searchTerm, setSearchTerm] = useState('');

    // التحقق من صحة البيانات
    if (!reciter || !reciter.server) {
        return <p className={styles.error} title='خطأ: بيانات القارئ غير متاحة.' aria-label='خطأ: بيانات القارئ غير متاحة.'>خطأ: بيانات القارئ غير متاحة.</p>;
    }

    // تصفية السور بناءً على مصطلح البحث
    const getFilteredSurahs = (searchTerm) => {
        if (!searchTerm) return quranData;
        return quranData.filter((surah) =>
            surah.name.ar.toLowerCase().includes(searchTerm.toLowerCase()) ||
            surah.name.en.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredSurahs = getFilteredSurahs(searchTerm);

    return (
        <div className={styles.container}>
            <ScrollToTop />
            <h1 className={styles.title} title='قائمة السور' aria-label='قائمة السور'>قائمة السور</h1>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="ابحث عن سورة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                title="ابحث عن سورة"
                aria-label="ابحث عن سورة"
            />
            {filteredSurahs.length === 0 ? (
                <p className={styles.noData}>لا توجد بيانات للسور تتطابق مع &quot;{searchTerm}&quot;</p>
            ) : (
                <ul className={styles.quranList}>
                    {filteredSurahs.map((surah, index) => (
                        <li key={surah.number} className={styles.surahItem}>
                            <h2 className={styles.surahTitle}>
                                <span className={styles.surahNumber} title={surah.number} aria-label={surah.number}>{surah.number}</span>
                                <span title={surah.name.ar} aria-label={surah.name.ar}>{surah.name.ar} - {surah.name.en}</span>
                            </h2>
                            <button
                                className={styles.playButton}
                                onClick={() => onPlay(`${reciter.server}/${surah.number.toString().padStart(3, '0')}.mp3`, index)}
                                aria-label={`تشغيل سورة ${surah.name.ar}`}
                                title={`تشغيل سورة ${surah.name.ar}`}
                            >
                                تشغيل
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}