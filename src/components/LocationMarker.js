import { Icon } from '@iconify/react';

const LocationMarker = ({ lat, lng, onClick, icons }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={icons} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
