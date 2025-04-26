import { useSelector } from 'react-redux';
import PageTitle from '../../../components/PageTitle';
const CoursesPageTitle = () => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className="flex flex-col gap-2">
      <PageTitle
        title="شروع ماجراجویی جدید"
        size={40}
        className=" no-break mt-[30px] mb-[16px] max-w-[379px] text-[40px] font-[700]"
      />
      <p className={`${darkMode ? 'text-[#fff]' : 'text-[#707070]'} mx-auto mb-[80px] max-w-[1360px] text-center text-[18px] font-[500] `}>
        یک شروع قوی برای یادگیری یک مسئله
        <br />
        جدید میتونه تو پیشرفت کمکت کنه
      </p>
    </div>
  );
};
export default CoursesPageTitle;
