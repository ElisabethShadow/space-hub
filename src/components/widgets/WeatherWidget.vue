<template>
  <div class="weather-widget">
    <!-- Weather Widget component -->

    <div class="header">
      <!-- Widget title -->

      <!-- Widget subtitle -->

      <p class="subtitle">{{ selectedCity }}</p>
    </div>
    <!-- Weather information section -->

    <div class="weather-info">
      <!-- Temperature display -->

      <p class="temperature">{{ temperature }}°C</p>
      <!-- Condition display -->

      <p class="condition">{{ condition }}</p>
      <!-- Weather icon -->
      <!-- Using <i> tag for Weather Icon -->
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

      const geocodingApiKey = "AIzaSyCfiiwcTnZK9qWuf2ZCg3Yj0tAyOEo0h4M"; // Google Maps Geocoding API Key
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${geocodingApiKey}`;

      try {
        // Fetch geocoding data to get latitude and longitude for the address
        const geocodingResponse = await axios.get(geocodingUrl);
        const location = geocodingResponse.data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;

        const weatherApiKey = "bb4f620b0426d10e9201273f87e3b7f2";
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
  max-width: 500px;
  min-height: 200px;
  background: #fff;
  border-radius: 5px;


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
    color: #999;

    .city {
      font-size: 24px;
      margin: 10px 0;
      color: #46c6fa;
    }

    .wi {
      font-size: 48px;
      margin: 10px 0;
      color: #46c6fa;
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
