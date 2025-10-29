import React, { useState, useEffect } from "react";
import AppLogo from "./components/AppLogo";
import MapContainer from "./components/MapContainer";
import WeatherContainer from "./components/WeatherContainer";
import { useGeolocation } from "./hooks/useGeolocation";
import "./App.css";

const DEFAULT_BACKGROUND =
  "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

function App() {
  const [currentView, setCurrentView] = useState("logo");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(DEFAULT_BACKGROUND);
  const { location: userLocation, error: locationError } = useGeolocation();

  useEffect(() => {
    if (userLocation) {
      setSelectedLocation(userLocation);
    }
  }, [userLocation]);

  const handleStart = () => {
    setCurrentView("map");
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setCurrentView("weather");
  };

  const handleChangeLocation = () => {
    setCurrentView("map");
  };

  const updateBackground = (imageUrl) => {
    console.log("App: Setting background to:", imageUrl);
    setBackgroundImage(imageUrl);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "logo":
        return <AppLogo onStart={handleStart} />;
      case "map":
        return (
          <MapContainer
            initialLocation={selectedLocation || userLocation}
            onLocationSelect={handleLocationSelect}
            locationError={locationError}
          />
        );
      case "weather":
        return (
          selectedLocation && (
            <WeatherContainer
              location={selectedLocation}
              onChangeLocation={handleChangeLocation}
              onBackgroundChange={updateBackground}
            />
          )
        );
      default:
        return <AppLogo onStart={handleStart} />;
    }
  };

  return (
    <div className="App">
      <div
        className="background-image"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;
