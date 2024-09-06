import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SeoHead from '../components/SeoHead';
import IconAlnuzul from '../components/IconAlnuzul';
import styles from '../styles/Quran.module.css';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    let surahs = [];
    let error = null;

    try {

        const filePath = path.join(process.cwd(), 'public', 'json', 'metadata.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (data) {
            surahs = data;
        } else {
            throw new Error('Failed to fetch surahs data.');
        }
    } catch (err) {
        error = err.message;
    }

    return {
        props: {
            surahs,
            error
        }
    };
}

export default function Home({ surahs, error }) {
    if (error) {
        return (
            <main className={styles.main}>
                <div className={styles.error}>حدث خطأ: {error}</div>
            </main>
        );
    }

    return (
        <>
            <SeoHead
                title="فهرس سور القرآن الكريم: قائمة مفصلة للسور القرآنية مع تفاصيلها الكاملة"
                description="تصفح فهرس سور القرآن الكريم للحصول على معلومات شاملة حول كل سورة، بما في ذلك اسم السورة بالعربية والإنجليزية، مكان نزولها، عدد الآيات، عدد الكلمات، وعدد الحروف. هذا الفهرس يوفر لك نظرة متكاملة عن السور القرآنية."
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/quran`}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}/quran-image.jpg`}
                keywords="فهرس سور القرآن الكريم, السور القرآنية, القرآن الكريم, تفاصيل السور, عدد الآيات, عدد الكلمات, عدد الحروف, معلومات قرآنية, دراسات قرآنية, تفسير القرآن, علم القرآن"
            />

            <main className={styles.main}>
                <h1 className={styles.heading} title='فهرس سور القرآن الكريم' aria-label='فهرس سور القرآن الكريم'>فهرس سور القرآن الكريم</h1>
                <ul className={styles.surahList}>
                    {surahs.map(surah => (
                        <li key={surah.number} className={styles.surahItem}>
                            <Link href={`/quran/${surah.number}`} className={styles.link} title={surah.name.ar} aria-label={surah.name.en}>
                                <div className={styles.surahName}><strong>{surah.name.ar}</strong> - {surah.name.en}</div>
                                <div className={styles.surahDetails}>
                                    <span className={styles.revelationPlace} title={surah.revelation_place.ar} aria-label={surah.revelation_place.ar}>
                                        <IconAlnuzul Alnuzul={surah.revelation_place.en} IconColor="#4DB6AC" />
                                    </span>
                                    <span className={styles.versesCount}>{surah.verses_count} آيات</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}