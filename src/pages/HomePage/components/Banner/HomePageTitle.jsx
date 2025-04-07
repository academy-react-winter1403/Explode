import PageTitle from '../../../../components/PageTitle';

const HomePageTitle = () => {
  return (
    <div className="w-[320px] text-center">
      <PageTitle
        title="آموزش مدرن پیشرفت سریع"
        size={40}
        className="mb-[25px]"
      />
      <p className="font-[500] text-[#707070]">
        آکادمی آموزش تخصصی برنامه نویسی بحر <br /> از کودک تا بزرگسال
      </p>
    </div>
  );
};
export default HomePageTitle;
