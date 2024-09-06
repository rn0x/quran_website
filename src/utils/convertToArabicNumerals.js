export default function convertToArabicNumerals(input) {
    // تحويل الإدخال إلى نص إذا كان رقمًا
    const str = input.toString();

    // خريطة لتحويل الأرقام الإنجليزية إلى العربية
    const arabicNumeralsMap = {
        '0': '٠',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩'
    };

    // استبدال كل رقم إنجليزي بالنظير العربي
    return str.replace(/[0-9]/g, (digit) => arabicNumeralsMap[digit]);
}