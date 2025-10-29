import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import ForecastSection from "./ForecastSection";
import ChartContainer from "./ChartContainer";
import { useWeatherData } from "../hooks/useWeatherData";

const WeatherContainer = ({
  location,
  onChangeLocation,
  onBackgroundChange,
}) => {
  const { weatherData, locationInfo, loading, error } = useWeatherData(
    location,
    onBackgroundChange
  );
  const [lastUpdated, setLastUpdated] = useState("--");

  useEffect(() => {
    if (weatherData) {
      setLastUpdated(`Last updated: ${new Date().toLocaleTimeString()}`);
    }
  }, [weatherData]);

  if (loading) {
    return (
      <div className="container">
        <div className="weather-container visible">
          <div className="loading">
            <div className="spinner"></div>
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              Loading weather data...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="weather-container visible">
          <div className="error-message">
            <div className="error-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button
              className="change-location-btn"
              onClick={onChangeLocation}
              style={{ marginTop: "15px" }}
            >
              <i className="fas fa-map"></i>
              Try Different Location
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData || !locationInfo) {
    return (
      <div className="container">
        <div className="weather-container visible">
          <div className="error-message">
            <div className="error-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>No Weather Data</h3>
            <p>Unable to load weather information for this location.</p>
            <button
              className="change-location-btn"
              onClick={onChangeLocation}
              style={{ marginTop: "15px" }}
            >
              <i className="fas fa-map"></i>
              Choose Different Location
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="weather-container visible">
        <HeroSection
          locationInfo={locationInfo}
          weatherData={weatherData}
          onChangeLocation={onChangeLocation}
        />

        <ForecastSection weatherData={weatherData} />

        <ChartContainer weatherData={weatherData} />

        <footer>
          <div className="app-info">
            <i className="fas fa-cloud-sun-rain"></i>
            <span>Weather Now &copy; 2025 | Premium Weather Forecasting</span>
          </div>
          <div className="last-updated">{lastUpdated}</div>
        </footer>
      </div>
    </div>
  );
};

export default WeatherContainer;
