import LocationMap from '../../../../../components/LocationMap';
import UserPanelTitle from '../../../../../components/UserPanelTitle';

const Location = () => {
  return (
    <div>
      <div>
        {' '}
        <UserPanelTitle title="داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید" />
      </div>
      <LocationMap initialPosition={{ lat: 35.6892, lng: 51.389 }} />
    </div>
  );
};
export default Location;
