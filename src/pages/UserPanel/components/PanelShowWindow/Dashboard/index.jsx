import IconSet from '../../../../../components/shared/IconSet';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import img from '../../../../../assets/icons/Group 114.png';
import img2 from '../../../../../assets/icons/Group 113.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShortData from './ShortData';
import MyCourse from '../MyCourse';
import ProgressBar from '../../../../../components/ProgressBar';
import editIcon from '../../../../../assets/icons/pencil-edit-01-stroke-rounded 2.png';
import { setPanelState } from '../../../../../redux/userPanelSlice';
import MyReserve from '../MyReserve';
import getCurrentTimeFA from '../../../../../utils/GetCurrentTimeFa';
import getCurrentPersianDate from '../../../../../utils/getCurrentPersianDate';
import clsx from 'clsx';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState([]);
  const { panelState } = useSelector((state) => state.userpanel);
  const { darkMode } = useSelector((state) => state.darkMode);
  const { userProfile } = useSelector((state) => state.userProfile);
  const getUserInfo = async () => {
    setUserInfo(userProfile);
  };

  useEffect(() => {
    getUserInfo();
  }, [panelState == 'dashboard']);

  return (
    <div className="flex h-full flex-col gap-4 px-2">
      {/* بالا سمت چپ */}
      <div className="flex w-full pt-2">
        <div className="flex w-[55%] flex-col gap-3">
          <div className="flex items-center gap-2">
            <UserPanelTitle title={`سلام ${userInfo.fName} ، روزت بخیر👋`} />
            <span
              className={clsx('text-end text-[14px]', {
                'text-[#707070]': !darkMode,
                'text-gray-600': darkMode,
              })}
            >
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

        <div
          className={clsx(
            'flex w-[39%] items-start justify-start rounded-xl px-4 py-2 text-[16px] font-[500]',
            {
              'text-[#2F2F2F]': !darkMode,
              'text-gray-600': darkMode,
            },
          )}
        >
          {userInfo.userAbout}
        </div>
      </div>

      {/* دوره من + نوار پیشرفت */}
      <div className="flex h-[246px] flex-nowrap">
        <div className="flex h-full w-[70%]">
          <MyCourse
            shortList={true}
            shortShowTitle="دوره من"
            shortShowStateValue={'myCourse'}
          />
        </div>

        <div
          className={clsx(
            'flex h-full w-[30%] max-w-[256px] flex-col gap-2 rounded-[24px] px-[16px] py-[16px]',
            {
              'bg-[#F6F6F6]': !darkMode,
              'bg-[#2a2a2a]': darkMode,
            },
          )}
        >
          <div
            onClick={() => {
              dispatch(setPanelState('myprofile'));
            }}
            className={clsx(
              'flex cursor-pointer items-center justify-between text-[14px] font-[600]',
              {
                'text-[#2F2F2F]': !darkMode,
                'text-gray-200': darkMode,
              },
            )}
          >
            وضعیت اطلاعات حساب کاربری
            <IconSet
              firstSize={20}
              secondSize={20}
              imageAddress={editIcon}
              className={clsx({
                'brightness-50 contrast-150 filter': !darkMode,
                'brightness-100 invert filter': darkMode,
              })}
            />
          </div>

          <ProgressBar
            targetPercentage={userInfo.profileCompletionPercentage}
          />

          <span
            className={clsx(
              'text-center text-[14px] font-[600] whitespace-nowrap',
              {
                'text-[#2F2F2F]': !darkMode,
                'text-gray-200': darkMode,
              },
            )}
          >
            {userInfo.profileCompletionPercentage == '100'
              ? 'اطلاعات حساب کاربری شما تکمیل شده است'
              : 'اطلاعات حساب کاربری شما کامل نیست'}
          </span>
        </div>
      </div>

      {/* رزرو من */}
      <div className="mt-2 flex h-full w-full">
        <div className="h-[100%] w-[60%]">
          <MyReserve
            shortShow={true}
            shortShowTitle="رزرو من"
            height={372}
            shortShowStateValue={'myReserve'}
          />
        </div>
        <div className="h-[332px] w-[40%]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
