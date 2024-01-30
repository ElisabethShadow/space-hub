<template>
  <div class="sidebar">
    <!-- Navigation Links -->
    <ul class="nav-links">
      <li><a href="#dashboard" class="nav-link">Dashboard</a></li>
      <!-- Loop through additional items and render them -->
      <li v-for="item in sidebarItems" :key="item.name" class="sidebar-item" @click="item.action">
        <img :src="item.icon" :alt="item.name" class="icon">
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sidebarItems: [
        { name: 'Dashboard', icon: require('@/assets/icons/cloudy.png'), action: this.navigateToDashboard },
        { name: 'Weather', icon: require('@/assets/icons/morning.png'), action: this.navigateToWeather },
        { name: 'To Do', icon: require('@/assets/icons/snow.png'), action: this.navigateToTodo },
        // Additional items can be added here
      ]
    };
  },
  methods: {
    navigateToDashboard() {
      // Navigation logic for Dashboard
    },
    navigateToWeather() {
      // Navigation logic for Weather Widget
    },
    navigateToTodo() {
      // Navigation logic for To Do Widget
    },
    // Additional methods for other items
  }
};
</script>

<style scoped>
@import "../assets/styles/sidebar.scss";

.sidebar {
  border-radius: 20px;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  margin: 20px;

}

.nav-links {
  list-style-type: none;
  padding: 0;
}

.nav-link {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
}
</style>
