import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { StyledMapWrapper } from "./styles/MapWrapper.styled";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../assets/icon-location.svg";

const MapWrapper = ({ lat, lng }) => {
  const LiveLocation = ({ center }) => {
    const map = useMap();
    map.flyTo(center, 8);
    return null;
  };
  const svgIcon = L.icon({
    iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = svgIcon;
  const marker = L.marker([lat, lng], { svgIcon });
  return (
    <StyledMapWrapper>
      <MapContainer
        center={[lat, lng]}
        zoom={11}
        style={{ width: "100vw", height: "70vh" }}
        scrollWheelZoom={true}
        // onMapLoad={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[lat, lng]}
          icon={svgIcon}
          className="leaflet-marker-icon"
        >
          <Popup>I am here</Popup>
        </Marker>
        <LiveLocation center={[lat, lng]} />
      </MapContainer>
    </StyledMapWrapper>
  );
};

export default MapWrapper;
