<template>
  <!-- App component -->
  <div id="app">
    <!-- Router view for rendering different views based on routes -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App', // Name of the component

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
