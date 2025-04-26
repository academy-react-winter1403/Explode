import { useSelector } from 'react-redux';
import PageTitle from '../../../../components/PageTitle';

const HomePageTitle = () => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className={`w-[320px] text-center`}>
      <PageTitle
        title="آموزش مدرن پیشرفت سریع"
        size={40}
        className="mb-[25px]"
      />
      <p className={` ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} font-[500] `}>
        آکادمی آموزش تخصصی برنامه نویسی بحر <br /> از کودک تا بزرگسال
      </p>
    </div>
  );
};
export default HomePageTitle;
