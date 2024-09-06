import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BookCard.module.css';

const BookCard = ({ title, fileSize, format, bgColor, publicationYear, pdfLink, pdfImage }) => {

    const handleDownload = async () => {
        try {
            // طلب الملف من السيرفر
            const response = await fetch(pdfLink);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            // تحويل الاستجابة إلى Blob
            const blob = await response.blob();

            // إنشاء رابط مؤقت لتحميل الملف
            const url = URL.createObjectURL(blob);

            // إنشاء عنصر رابط وتحفيز التحميل
            const a = document.createElement('a');
            a.href = url;
            a.download = title + '.pdf'; // تحديد اسم الملف عند التحميل
            document.body.appendChild(a);
            a.click();

            // تنظيف الرابط المؤقت
            URL.revokeObjectURL(url);
            document.body.removeChild(a);

        } catch (error) {
            console.error('Download failed:', error);
            window.open(pdfLink, '_blank');
        }
    };

    return (
        <div className={styles.card}>
            {pdfImage ? <Image
                src={pdfImage}
                className={styles.image}
                alt={title}
                title={title}
                aria-label={title}
                width={400}
                height={280}
                style={{ objectFit: 'cover' }}
                priority // Use priority if the image is above the fold
            /> : null}
            <h2 className={styles.title} title={title} aria-label={title}>{title}</h2>
            <p className={styles.details} title={format} aria-label={format}>صيغة الملف: <span>{format}</span></p>
            <p className={styles.details} title={fileSize} aria-label={fileSize}>حجم الملف: <span>{fileSize}</span></p>
            <p className={styles.details} title={publicationYear} aria-label={publicationYear}>عام الطباعة: <span>{publicationYear}</span></p>
            <p className={styles.details} title={bgColor} aria-label={bgColor}>لون الخلفية: <span>{bgColor}</span></p>
            <Link href={pdfLink} target="_blank" className={styles.downloadButton} title={`تحميل ${title}`} aria-label={`تحميل ${title}`}>
                تحميل الملف
            </Link>
        </div>
    );
};

export default BookCard;