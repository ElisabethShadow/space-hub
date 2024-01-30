<template>
  <div id="app" class="app-container">
    <Sidebar />
    <div class="main-content">
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from "@/modules/Dashboard.vue";
import Sidebar from "@/modules/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Dashboard,
    Sidebar
  }
}
</script>

<style lang="scss">
.app-container {
  display: flex;
  min-height: 100vh; /* Full viewport height */
  font-family: Avenir, Helvetica, Arial, sans-serif;
}



.sidebar {
  width: 250px; // Adjust based on your design
  // Additional sidebar styles
}

.main-content {
  flex-grow: 1;
  text-align: left; // Assuming main content is not centered
  color: #2c3e50;
  // Additional main content styles
}
</style>

