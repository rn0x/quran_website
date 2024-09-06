// src/pages/quran_pdf/index.jsx
import React from 'react';
import SeoHead from '../../components/SeoHead'
import BookCard from '../../components/BookCard'
import styles from '../../styles/QuranPdf.module.css'

const QuranPdfPage = () => {
  const pdfs = [
    {
      id: 1,
      title: "مصحف المدينة المنورة باللون الأزرق",
      format: "PDF",
      fileSize: "160 MB",
      publicationYear: "1429 للهجرة",
      pdfLink: "https://archive.org/download/Quran-Kareem-Khawagah-The-Blue-Page-Quran/Quran-Kareem-Khawagah-The-Blue-Page-Quran.pdf",
      pdfImage: "/images/001.webp",
      bgColor:"أزرق",
    },
    {
      id: 2,
      title: "مصحف المدينة المنورة باللون الأخضر",
      format: "PDF",
      fileSize: "158 MB",
      publicationYear: "1429 للهجرة",
      pdfLink: "https://archive.org/download/EQuran00001/E-Quran-00001.pdf",
      pdfImage: "/images/002.webp",
      bgColor:"أخضر",
    },
    {
      id: 3,
      title: "مصحف المدينة المنورة الجوامعي الكبير",
      format: "PDF",
      fileSize: "93 MB",
      publicationYear: "1427 للهجرة",
      pdfLink: "hhttps://archive.org/download/arabic-568335686835685363568q3an1/arabic-quran2.pdf",
      pdfImage: "/images/003.webp",
      bgColor:"أزرق",
    },
    {
      id: 4,
      title: "مصحف التجويد الملون",
      format: "PDF",
      fileSize: "192 MB",
      publicationYear: "1420 للهجرة",
      pdfLink: "https://archive.org/download/bensaoud_gmail_20170308_0721/%D9%85%D8%B5%D8%AD%D9%81%20%D8%A7%D9%84%D8%AA%D8%AC%D9%88%D9%8A%D8%AF%20%D8%A7%D9%84%D9%85%D9%84%D9%88%D9%86.pdf",
      pdfImage: "/images/004.webp",
      bgColor:"ملونة",
    },
    {
      id: 5,
      title: "مصحف رواية ورش عن نافع",
      format: "PDF",
      fileSize: "146 MB",
      publicationYear: "1428 للهجرة",
      pdfLink: "https://archive.org/download/WARSHMADINAHE/WARSH__MADINAH.pdf",
      pdfImage: "/images/005.webp",
      bgColor:"أبيض",
    },
    {
      id: 6,
      title: "مصحف رواية قالون عن نافع",
      format: "PDF",
      fileSize: "154 MB",
      publicationYear: "1431 للهجرة",
      pdfLink: "https://archive.org/download/0471Pdf_201804/0471%20%20%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%82%D8%B1%D8%A7%20%20%D8%A7%D9%88%D9%86%D9%84%D8%A7%D9%8A%D9%86%20%20%20%20%20pdf%20%20%20%20%20%D9%85%D8%B5%D8%AD%D9%81%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D9%88%D9%8A%D8%A9%20%D8%A8%D8%B1%D9%88%D8%A7%D9%8A%D8%A9%20%D9%82%D8%A7%D9%84%D9%88%D9%86%20%D8%B9%D9%86%20%D9%86%D8%A7%D9%81%D8%B9.pdf",
      pdfImage: "/images/006.webp",
      bgColor:"أبيض",
    },
    {
      id: 7,
      title: "القرآن الكريم pdf للجوال",
      format: "PDF",
      fileSize: "4 MB",
      publicationYear: "غير معروف",
      pdfLink: "https://archive.org/download/EQuran00003/E-Quran-00003.pdf",
      pdfImage: "/images/007.webp",
      bgColor:"أبيض",
    },
    {
      id: 8,
      title: "مصحف التجويد الملون مع تفسير الجلالين",
      format: "PDF",
      fileSize: "395 MB",
      publicationYear: "1420 للهجرة",
      pdfLink: "https://archive.org/download/Quran25/Quran25.pdf",
      pdfImage: "/images/008.webp",
      bgColor:"ملونة",
    },
    {
      id: 9,
      title: "مصحف التفصيل الموضوعي ملون ومفهرس",
      format: "PDF",
      fileSize: "485 MB",
      publicationYear: "1428 للهجرة",
      pdfLink: "https://archive.org/download/Quran_Tafseel-Mawdo/Quran_Tafseel-Mawdo.pdf",
      pdfImage: "/images/009.webp",
      bgColor:"ملونة",
    },
    {
      id: 10,
      title: "المصحف الباكستاني ملون",
      format: "PDF",
      fileSize: "83 MB",
      publicationYear: "غير معروف",
      pdfLink: "https://archive.org/download/alquran16linescolourtajwidiwithcontents/Al%20Quran%20-%2016%20Lines%20Colour%20Tajwidi%20%28With%20Contents%29.pdf",
      pdfImage: "/images/010.webp",
      bgColor:"ملونة",
    },
  ]
  return (
    <>
      <SeoHead
        title="القرآن الكريم PDF - كتب القران الكريم للتحميل"
        description=""
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/quran_pdf`}
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/quran-pdf-image.jpg`}
        keywords="التقوى, إسلام, مقالات, ثقافة دينية"
      />
      <main>
        <h1 className={styles.title}>القرآن الكريم PDF <span></span></h1>
        <div className={styles.cards}>
          {pdfs.map((e, index) => {
            return (
              <div key={index} className={styles.cardsitem}>
                <BookCard
                  title={e.title}
                  format={e.format}
                  fileSize={e.fileSize}
                  publicationYear={e.publicationYear}
                  bgColor={e.bgColor}
                  pdfLink={e.pdfLink}
                  pdfImage={e.pdfImage}
                />
              </div>
            )
          })}
        </div>
      </main>
    </>
  );
};

export default QuranPdfPage;