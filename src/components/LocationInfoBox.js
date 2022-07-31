import logoIcon from '@iconify/icons-mdi/broadcast';
import { Icon } from '@iconify/react';
import sourceIcon from '@iconify/icons-mdi/exit-to-app';

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
        <h2>Nat<span className="stat">Stat</span><Icon className="logo-icon" icon={logoIcon} /></h2>
        <ul>
            <li><strong>{info.title}</strong></li>
            <li>{info.link}</li>
        </ul>
        <div className='external'>
            <h3>Read More</h3>
            <Icon className="external-icon" icon={sourceIcon} />
        </div>
    </div>
  );
}

export default LocationInfoBox;
