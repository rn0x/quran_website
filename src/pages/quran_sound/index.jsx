// pages/reciters/index.js

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SeoHead from '../../components/SeoHead';
import ScrollToTop from '../../components/ScrollToTop';
import styles from '../../styles/RecitersList.module.css';
import recitersData from '../../../public/json/quranMp3.json';

// دالة لتحويل الاسم إلى slug
const createSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/\s+/g, '-') // استبدال المسافات بـ -
        .replace(/[^\w\-]+/g, ''); // إزالة أي رموز غير أحرف أو أرقام أو شرطات
};

export default function RecitersList() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setSearchTerm(inputValue);
        }
    };

    const filteredReciters = useMemo(() => {
        return recitersData.filter((reciter) =>
            reciter.reciter.ar.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reciter.reciter.en.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <>
            <SeoHead
                title="القراء - اختر قارئاً للاستماع إلى القرآن الكريم بصوت مشاهير القراء"
                description="استمع للقرآن الكريم بصوت أفضل القراء من مختلف أنحاء العالم. اختر قارئك المفضل واستمتع بتلاوة القرآن الكريم بجودة عالية."
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/quran_sound`}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}/images/reciters-image.jpg`}
                keywords="القراء, القرآن الكريم, تلاوة القرآن, مشاهير القراء, قراء القرآن, تحميل القرآن mp3, استماع القرآن, تلاوات قرآنية"
            />

            <main className={styles.container}>
                <ScrollToTop />
                <h1 className={styles.title}>اختر قارئاً</h1>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="ابحث عن قارئ..."
                    value={searchTerm}
                    onChange={handleChange}
                    maxLength={50}
                    aria-label="البحث عن قارئ"
                />
                {filteredReciters.length > 0 ? (
                    <ul className={styles.recitersList}>
                        {filteredReciters.map((reciter) => (
                            <li
                                key={reciter.id}
                                className={styles.reciterItem}
                            >
                                <Link href={`/quran_sound/${createSlug(reciter.reciter.en)}`} className={styles.Link}>
                                    <div className={styles.reciterDetails}>
                                        <div className={styles.reciterNumber} title={reciter.id} aria-label={reciter.id}>رقم: {reciter.id}</div>
                                        <div className={styles.reciterName} title={reciter.reciter.ar} aria-label={reciter.reciter.ar}>{reciter.reciter.ar}</div>
                                        <div className={styles.reciterInfo} title={reciter.rewaya.ar} aria-label={reciter.rewaya.ar}>
                                            {reciter.rewaya.ar} - {reciter.reciter.en}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.noResults}>لا توجد نتائج للبحث عن &quot;{searchTerm}&quot;</p>
                )}
            </main>
        </>
    );
}
