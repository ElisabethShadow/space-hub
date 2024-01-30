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

<style>
.app-container {
  display: flex;
  min-height: 100vh; /* Ensures the container fills the viewport height */
}

.sidebar {
  width: 200px; /* Adjust width as needed */
  /* Additional sidebar styles */
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  /* Additional main content styles */
}
</style>

