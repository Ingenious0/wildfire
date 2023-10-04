import React from 'react';
import { Icon } from '@iconify/react';
import skullScan from '@iconify/icons-mdi/skull-scan';

const Nuclear = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={skullScan} className="fire-icon" />
    </div>
  );
};

export default Nuclear;
