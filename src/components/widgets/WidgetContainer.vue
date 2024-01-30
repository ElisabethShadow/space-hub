<template>
  <!-- Widget Container component -->
  <div class="widget-container"></div>
  <div class="header">
    <h1 class=""></h1>
    <p class="subtitle"></p>
  </div>
</template>

<script>
export default {
  name: "WidgetContainer",
};
</script>

<style lang="scss">
.widget-container {
  /* Widget container styles */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .header {
    /* Header styles */
    .title {
      /* Title styles */
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }

    .subtitle {
      /* Subtitle styles */
      text-align: left;
      font-size: 18px;
      color: #666666;
    }
  }
}
</style>
