<template>
  <div class="dashboard" id="dashboard">
    <div class="header">
      <h1 class=""></h1>
    </div>
    <WeatherWidget />
    <QuoteWidget />



  </div>
</template>

<script>
import WeatherWidget from "@/components/widgets/WeatherWidget.vue";
import QuoteWidget from "@/components/widgets/QuoteWidget.vue";
export default {
  name: "DashboardPage",
  components: {
    WeatherWidget,
    QuoteWidget,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; // Spacing between widgets
  padding: 20px; // Padding around the dashboard
  border-radius: 20px;
  background: linear-gradient(135deg, #3f717fb0 0%, #a5c3dc24 100%);
  justify-content: center;

  .header {
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }

    .subtitle {
      font-size: 18px;
      color: #333333;
    }
  }

  // A subtle gradient background
  min-height: 100vh; // Ensure the dashboard covers the full view height

  @media (min-width: 768px) {
    .widget-container {
      flex: 0 0 calc(50% - 10px); // Widgets take up half the width on larger screens
    }
  }
}
</style>