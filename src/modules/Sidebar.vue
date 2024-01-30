<template>
  <div class="sidebar">
    <!-- Loop through items and render them -->
    <div v-for="item in sidebarItems" :key="item.name" class="sidebar-item">
      <img :src="item.icon" :alt="item.name" class="icon">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sidebarItems: [
        { name: 'Weather', icon: 'path/to/weather-icon.svg' },
        { name: 'To Do', icon: 'path/to/todo-icon.svg' },
        // Add other items similarly
      ]
    };
  }
};
</script>

<style scoped lang="scss">

@import "../assets/styles/styles.scss";

</style>
