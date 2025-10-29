// Weather code to description mapping
export const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

// Weather code to icon mapping
export const weatherIcons = {
  0: "fas fa-sun",
  1: "fas fa-cloud-sun",
  2: "fas fa-cloud",
  3: "fas fa-cloud",
  45: "fas fa-smog",
  48: "fas fa-smog",
  51: "fas fa-cloud-rain",
  53: "fas fa-cloud-rain",
  55: "fas fa-cloud-rain",
  56: "fas fa-cloud-rain",
  57: "fas fa-cloud-rain",
  61: "fas fa-cloud-showers-heavy",
  63: "fas fa-cloud-showers-heavy",
  65: "fas fa-cloud-showers-heavy",
  66: "fas fa-cloud-meatball",
  67: "fas fa-cloud-meatball",
  71: "fas fa-snowflake",
  73: "fas fa-snowflake",
  75: "fas fa-snowflake",
  77: "fas fa-snowflake",
  80: "fas fa-cloud-sun-rain",
  81: "fas fa-cloud-sun-rain",
  82: "fas fa-poo-storm",
  85: "fas fa-snowflake",
  86: "fas fa-snowflake",
  95: "fas fa-bolt",
  96: "fas fa-bolt",
  99: "fas fa-bolt",
};

// Weather code to background image mapping - Using reliable static images
export const weatherBackgrounds = {
  // Clear sky - sunny day
  0: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Mainly clear - sunny with some clouds
  1: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",

  // Partly cloudy - cloudy sky
  2: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Overcast - dark clouds
  3: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Fog
  45: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  48: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Drizzle
  51: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  53: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  55: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Rain
  61: "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  63: "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  65: "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Snow
  71: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  73: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  75: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

  // Thunderstorm
  95: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};

export const getWeatherDescription = (code) => {
  return weatherCodes[code] || "Unknown";
};

export const getWeatherIcon = (code) => {
  return weatherIcons[code] || "fas fa-cloud";
};

export const getWeatherBackground = (code) => {
  // Find the closest matching weather code if exact code doesn't exist
  let bgCode = code;

  if (!weatherBackgrounds[code]) {
    // For codes not in our mapping, use a general category
    if (code >= 0 && code <= 3) {
      bgCode = 0; // Clear to overcast
    } else if (code >= 45 && code <= 48) {
      bgCode = 45; // Fog
    } else if (code >= 51 && code <= 57) {
      bgCode = 51; // Drizzle
    } else if (code >= 61 && code <= 67) {
      bgCode = 61; // Rain
    } else if (code >= 71 && code <= 77) {
      bgCode = 71; // Snow
    } else if (code >= 80 && code <= 86) {
      bgCode = 80; // Showers
    } else if (code >= 95 && code <= 99) {
      bgCode = 95; // Thunderstorm
    } else {
      bgCode = 0; // Default to clear
    }
  }

  const backgroundUrl = weatherBackgrounds[bgCode] || weatherBackgrounds[0];
  console.log(
    `Weather code ${code} mapped to background ${bgCode}: ${backgroundUrl}`
  );
  return backgroundUrl;
};
