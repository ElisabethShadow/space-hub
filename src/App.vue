<template>
  <div id="app">
    <div class="main-container">
          <Dashboard />
        </div>
  </div>
</template>

<script>
import Dashboard from "@/modules/Dashboard.vue";

export default {
  name: 'App',
  components: {
    Dashboard,

  }
}
</script>

<style>
#app {
  font-family: "IBM Plex Sans","Helvetica Neue Regular",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-container {
  display: grid;
}


</style>
