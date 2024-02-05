<template>
  <div class="dashboard" id="dashboard">
    <div class="sidebar">
      <h1>Spacehub</h1>
      <nav>
        <ul>
          <li class="active">Home</li>

        </ul>
      </nav>
      <div class="sidebar-weather-widget">
        <WeatherWidget />
      </div>
    </div>
    <div class="content">
      <QuoteWidget />
      <ToDoWidget />

      <SpaceWidget />
      <DailyRecipeWidget />

    </div>
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
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  padding: 20px;
  min-height: 100vh;
}

.sidebar {

  background-color: rgb(255, 255, 255);
  height: 100vh;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;


  .sidebar-weather-widget {
    margin-top: 20px; /* Adjust as needed */
  }
}

.sidebar-header {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px 0;
  background-color: #123456;
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
</style>


