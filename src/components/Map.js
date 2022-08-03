import { useState } from 'react';
import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import LocationInfoBox from "./LocationInfoBox"
import { Selection } from './Selection';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setLocationInfo] = useState(null);

  const [disaster, setDisaster] = useState('wildfires');

  const [icons, setIcons] = useState(fireIcon)

  function notification(message){
    toast.success(message);
  }

  function onIcons(iconSetter, disasterSetter, notificationMessage){
    setIcons(iconSetter);
    setDisaster(disasterSetter);
    setLocationInfo(null);
    notification(notificationMessage);
  }

  const markers = eventData.map(ev => {
    if(ev.categories[0].id === disaster) {
      return <LocationMarker key={ev.id} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} icons={icons} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, link: ev.sources[0].url, date: ev.geometry[0].date})} />
    }
    return null;
  })

  const setExit = () => {
    setLocationInfo(null);
  }

  return (
    <div className="map">
      <ToastContainer />
      <GoogleMapReact
        bootstrapURLKeys={{ key:
        `${process.env.REACT_APP_API_KEY}`}}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
       {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox setExit={setExit} info={locationInfo} className="location-info"/>}
      <Selection onIcons={onIcons} />
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map;