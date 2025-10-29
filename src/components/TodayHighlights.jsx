import React from "react";

const TodayHighlights = ({ weatherData, currentDateTime }) => {
  if (!weatherData) {
    return (
      <div className="today-highlights">
        <div className="highlights-header">
          <h2>
            <i className="fas fa-star"></i> Today's Highlights
          </h2>
          <div className="time-date">
            <i className="far fa-clock"></i>
            <span>{currentDateTime}</span>
          </div>
        </div>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const current = weatherData.current;

  return (
    <div className="today-highlights">
      <div className="highlights-header">
        <h2>
          <i className="fas fa-star"></i> Today's Highlights
        </h2>
        <div className="time-date">
          <i className="far fa-clock"></i>
          <span>{currentDateTime}</span>
        </div>
      </div>
      <div className="highlight-cards">
        <div className="highlight-card">
          <div className="highlight-icon">
            <i className="fas fa-sun"></i>
          </div>
          <div className="highlight-value">
            {Math.floor(Math.random() * 11)}
          </div>
          <div className="highlight-label">UV Index</div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">
            <i className="fas fa-cloud-rain"></i>
          </div>
          <div className="highlight-value">
            {Math.floor(Math.random() * 100)}%
          </div>
          <div className="highlight-label">Precipitation</div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">
            <i className="fas fa-wind"></i>
          </div>
          <div className="highlight-value">{current.wind_direction_10m}°</div>
          <div className="highlight-label">Wind Direction</div>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">
            <i className="fas fa-temperature-high"></i>
          </div>
          <div className="highlight-value">
            {Math.round(
              current.temperature_2m - (100 - current.relative_humidity_2m) / 5
            )}
            °C
          </div>
          <div className="highlight-label">Dew Point</div>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
