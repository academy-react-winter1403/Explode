import { Link } from 'react-router';
const Description = () => {
  return (
    <div className="w-[527px] max-[1170px]:mb-[20px] max-[1170px]:w-[100%] max-[1170px]:text-center">
      <h2 className="mb-[20px] text-[24px] font-[700]">
        اساتید برتر هفته آکادمی
      </h2>
      <p className="mb-[40px] text-justify text-[20px] font-[500]">
        در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
        تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف
        برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه
        با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای
        یادگیری فراهم آورده‌اند.
      </p>
      <Link
        className="bg-primary rounded-[40px] p-[8px_16px] text-[16px] font-[500]"
        to={'/'}
      >
        صفحه اساتید
      </Link>
    </div>
  );
};
export default Description;
