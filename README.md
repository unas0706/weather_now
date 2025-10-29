# 🌦️ Interactive Weather Now

An elegant and interactive **weather application** built using **React**, **Leaflet**, and **Open-Meteo API**.
This app automatically detects the user's current location, shows live weather details, and allows clicking anywhere on the map to view weather data for that exact point — all styled using **custom CSS** designed from scratch.

---

## 🚀 Features

- 📍 **Auto-detect current location** using the browser’s Geolocation API
- 🗺️ **Interactive map** powered by Leaflet (click to get latitude & longitude)
- 🌡️ **Live temperature, wind speed, and time** from Open-Meteo API
- 💡 **Custom UI styling** built entirely with plain CSS (no frameworks)
- ⚡ **Lightweight, fast, and free** — no API key required
- 🌍 **Responsive design** across devices

---

## 🧪 Tech Stack

| Category    | Technology                 |
| ----------- | -------------------------- |
| Frontend    | React (Vite)               |
| Map Library | Leaflet + React Leaflet    |
| Weather API | Open-Meteo                 |
| Styling     | Custom CSS (no frameworks) |
| Icons       | Flaticon                   |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/unas0706/weather_now
cd weather_now
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:5173/
```

---

## 🌍 How It Works

1. On startup, the app requests **geolocation permission**.
2. Once allowed, it fetches your **latitude & longitude**.
3. The map centers on your live position and shows a marker.
4. The app uses **Open-Meteo API** to get current weather data.
5. Clicking anywhere on the map updates the weather for that location.

---

## 🧠 API Reference

**Endpoint:**

```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
```

**Sample Response:**

```json
{
  "latitude": 17.38,
  "longitude": 78.48,
  "current_weather": {
    "temperature": 27.3,
    "windspeed": 4.7,
    "time": "2025-10-29T12:00"
  }
}
```

✅ No API key or authentication required!

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project:

1. Fork this repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add new feature"`
4. Push: `git push origin feature-name`
5. Open a Pull Request

---

## 🧑‍💻 Author

**Unas Sk**
💼 MERN Stack Developer
📧 [sk.unas123@gmail.com](mailto:sk.unas123@gmail.com)
🐙 [GitHub](https://github.com/unas0706)

---
