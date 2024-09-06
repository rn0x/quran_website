import fs from 'fs';
import path from 'path';
import React from 'react';
import Link from 'next/link';
import { FaCopy, FaShareAlt } from 'react-icons/fa';
import SeoHead from '../../components/SeoHead';
import styles from '../../styles/Surah.module.css';
import convertToArabicNumerals from '../../utils/convertToArabicNumerals';

export default function SurahPage({ surah, prevSurah, nextSurah }) {
    if (!surah) {
        return (
            <main className={styles.main}>
                <div className={styles.error}>حدث خطأ: لم يتم العثور على السورة.</div>
            </main>
        );
    }

    let prefaceText = "";
    if (surah.number !== 1) {
        if (surah.number === 9) {
            prefaceText = "أعوذ بالله من الشيطان الرجيم";
        } else {
            prefaceText = "بسم الله الرحمن الرحيم";
        }
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('تم نسخ الآية!');
    };

    const shareVerse = (text) => {
        if (navigator.share) {
            navigator.share({
                title: 'مشاركة آية',
                text: text,
            }).then(() => console.log('تمت المشاركة بنجاح'))
                .catch((error) => console.log('حدث خطأ في المشاركة', error));
        } else {
            alert('ميزة المشاركة غير مدعومة على هذا المتصفح');
        }
    };

    return (
        <>
            <SeoHead
                title={`سورة ${surah.name.ar} (${surah.name.en}) - قراءة مفصلة من القرآن الكريم`}
                description={`اكتشف سورة ${surah.name.ar} من القرآن الكريم، والتي تحتوي على ${surah.verses_count} آية ونزلت في ${surah.revelation_place.ar}. تصفح تفاصيل السورة، مع إمكانية الاستماع للتلاوة وقراءة النصوص. احصل على معلومات شاملة حول السورة ومعانيها.`}
                url={`${process.env.NEXT_PUBLIC_BASE_URL}/quran/${surah.number}.html`}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}/images/surah-${surah.number}.jpg` }
                keywords={`سورة ${surah.name.ar}, سورة ${surah.name.en}, القرآن الكريم, تفاصيل السورة, عدد الآيات, مكان نزول السورة, تلاوة القرآن, قراءة القرآن الكريم, تفسير السور, معلومات قرآنية`}
            />

            <main className={styles.main}>

                <h1 className={styles.title}>سورة {surah.name.ar}</h1>

                <div className={styles.boxInfo}>
                    <p className={styles.titleInfo}>معلومات عن السورة</p>
                    <div className={styles.box_details}>
                        <p className={styles.details}>اسم السورة بالعربي: <span>{surah.name.ar}</span></p>
                        <p className={styles.details}>اسم السورة بالإنجليزي: <span>{surah.name.en}</span></p>
                        <p className={styles.details}>مكان النزول: <span>{surah.revelation_place.ar}</span></p>
                        <p className={styles.details}>عدد الآيات: <span>{surah.verses_count}</span></p>
                        <p className={styles.details}>عدد الكلمات: <span>{surah.words_count}</span></p>
                        <p className={styles.details}>عدد الحروف: <span>{surah.letters_count}</span></p>
                    </div>
                </div>

                <div className={styles.navigation}>
                    {prevSurah && (
                        <Link href={`/quran/${prevSurah.number}`} className={styles.navButton} title={`سورة ${prevSurah.name.ar}`} aria-label={`سورة ${prevSurah.name.ar}`}>
                            سورة {prevSurah.name.ar}
                        </Link>
                    )}
                    {nextSurah && (
                        <Link href={`/quran/${nextSurah.number}`} className={styles.navButton}>
                            سورة {nextSurah.name.ar}
                        </Link>
                    )}
                </div>

                <div className={styles.surahText}>
                    {prefaceText && (
                        <p className={styles.bismillah}>{prefaceText}</p>
                    )}
                    {surah.verses.map((verse, index) => {
                        const formattedText = `
"${verse.text.ar}"

🌐 ترجمة:

"${verse.text.en}"

🔖 — ${surah.name.ar}:${index + 1}`;

                        return (
                            <div key={index} className={styles.verseContainer}>
                                <div className={styles.verseBox}>
                                    <p className={styles.verseText} title={verse.text.ar} aria-label={verse.text.ar.split(" ").join("_")}>{verse.text.ar}</p>
                                    <p className={styles.verseTextEn} title={verse.text.en} aria-label={verse.text.en.split(" ").join("_")}>{verse.text.en}</p>
                                </div>
                                <span className={styles.VerseNumber} title={index + 1} aria-label={index + 1}>
                                    {convertToArabicNumerals(index + 1)}
                                </span>
                                <div className={styles.actions}>
                                    <FaCopy
                                        className={styles.icon}
                                        onClick={() => copyToClipboard(formattedText)}
                                    />
                                    <FaShareAlt
                                        className={styles.icon}
                                        onClick={() => shareVerse(formattedText)}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public', 'json', 'metadata.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const paths = data.map(surah => ({
        params: { surahId: `${surah.number}` },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const surahId = parseInt(params.surahId);

    const surahFilePath = path.join(process.cwd(), 'public', 'json', 'surah', `surah_${surahId}.json`);
    const metadataFilePath = path.join(process.cwd(), 'public', 'json', 'metadata.json');

    try {
        const surahData = JSON.parse(fs.readFileSync(surahFilePath, 'utf8'));
        const allSurahs = JSON.parse(fs.readFileSync(metadataFilePath, 'utf8'));

        const currentSurahIndex = allSurahs.findIndex(surah => surah.number === surahId);

        const prevSurah = allSurahs[currentSurahIndex - 1] || null;
        const nextSurah = allSurahs[currentSurahIndex + 1] || null;

        return {
            props: {
                surah: surahData || null,
                prevSurah,
                nextSurah,
            },
        };
    } catch (error) {
        console.error("خطأ في قراءة البيانات:", error);
        return {
            props: {
                surah: null,
                prevSurah: null,
                nextSurah: null,
            },
        };
    }
}