import LocationMap from '../../../../../components/LocationMap';
import UserPanelTitle from '../../../../../components/UserPanelTitle';

const Location = ({ initialFormValues }) => {
  return (
    <div>
      <div>
        {' '}
        <UserPanelTitle title="داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید" />
      </div>
      <LocationMap
        initialFormValues={initialFormValues}
        initialPosition={{ lat: 35.6892, lng: 51.389 }}
      />
    </div>
  );
};
export default Location;
