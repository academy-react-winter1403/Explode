import { useState } from 'react';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import MyProfileMenu from './MyProfileMenu';
import AccountInfoForm from './AccountInfoForm';
import Photos from './Photos';
import Links from './Links';
import Location from './Location';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('AccountInfo');
  const renderContent = () => {
    switch (activeTab) {
      case 'AccountInfo':
        return <AccountInfoForm />;
      case 'Photos':
        return <Photos />;
      case 'Location':
        return <Location />;
      case 'Links':
        return <Links />;
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
