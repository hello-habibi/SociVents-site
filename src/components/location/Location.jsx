import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div style={{ color: 'red' }}>{text}</div>;

function Location() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss" }} // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={10.99835602} // latitude of your marker
          lng={77.01502627} // longitude of your marker
          text="My Marker"
        />
      </GoogleMapReact> */}
    </div>
  );
}

export default Location;
