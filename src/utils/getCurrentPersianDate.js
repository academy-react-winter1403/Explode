function getCurrentPersianDate() {
  const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  // اینجا باید تاریخ میلادی را به شمسی تبدیل کنید
  // (این یک مثال ساده است، برای دقت بالا از کتابخانه استفاده کنید)
  const persianDate = {
    day: 29,
    month: 1, // اردیبهشت
    year: 1403,
  };

  return `${persianDate.day} ${persianMonths[persianDate.month - 1]} ${persianDate.year}`;
}

export default getCurrentPersianDate;
