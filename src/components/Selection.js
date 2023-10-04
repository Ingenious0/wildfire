import React from 'react';
import flashIcon from '@iconify/icons-mdi/flash-alert';
import volcanoIcon from '@iconify/icons-mdi/volcano';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import TeamIcon from '@iconify/icons-mdi/group';
import { Icon } from '@iconify/react';

export const Selection = ({ onIcons }) => {
  return (
    <div className="selection-box">
      <button className="icon-box">
        <Icon
          icon={fireIcon}
          onClick={() =>
            onIcons(fireIcon, 'wildfires', 'Now viewing Wildfires!')
          }
          className="set-icon"
        />
      </button>
      <button className="icon-box">
        <Icon
          icon={volcanoIcon}
          onClick={() =>
            onIcons(volcanoIcon, 'volcanoes', 'Now viewing Volcanos!')
          }
          className="set-icon"
        />
      </button>
      <button className="icon-box">
        <Icon
          icon={flashIcon}
          onClick={() =>
            onIcons(flashIcon, 'severeStorms', 'Now viewing only NDRF teams!')
          }
          className="set-icon"
        />
      </button>
      <button className="icon-box">
        <Icon
          icon={TeamIcon}
          onClick={() =>
            onIcons(
              TeamIcon,
              'severeStorms',
              'Now viewing rescue teams near me !'
            )
          }
          className="set-icon"
        />
      </button>
    </div>
  );
};
