<template>
  <!-- Weather Widget component -->
  <div class="weather-widget">
    <!-- Header section displaying selected city -->
    <div class="header">
      <p class="subtitle">{{ selectedCity }}</p>
    </div>
    <!-- Weather information section -->
    <div class="weather-info">
      <!-- Display temperature -->
      <p class="temperature">{{ temperature }}°C</p>
      <!-- Display weather condition -->
      <p class="condition">{{ condition }}</p>
      <!-- Display weather icon based on condition -->
      <i :class="getIconClass(condition)" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeatherWidget",
  data() {
    return {
      selectedCity: "Berlin", // Default selected city
      temperature: null, // Holds the temperature
      condition: "", // Holds the weather condition
    };
  },
  mounted() {
    // Fetch weather data on component mount
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      const address = "Spacesquad Headquarters"; // The address for weather Ringbahnstrasse 42

      const geocodingApiKey = process.env.VUE_APP_WEATHER_GEO_API_KEY; // Google Maps Geocoding API Key
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${geocodingApiKey}`;

      try {
        // Fetch geocoding data to get latitude and longitude for the address
        const geocodingResponse = await axios.get(geocodingUrl);
        const location = geocodingResponse.data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;

        const weatherApiKey = process.env.VUE_APP_WEATHER_API_KEY;
        const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`;

        // Fetch the weather data using the obtained latitude and longitude
        const weatherResponse = await axios.get(weatherUrl);
        const weatherData = weatherResponse.data;

        this.selectedCity = address; // Updating the city
        this.temperature = weatherData.main.temp; // Updating temperature
        this.condition = weatherData.weather[0].main; // Updating condition
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    },
    getIconClass(condition) {
      const iconMapping = {
        Snow: 'wi-snow',
        Cloudy: 'wi-cloudy',
        Rain: 'wi-rain',
        Clear: 'wi-day-sunny',
        Thunderstorm: 'wi-thunderstorm',
        Sunny: 'wi-day-sunny',
        Night: 'wi-night-clear',
        Morning: 'wi-day-sunny',
      };
      return `wi ${iconMapping[condition] || 'wi-day-cloudy'}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";
@import "@/assets/icons/weather-icons/scss/sass/weather-icons";

.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  min-height: 200px;
  background: #79c8f3fa;
  border-radius: 5px;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;

  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
}

.weather-info {
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-weight: normal;

  .city {
    font-size: 24px;
    margin: 10px 0;
    color: #ffffff;
  }

  .wi {
    font-size: 48px;
    margin: 10px 0;
    color: #ffffff;
  }
}

// Example media query for larger screens
@media (min-width: 768px) {
  .weather-info {
    flex-direction: row;
    justify-content: center;
    width: 80%;
    gap: 20px;
  }
}
</style>
