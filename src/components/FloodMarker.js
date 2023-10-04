import { Icon } from '@iconify/react';
import flooadicon from '@iconify/icons-mdi/flood';

const FloodMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={flooadicon} className="flood-icon" />
    </div>
  );
};

export default FloodMarker;
