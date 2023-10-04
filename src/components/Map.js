import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { Selection } from './Selection';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import FloodMarker from './FloodMarker';
import FireMarker from './FireMarker';
import LandSlide from './LandSlide';
import RescueTeam from './RescueTeam';
import Earthquake from './Earthquake';
import Cyclone from './Cyclone';
import Nuclear from './Nuclear';

if (typeof window !== 'undefined') {
  injectStyle();
}

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const [disaster, setDisaster] = useState('wildfires');

  const [icons, setIcons] = useState(fireIcon);

  function notification(message) {
    toast.success(message);
  }

  function onIcons(iconSetter, disasterSetter, notificationMessage) {
    setIcons(iconSetter);
    setDisaster(disasterSetter);
    setLocationInfo(null);
    notification(notificationMessage);
  }

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === disaster) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          icons={icons}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              link: ev.sources[0].url,
              date: ev.geometry[0].date,
            })
          }
        />
      );
    }
    return null;
  });

  const setExit = () => {
    setLocationInfo(null);
  };

  return (
    <div className="map">
      <ToastContainer />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAwf7zA1WkvVTLXnzKHiI4cO0Xn-WarB14' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Nuclear
          key={'nuclear blast'}
          lat={'30.287665237'}
          lng={'70.27687435'}
          icons={icons}
          onClick={() =>
            setLocationInfo({
              id: 'nuclear blast',
              title: 'nuclear blast',
              link: 'http://www.google.com/',
              date: '2023-09-30',
            })
          }
        />
        <Nuclear lat={'30.287665237'} lng={'70.27687435'} />
        <Nuclear lat={'30.287665237'} lng={'70.27687435'} />
        <Cyclone lat={'11.785734763535208'} lng={'74.62521502286147'} />
        <Cyclone lat={'19.080319729435228'} lng={'72.85040227034268'} />
        <Cyclone lat={'20.777490115676855'} lng={'87.69823830368479'} />
        <Earthquake lat={'28.168761354'} lng={'79.6846817'} />
        <Earthquake lat={'29.168761354'} lng={'80.6846817'} />
        <Earthquake lat={'28.168761354'} lng={'79.6846817'} />
        <RescueTeam lat={'32.678567856'} lng={'78.7896875678'} />
        <RescueTeam lat={'32.016255678368566'} lng={'76.03104951041075'} />
        <RescueTeam lat={'11.623781709842623'} lng={'77.97440894908182'} />
        <RescueTeam lat={'26.31538071894341'} lng={'90.62691933702536'} />
        <RescueTeam lat={'13.399812583976646'} lng={'90.8687740705068'} />
        <RescueTeam lat={' 28.153474537665545'} lng={'76.77531482734861'} />
        <RescueTeam lat={'23.616861185039852'} lng={'69.16726936531718'} />
        <RescueTeam lat={'18.764196875236454'} lng={'74.22929769607256'} />
        <RescueTeam lat={'25.614230576220496'} lng={' 85.15103843348719'} />
        <LandSlide lat={'25.452543252562'} lng={'74.87875867576'} />
        <LandSlide lat={'27.017425469119086'} lng={'93.2731960194710'} />
        <LandSlide lat={'25.452543252562'} lng={'74.87875867576'} />
        <LandSlide lat={'26.463537998464712'} lng={'93.85206904375606'} />
        <FireMarker lat={'24.43523523434'} lng={'76.4252352544254252'} />
        <FireMarker lat={'19.775928337375362'} lng={'2.56404507019859'} />
        <FireMarker lat={'24.43523523434'} lng={'76.4252352544254252'} />
        <FireMarker lat={'24.43523523434'} lng={'76.4252352544254252'} />
        <FloodMarker lat={'23.367735812958248'} lng={'77.4671724671996'} />
        <FloodMarker lat={'23.367735812958248'} lng={'77.4671724671996'} />
        <FloodMarker lat={'23.367735812958248'} lng={'77.4671724671996'} />
        <FloodMarker lat={'23.367735812958248'} lng={'77.4671724671996'} />
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          setExit={setExit}
          info={locationInfo}
          className="location-info"
        />
      )}
      <Selection onIcons={onIcons} />
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 23.367735812958248,
    lng: 77.4671724671996,
  },
  zoom: 6,
};

export default Map;
