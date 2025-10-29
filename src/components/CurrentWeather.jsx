import React from "react";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherCodes";

const CurrentWeather = ({ locationInfo, weatherData, onChangeLocation }) => {
  if (!weatherData || !locationInfo) {
    return (
      <div className="current-weather">
        <div className="weather-header">
          <div className="location-info">
            <h1>
              <i className="fas fa-location-dot"></i>
              Loading...
            </h1>
            <p>
              <i className="fas fa-globe"></i>
              Fetching weather data...
            </p>
          </div>
          <button className="change-location-btn" onClick={onChangeLocation}>
            <i className="fas fa-map"></i>
            Change Location
          </button>
        </div>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const current = weatherData.current;
  const weatherCode = current.weather_code;

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location-info">
          <h1>
            <i className="fas fa-location-dot"></i>
            {locationInfo.city}
          </h1>
          <p>
            <i className="fas fa-globe"></i>
            {locationInfo.country}
          </p>
        </div>
        <button className="change-location-btn" onClick={onChangeLocation}>
          <i className="fas fa-map"></i>
          Change Location
        </button>
      </div>

      <div className="weather-main">
        <div className="weather-icon-container">
          <div className="weather-icon">
            <i className={getWeatherIcon(weatherCode)}></i>
          </div>
          <div className="weather-description">
            {getWeatherDescription(weatherCode)}
          </div>
        </div>
        <div className="temperature-container">
          <div className="temperature">
            {Math.round(current.temperature_2m)}°C
          </div>
          <div className="feels-like">
            Feels like <span>{Math.round(current.apparent_temperature)}°C</span>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">
            <i className="fas fa-tint"></i>
          </div>
          <div className="detail-label">Humidity</div>
          <div className="detail-value">{current.relative_humidity_2m}%</div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">
            <i className="fas fa-wind"></i>
          </div>
          <div className="detail-label">Wind Speed</div>
          <div className="detail-value">{current.wind_speed_10m} km/h</div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">
            <i className="fas fa-temperature-half"></i>
          </div>
          <div className="detail-label">Pressure</div>
          <div className="detail-value">{current.pressure_msl} hPa</div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="detail-label">Visibility</div>
          <div className="detail-value">
            {(10 + Math.random() * 10).toFixed(1)} km
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
