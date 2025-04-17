import IconSet from '../../../../../components/shared/IconSet';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import img from '../../../../../assets/icons/Group 114.png';
import img2 from '../../../../../assets/icons/Group 113.png';
const Dashboard = () => {
  return (
    <div>
      <div className="flex w-full p-2">
        <div className="flex w-[65%] flex-col">
          <div className="flex items-center gap-2">
            {' '}
            <UserPanelTitle title="سلام پارسا ، روزت بخیر👋" />
            <span className="Center flex text-end text-[14px] text-[#707070]">
              امیدوارم امروز روز خوبی رو داشته باشید
            </span>
          </div>
          <div className="flex flex-row gap-12">
            <div className="flex flex-row flex-nowrap gap-2">
              <span className="mt-1 h-[40px] w-[40px]">
                <IconSet imageAddress={img} firstSize={40} secondSize={40} />
              </span>
              <div className="Center flex h-full w-[50%] flex-col">
                <span className="text-[14px] font-[500] text-[#707070]">
                  ساعت
                </span>
                <span className="text-[16px] font-[600]">20:20</span>
              </div>
            </div>

            <div className="flex flex-row flex-nowrap gap-2">
              <span className="Center mt-1 flex h-[40px] w-[40px]">
                <IconSet imageAddress={img2} firstSize={40} secondSize={40} />
              </span>
              <div className="Center flex h-full flex-col">
                <span className="ml-auto text-[14px] font-[500] text-[#707070]">
                  تاریخ
                </span>
                <span className="text-[16px] font-[600] whitespace-nowrap">
                  29 اردیبهشت 1403
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="Center flex w-[35%] text-[16px] font-[500]">
          سلام ، من پارسام اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون
          بیایید منو بشناسید حال ندارم بخدا خستم
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
