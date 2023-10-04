import logoIcon from '@iconify/icons-mdi/broadcast';
import { Icon } from '@iconify/react';
import sourceIcon from '@iconify/icons-mdi/exit-to-app';
import exitIcon from '@iconify/icons-mdi/fullscreen-exit';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LocationInfoBox = ({ info, setExit }) => {
  const [firedays, setFiredays] = useState(null);

  useEffect(() => {
    const dateCount = () => {
      var currentTime = new Date();
      var fireTime = new Date(info.date);
      var days = 24 * 60 * 60 * 1000;
      let difference = Math.round(
        Math.abs((currentTime.getTime() - fireTime.getTime()) / days)
      );
      if (difference >= 365) {
        difference = difference - 365;
        let newDay = `1 year and ${difference} days old`;
        setFiredays(newDay);
      } else if (difference < 365) {
        if (difference > 30) {
          difference = Math.round(difference / 30);
          let newDay = `${difference} months old`;
          setFiredays(newDay);
        } else {
          let newDay = `${difference} days old`;
          setFiredays(newDay);
        }
      } else {
        setFiredays(null);
      }
    };
    dateCount();
  }, [info.title]);

  return (
    <AnimatePresence>
      <motion.div
        className="location-info"
        key={setExit}
        initial={{ y: -50, scale: 0, opacity: 1 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -50, scale: 0.5, opacity: 1 }}
      >
        <h2>
          TEAM<span className="stat">CAUTION</span>
          <Icon className="logo-icon" icon={logoIcon} />
        </h2>

        <Icon onClick={setExit} icon={exitIcon} className="exit" />
        <ul>
          <li>
            <strong>{info.title}</strong>
          </li>
          <li>{firedays}</li>
        </ul>
        <a
          href={info.link}
          target="_blank"
          rel="noreferrer"
          className="external"
        >
          <h3>Read More</h3>
          <Icon className="external-icon" icon={sourceIcon} />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default LocationInfoBox;
