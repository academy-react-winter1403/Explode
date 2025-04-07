import HomePageTitle from '../../HomePage/components/banner/HomePageTitle';
import PageTitle from '../../../components/PageTitle';
const CoursesPageTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <PageTitle
        title="شروع ماجراجویی جدید"
        size={40}
        className="text-thirdly no-break mt-[30px] mb-[16px] max-w-[379px] text-[40px] font-[700]"
      />
      <p className="mx-auto mb-[80px] max-w-[1360px] text-center text-[18px] font-[500] text-[#707070]">
        یک شروع قوی برای یادگیری یک مسئله
        <br />
        جدید میتونه تو پیشرفت کمکت کنه
      </p>
    </div>
  );
};
export default CoursesPageTitle;
