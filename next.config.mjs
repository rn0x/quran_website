/** @type {import('next').NextConfig} */
const nextConfig = {
    // استخدام standalone أو export بناءً على احتياجاتك
    output: 'export', // أو 'export' إذا كنت تقوم بإنشاء موقع ثابت
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'build',
    images: {
        unoptimized: true,
    },
    poweredByHeader: false, // تعطيل X-Powered-By Header
    productionBrowserSourceMaps: false, // تعطيل Source Maps
    
    /**
     * source: الرابط القديم الذي ترغب في إعادة توجيهه.
     * destination: الرابط الجديد الذي يجب توجيه المستخدم إليه.
     * permanent: تعيينه على true يعني أن إعادة التوجيه دائمة (ستستخدم رمز الحالة 308). إذا كنت تريد أن تكون إعادة التوجيه مؤقتة، يمكنك تعيينه إلى false، وستستخدم رمز الحالة 307.
     * @returns 
     */
    async redirects() {
        return [
            {
                source: '/Quran_pdf/index.html',
                destination: '/quran-pdf',
                permanent: true, 
            }
        ];
    },
};

export default nextConfig;
