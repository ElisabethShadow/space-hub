<template>
  <div class="dashboard" id="dashboard">
    <div class="header">
      <h1 class=""></h1>
    </div>
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from "@/components/widgets/WeatherWidget.vue";

export default {
  name: "DashboardPage",
  components: {
    WeatherWidget,
  },
};
</script>