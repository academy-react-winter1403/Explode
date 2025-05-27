import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';
import Button from '../shared/Button';
import { editUserProfileInfo } from '../../core/services/UserProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/userProfileSlice';
import toast from 'react-hot-toast';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

// 📍 تابع تبدیل مختصات به آدرس
const reverseGeocode = async ({ lat, lng }) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
    );
    const data = await res.json();
    return data.display_name;
  } catch (error) {
    console.error('Reverse geocoding failed:', error);
    return 'آدرس یافت نشد';
  }
};

// 🎯 انتخاب موقعیت با کلیک روی نقشه
const LocationSelector = ({ setSelectedPosition }) => {
  useMapEvents({
    click(e) {
      setSelectedPosition(e.latlng);
    },
  });
  return null;
};
const clickHandler = async (
  selectedPosition,
  initialFormValues,
  dispatch,
  userProfile,
) => {
  try {
    // 1. ایجاد داده‌های موقعیت
    const position = {
      latitude: selectedPosition.lat,
      longitude: selectedPosition.lng,
    };

    // 2. ادغام داده‌ها
    const requestData = {
      ...userProfile, // تمام داده‌های پروفایل کاربر
      ...initialFormValues, // مقادیر اولیه فرم
      ...position, // موقعیت جغرافیایی
    };

    // 3. ایجاد FormData و اضافه کردن تمام فیلدها
    const formData = new FormData();
    for (const key in requestData) {
      if (requestData[key] !== null && requestData[key] !== undefined) {
        // اگر مقدار فایل است (مثل عکس پروفایل)
        if (
          requestData[key] instanceof File ||
          requestData[key] instanceof Blob
        ) {
          formData.append(key, requestData[key]);
        } else {
          // برای مقادیر معمولی
          formData.append(key, String(requestData[key]));
        }
      }
    }

    // 4. ارسال به سرور
    const res = await editUserProfileInfo(formData);

    if (res.success) {
      toast.success('اطلاعات با موفقیت ذخیره شد');
      // آپدیت state با داده‌های جدید
      dispatch(updateUserProfile(requestData));
    } else {
      toast.error('خطا در ذخیره اطلاعات');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    toast.error('خطا در ارتباط با سرور');
  }
};
const LocationMap = ({
  initialPosition = { lat: 35.6892, lng: 51.389 },
  initialFormValues,
}) => {
  const { userProfile } = useSelector((state) => state.userProfile);

  // Safely parse initial values
  const parseCoordinate = (value, fallback) => {
    const num = parseFloat(value);
    return isNaN(num) ? fallback : num;
  };

  const [selectedPosition, setSelectedPosition] = useState({
    lat: parseCoordinate(userProfile?.latitude, initialPosition.lat),
    lng: parseCoordinate(userProfile?.longitude, initialPosition.lng),
  });

  const [address, setAddress] = useState('در حال دریافت آدرس...');

  useEffect(() => {
    if (
      selectedPosition &&
      typeof selectedPosition.lat === 'number' &&
      typeof selectedPosition.lng === 'number'
    ) {
      reverseGeocode(selectedPosition).then(setAddress);
    }
  }, [selectedPosition]);

  const dispatch = useDispatch();

  // Safe coordinate display function
  const displayCoordinate = (coord) => {
    return typeof coord === 'number' ? coord.toFixed(5) : '---';
  };

  return (
    <>
      <MapContainer
        center={selectedPosition}
        zoom={15}
        style={{ height: '400px', width: '100%', borderRadius: '8px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationSelector setSelectedPosition={setSelectedPosition} />
        <Marker position={selectedPosition}>
          <Popup>
            <div>
              <div>
                <strong>آدرس:</strong>
              </div>
              <div>{address}</div>
              <div
                style={{ marginTop: '5px', fontSize: '0.9em', color: '#666' }}
              >
                lat: {displayCoordinate(selectedPosition.lat)}, lng:{' '}
                {displayCoordinate(selectedPosition.lng)}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div>{address}</div>
      <div style={{ marginTop: '5px', fontSize: '0.9em', color: '#666' }}>
        lat: {displayCoordinate(selectedPosition.lat)}, lng:{' '}
        {displayCoordinate(selectedPosition.lng)}
      </div>
      <Button
        className={'mt-3 w-fit'}
        isLoading={false}
        onClick={() =>
          clickHandler(
            selectedPosition,
            initialFormValues,
            dispatch,
            userProfile,
          )
        }
      >
        اعمال تغییرات
      </Button>
    </>
  );
};

export default LocationMap;
