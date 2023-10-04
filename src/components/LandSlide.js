import React from 'react';
import { Icon } from '@iconify/react';
import LandSlideicon from '@iconify/icons-mdi/landslide-outline';

const LandSlide = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={LandSlideicon} className="landslide-icon" />
    </div>
  );
};

export default LandSlide;
