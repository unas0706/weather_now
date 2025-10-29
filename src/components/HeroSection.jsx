import React, { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import TodayHighlights from "./TodayHighlights";

const HeroSection = ({ locationInfo, weatherData, onChangeLocation }) => {
  const [currentDateTime, setCurrentDateTime] = useState("Loading...");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <CurrentWeather
        locationInfo={locationInfo}
        weatherData={weatherData}
        onChangeLocation={onChangeLocation}
      />

      <TodayHighlights
        weatherData={weatherData}
        currentDateTime={currentDateTime}
      />
    </div>
  );
};

export default HeroSection;
