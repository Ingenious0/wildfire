import { Icon } from '@iconify/react';
import Teamicon from '@iconify/icons-mdi/account-group';

const RescueTeam = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={Teamicon} className="team-icon" />
    </div>
  );
};

export default RescueTeam;
