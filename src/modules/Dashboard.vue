<template>
  <div class="dashboard" id="dashboard">
<div class="header">
  <h1 class=""></h1>
</div>
<WeatherWidget />
<QuoteWidget />
<ToDoWidget />
<SpaceWidget />
<DailyRecipeWidget />
</div>
</template>


<script>
import WeatherWidget from "@/components/widgets/WeatherWidget.vue";
import QuoteWidget from "@/components/widgets/QuoteWidget.vue";
import ToDoWidget from "@/components/widgets/ToDoWidget.vue";
import SpaceWidget from "@/components/widgets/SpaceWidget.vue";
import DailyRecipeWidget from '@/components/widgets/DailyRecipeWidget';
import darkModeMixin from "@/mixins/darkModeMixin.js";

export default {
  name: "DashboardPage",
  mixins: [darkModeMixin],
  components: {
    WeatherWidget,
    QuoteWidget,
    ToDoWidget,
    SpaceWidget,
    DailyRecipeWidget,

  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; // Spacing between widgets
  padding: 20px; // Padding around the dashboard
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
