import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./MapLeaflet.css";
import teslaData from "./addresses.json";

export const MapLeaflet = () => {
  const filteredStations = teslaData.filter(
    (tesla) => tesla.address.country === "Australia"
  );
  return (
    <MapContainer
      className="map-styles"
      center={[-33.865143, 151.2099]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredStations.map((tesla) => (
        <Marker
          key={tesla.id}
          position={[tesla.gps.latitude, tesla.gps.longitude]}
        >
          <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
            <div>
              <h4>{"Name:" + tesla.name}</h4>
              <p>{"Status: " + tesla.status}</p>
              <p>{"Number of charging stations: " + tesla.stallCount}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
