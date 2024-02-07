<template>
  <!-- Sidebar component -->
  <div class="sidebar">
    <!-- Sidebar content -->
    <ul class="nav-links">
      <li><a href="#dashboard" class="nav-link">Dashboard</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<!--/* Sidebar styling for layout */-->
<style scoped>
.sidebar {
  grid-row: span 2;
  background-color: white;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
</style>
