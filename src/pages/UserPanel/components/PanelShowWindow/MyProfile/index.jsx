import { useEffect, useState } from 'react';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import MyProfileMenu from './MyProfileMenu';
import AccountInfoForm from './AccountInfoForm';
import Photos from './ImageProfile';
import Links from './Links';
import Location from './Location';
import { deprateDate } from '../../../../../utils/DateFormatter';
import { getUserProfileInfo } from '../../../../../core/services/UserProfileInfo';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('AccountInfo');
  const [initialFormValues, setInitialFormValues] = useState({
    FName: '',
    LName: '',
    UserAbout: '',
    NationalCode: '',
    BirthDay: '',
    gender: '',
    HomeAdderess: '',
    phoneNumber: '',
    email: '',
  });
  const fetchUserData = async () => {
    try {
      const res = await getUserProfileInfo();
      if (res) {
        setInitialFormValues({
          FName: res.fName || '',
          LName: res.lName || '',
          UserAbout: res.userAbout || '',
          NationalCode: res.nationalCode || '',
          BirthDay:
            res.birthDay != '0001-01-01T00:00:00'
              ? deprateDate(res.birthDay)
              : '',
          gender: res.gender,
          HomeAdderess: res.homeAdderess || '',
          phoneNumber: res.phoneNumber || '',
          email: res.email || '',
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    console.log(initialFormValues);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'AccountInfo':
        return <AccountInfoForm initialFormValues={initialFormValues} />;
      case 'Photos':
        return <Photos />;
      case 'Location':
        return <Location initialFormValues={initialFormValues} />;
      case 'Links':
        return <Links initialFormValues={initialFormValues} />;
      default:
        return <AccountInfo />;
    }
  };
  return (
    <div className="h-full">
      <UserPanelTitle title="پروفایل من" />
      <div className="flex h-[82.4%] gap-4">
        <MyProfileMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full pr-2">{renderContent()}</div>
      </div>
    </div>
  );
};
export default MyProfile;
