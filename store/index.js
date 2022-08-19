export const state = () => ({
  weather: {
    "coord": {
      "lon": 31.2497,
      "lat": 30.0626
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 302.57,
      "feels_like": 304.58,
      "temp_min": 302.27,
      "temp_max": 302.57,
      "pressure": 1007,
      "humidity": 58
    },
    "visibility": 10000,
    "wind": {
      "speed": 6.17,
      "deg": 360
    },
    "clouds": {
      "all": 0
    },
    "dt": 1660761647,
    "sys": {
      "type": 1,
      "id": 2514,
      "country": "EG",
      "sunrise": 1660706605,
      "sunset": 1660754107
    },
    "timezone": 7200,
    "id": 360630,
    "name": "Cairo",
    "cod": 200
  }
})

export const mutations = {
  setWeather(state, weather) {
    state.weather = weather;
  }
}
