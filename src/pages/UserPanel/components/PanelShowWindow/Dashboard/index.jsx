import IconSet from '../../../../../components/shared/IconSet';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import img from '../../../../../assets/icons/Group 114.png';
import img2 from '../../../../../assets/icons/Group 113.png';
import { useEffect, useState } from 'react';
import { getUserProfileInfo } from '../../../../../core/services/UserProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import ShortData from './ShortData';
import MyCourse from '../MyCourse';
import ProgressBar from '../../../../../components/ProgressBar';
import editIcon from '../../../../../assets/icons/pencil-edit-01-stroke-rounded 2.png';
import { setPanelState } from '../../../../../redux/userPanelSlice';
import MyReserve from '../MyReserve';
import getCurrentTimeFA from '../../../../../utils/GetCurrentTimeFa';
import getCurrentPersianDate from '../../../../../utils/getCurrentPersianDate';
const Dashboard = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState([]);
  const { panelState } = useSelector((state) => state.userpanel);
  const getUserInfo = async () => {
    const res = await getUserProfileInfo();
    setUserInfo(res);
  };
  useEffect(() => {
    getUserInfo();
  }, [panelState == 'dashboard']);
  return (
    <div className="h-full">
      <div className="flex w-full p-2">
        <div className="flex w-[55%] flex-col">
          <div className="flex items-center gap-2">
            {' '}
            <UserPanelTitle title={`سلام ${userInfo.fName} ، روزت بخیر👋`} />
            <span className="Center flex text-end text-[14px] text-[#707070]">
              امیدوارم امروز روز خوبی رو داشته باشید
            </span>
          </div>
          <div className="flex flex-row gap-12">
            <ShortData
              img={img}
              title={'ساعت'}
              titleValue={getCurrentTimeFA()}
            />
            <ShortData
              img={img2}
              title={'تاریخ'}
              titleValue={getCurrentPersianDate()}
            />
          </div>
        </div>

        <div className="flex w-[39%] text-[16px] font-[500]">
          {userInfo.userAbout}
        </div>
      </div>
      <div className="flex h-[246px] flex-nowrap gap-2">
        <div className="flex h-full w-[70%]">
          <MyCourse
            shortList={true}
            shortShowTitle="دوره من"
            shortShowStateValue={'myCourse'}
          />
        </div>
        <div className="flex h-full w-[30%] max-w-[256px] flex-col gap-2 rounded-[24px] bg-[#F6F6F6] px-[16px] py-[8px]">
          <div
            onClick={() => {
              dispatch(setPanelState('myprofile'));
            }}
            className="flex cursor-pointer items-center justify-between text-[14px] font-[600]"
          >
            وضعیت اطلاعات حساب کاربری
            <IconSet firstSize={20} secondSize={20} imageAddress={editIcon} />
          </div>
          <ProgressBar
            targetPercentage={userInfo.profileCompletionPercentage}
          />
          <span className="text-[14px] font-[600] whitespace-nowrap">
            {userInfo.profileCompletionPercentage == '100'
              ? 'اطلاعات حساب کاربری شما تکمیل شده است'
              : 'اطلاعات حساب کاربری شما کامل نیست'}
          </span>
        </div>
      </div>
      <div className="flex h-full w-full px-2">
        <div className="h-[100%] w-[60%]">
          <MyReserve
            shortShow={true}
            shortShowTitle="رزرو من"
            height={372}
            shortShowStateValue={'myReserve'}
          />
        </div>
        <div className="h-[332px] w-[40%]">sss</div>
      </div>
    </div>
  );
};
export default Dashboard;
