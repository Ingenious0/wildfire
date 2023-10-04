import React from 'react';
import { Icon } from '@iconify/react';
import weatherHurricane from '@iconify/icons-mdi/weather-hurricane';

const Cyclone = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={weatherHurricane} className="flood-icon" />
    </div>
  );
};

export default Cyclone;
