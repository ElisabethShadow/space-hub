<template>
  <div class="dashboard" id="dashboard">
    <div class="sidebar">
      <h1>Spacehub</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Weather</li>
          <li>Quotes</li>
          <li>ToDo</li>
          <li>Space</li>
          <li>Recipes</li>
        </ul>
      </nav>
      <div class="sidebar-todo-widget">
        <ToDoWidget />
      </div>
    </div>
    <div class="content">
      <WeatherWidget />
      <QuoteWidget />
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
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
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
  gap: 20px;
}
</style>


