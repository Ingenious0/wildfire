import React from 'react';
import { Icon } from '@iconify/react';
import imageFilterHdr from '@iconify/icons-mdi/image-filter-hdr';
const Earthquake = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={imageFilterHdr} className="landslide-icon" />
    </div>
  );
};

export default Earthquake;
