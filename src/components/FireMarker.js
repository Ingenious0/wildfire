import { Icon } from '@iconify/react';
import fireicon from '@iconify/icons-mdi/fire';

const FireMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireicon} className="fire-icon" />
    </div>
  );
};

export default FireMarker;
