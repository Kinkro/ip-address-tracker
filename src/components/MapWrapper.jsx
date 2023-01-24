import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { StyledMapWrapper } from "./styles/MapWrapper.styled";
import "leaflet/dist/leaflet.css";

const MapWrapper = ({ lat, lng }) => {
  const LiveLocation = ({ center }) => {
    const map = useMap();
    map.flyTo(center, 8);
    return null;
  };
  return (
    <StyledMapWrapper>
      <MapContainer
        center={[lat, lng]}
        zoom={11}
        style={{ width: "100vw", height: "70vh" }}
        scrollWheelZoom={false}
        // onMapLoad={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <LiveLocation center={[lat, lng]} />
      </MapContainer>
    </StyledMapWrapper>
  );
};

export default MapWrapper;
