import { useState, useEffect } from "react";
import {
  getWeatherDescription,
  getWeatherIcon,
  getWeatherBackground,
} from "../utils/weatherCodes";

export const useWeatherData = (location, onBackgroundChange) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
        );

        if (!locationResponse.ok) throw new Error("Location API failed");

        const locationData = await locationResponse.json();

        const city =
          locationData.address.city ||
          locationData.address.town ||
          locationData.address.village ||
          locationData.address.county ||
          "Unknown Location";
        const country = locationData.address.country || "Unknown Country";

        setLocationInfo({ city, country });

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,pressure_msl,wind_speed_10m,wind_direction_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );

        if (!weatherResponse.ok) throw new Error("Weather data fetch failed");

        const weatherData = await weatherResponse.json();

        const weatherCode = weatherData.current.weather_code;
        const newBackground = getWeatherBackground(weatherCode);

        console.log("Weather code:", weatherCode, "Background:", newBackground);

        if (onBackgroundChange) {
          onBackgroundChange(newBackground);
        }

        setWeatherData(weatherData);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(`Failed to fetch weather data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location, onBackgroundChange]);

  return { weatherData, locationInfo, loading, error };
};
