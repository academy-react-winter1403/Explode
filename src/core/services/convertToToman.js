export function convertToWords(num) {
  const ones = [
    'صفر',
    'یک',
    'دو',
    'سه',
    'چهار',
    'پنج',
    'شش',
    'هفت',
    'هشت',
    'نه',
    'ده',
    'یازده',
    'دوازده',
    'سیزده',
    'چهارده',
    'پانزده',
    'شانزده',
    'هفده',
    'هجده',
    'نوزده',
  ];

  const tens = [
    '',
    '',
    'بیست',
    'سی',
    'چهل',
    'پنجاه',
    'شصت',
    'هفتاد',
    'هشتاد',
    'نود',
  ];

  const hundreds = [
    '',
    'صد',
    'دویست',
    'سیصد',
    'چهارصد',
    'پانصد',
    'ششصد',
    'هفتصد',
    'هشتصد',
    'نهصد',
  ];

  const scales = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون'];

  // تبدیل عدد به رشته و حذف ممیز اگر اعشار دارد
  const numStr = Math.floor(num).toString();

  if (parseInt(numStr) === 0) {
    return 'صفر تومان';
  }

  // تقسیم عدد به گروه‌های سه‌رقمی
  const groups = [];
  for (let i = numStr.length; i > 0; i -= 3) {
    groups.push(numStr.slice(Math.max(0, i - 3), i));
  }
  groups.reverse();

  // تبدیل هر گروه به حروف
  let result = '';
  for (let i = 0; i < groups.length; i++) {
    const group = parseInt(groups[i]);
    if (group > 0) {
      let groupWords = '';
      const h = Math.floor(group / 100);
      const t = Math.floor((group % 100) / 10);
      const o = group % 10;

      if (h > 0) {
        groupWords += hundreds[h] + ' و ';
      }

      if (t >= 2) {
        groupWords += tens[t];
        if (o > 0) {
          groupWords += ' و ' + ones[o];
        }
      } else if (group % 100 > 0) {
        groupWords += ones[group % 100];
      }

      // حذف " و " اضافی در انتها
      groupWords = groupWords.replace(/ و $/, '');

      if (i > 0) {
        groupWords += ' ' + scales[i] + ' و ';
      }

      result += groupWords;
    }
  }

  // حذف " و " اضافی در انتها
  result = result.replace(/ و $/, '');

  // اضافه کردن واحد تومان
  result += ' تومان';

  return result;
}
