<template>
  <div id="app">
    <Dashboard />
    <Sidebar />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
