import { useEffect, useState } from 'react';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import MyProfileMenu from './MyProfileMenu';
import AccountInfoForm from './AccountInfoForm';
import Photos from './ImageProfile';
import Links from './Links';
import Location from './Location';
import { deprateDate } from '../../../../../utils/DateFormatter';
import { useSelector } from 'react-redux';

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
  const { userProfile } = useSelector((state) => state.userProfile);
  const fetchUserData = async () => {
    try {
      if (userProfile) {
        setInitialFormValues({
          FName: userProfile.fName || '',
          LName: userProfile.lName || '',
          UserAbout: userProfile.userAbout || '',
          NationalCode: userProfile.nationalCode || '',
          BirthDay:
            userProfile.birthDay != '0001-01-01T00:00:00'
              ? deprateDate(userProfile.birthDay)
              : '',
          gender: userProfile.gender,
          HomeAdderess: userProfile.homeAdderess || '',
          phoneNumber: userProfile.phoneNumber || '',
          email: userProfile.email || '',
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
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
