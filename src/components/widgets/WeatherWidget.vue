<template>
  <div class="weather-widget">
    <!-- Weather Widget component -->

    <div class="header">
      <!-- Widget title -->

      <h1 class="title">current weather</h1>
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

      <img :src="getIconUrl(condition)" alt="Weather Icon" />
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

  // Update the data properties with the fetched weather information
  const weatherResponse = await axios.get(weatherUrl);
  const weatherData = weatherResponse.data;

  this.selectedCity = address;
  this.temperature = weatherData.main.temp;
  this.condition = weatherData.weather[0].main;
} catch (error) {
  console.error("Failed to fetch weather data:", error);
}
},

  // ...

  getIconUrl: function (condition) {
  // Mapping between weather conditions and icon URLs

  const iconMapping = {
  Snow: require("@/assets/icons/snow.png"),
  Cloudy: require("@/assets/icons/cloudy.png"),
  Rain: require("@/assets/icons/rainy.png"),
  Clear: require("@/assets/icons/sunny.png"),
  Thunderstorm: require("@/assets/icons/thunderstorm.png"),
  Sunny: require("@/assets/icons/sunny.png"),
  Night: require("@/assets/icons/moon_star.png"),
  Morning: require("@/assets/icons/morning.png"),
};
  // Return the corresponding icon URL based on the weather condition

  return iconMapping[condition] || require("@/assets/icons/rainbow.png");
},
},
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";
.weather-widget {
  //@include widget-container;


  //@include widget-container;

  .weather-info {
    display: flex;

  }
}
</style>
