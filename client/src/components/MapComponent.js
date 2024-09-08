import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

function MapComponent({ geoData, onZipClick }) {
  const onEachZip = (zip, layer) => {
    layer.on({
      click: () => onZipClick(zip),
    });
  };

  return (
    <MapContainer center={[35.7796, -78.6382]} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {geoData && <GeoJSON data={geoData} onEachFeature={onEachZip} />}
    </MapContainer>
  );
}

export default MapComponent