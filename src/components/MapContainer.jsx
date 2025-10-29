import React, { useEffect, useRef } from "react";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapContainer = ({ initialLocation, onLocationSelect, locationError }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const centerLat = initialLocation?.lat || 51.505;
    const centerLng = initialLocation?.lng || -0.09;

    mapInstanceRef.current = L.map(mapRef.current).setView(
      [centerLat, centerLng],
      10
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstanceRef.current);

    markerRef.current = L.marker([centerLat, centerLng])
      .addTo(mapInstanceRef.current)
      .bindPopup("Click anywhere on the map to get weather data")
      .openPopup();

    const handleMapClick = (e) => {
      const { lat, lng } = e.latlng;

      if (markerRef.current) {
        markerRef.current.setLatLng(e.latlng);
      } else {
        markerRef.current = L.marker(e.latlng).addTo(mapInstanceRef.current);
      }

      onLocationSelect({ lat, lng });
    };

    mapInstanceRef.current.on("click", handleMapClick);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.off("click", handleMapClick);
        mapInstanceRef.current.remove();
      }
    };
  }, [initialLocation, onLocationSelect]);

  return (
    <div className="map-container">
      <div className="map-instructions">
        <i className="fas fa-mouse-pointer"></i>
        <p>Click on any location to get weather information</p>
      </div>
      {locationError && (
        <div
          className="error-message"
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          {locationError}
        </div>
      )}
      <div ref={mapRef} id="map"></div>
    </div>
  );
};

export default MapContainer;
