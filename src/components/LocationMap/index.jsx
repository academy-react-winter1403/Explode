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
const clickHandler = async (selectedPosition, initialFormValues) => {
  const position = {
    latitude: selectedPosition.lat,
    longitude: selectedPosition.lng,
  };
  const requestData = {
    ...initialFormValues,
    ...position,
  };

  const res = await editUserProfileInfo(requestData);
  console.log(res);
};
const LocationMap = ({
  initialPosition = { lat: 35.6892, lng: 51.389 },
  initialFormValues,
}) => {
  const [selectedPosition, setSelectedPosition] = useState(initialPosition);
  const [address, setAddress] = useState('در حال دریافت آدرس...');

  useEffect(() => {
    if (selectedPosition) {
      reverseGeocode(selectedPosition).then(setAddress);
    }
  }, [selectedPosition]);

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
                lat: {selectedPosition.lat.toFixed(5)}, lng:{' '}
                {selectedPosition.lng.toFixed(5)}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div>{address}</div>
      <div style={{ marginTop: '5px', fontSize: '0.9em', color: '#666' }}>
        lat: {selectedPosition.lat.toFixed(5)}, lng:{' '}
        {selectedPosition.lng.toFixed(5)}
      </div>
      <Button
        className={'mt-3 w-fit'}
        isLoading={false}
        onClick={() => clickHandler(selectedPosition, initialFormValues)}
      >
        اعمال تغییرات
      </Button>
    </>
  );
};

export default LocationMap;
