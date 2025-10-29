import React from "react";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherCodes";

const ForecastSection = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="forecast-section">
        <h2 className="section-title">
          <i className="fas fa-calendar-week"></i>
          7-Day Forecast
        </h2>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const daily = weatherData.daily;

  return (
    <div className="forecast-section">
      <h2 className="section-title">
        <i className="fas fa-calendar-week"></i>
        7-Day Forecast
      </h2>
      <div className="forecast-container">
        {daily.time.map((date, index) => {
          const day = new Date(date);
          const dayName = day.toLocaleDateString("en-US", { weekday: "short" });
          const monthDay = day.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          const tempMax = Math.round(daily.temperature_2m_max[index]);
          const tempMin = Math.round(daily.temperature_2m_min[index]);
          const weatherCode = daily.weather_code[index];

          return (
            <div key={index} className="forecast-day">
              <div className="forecast-date">
                <div>{dayName}</div>
                <div>{monthDay}</div>
              </div>
              <div className="forecast-icon">
                <i className={getWeatherIcon(weatherCode)}></i>
              </div>
              <div className="forecast-temps">
                <div className="forecast-high">{tempMax}°</div>
                <div className="forecast-low">{tempMin}°</div>
              </div>
              <div className="forecast-description">
                {getWeatherDescription(weatherCode)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastSection;
