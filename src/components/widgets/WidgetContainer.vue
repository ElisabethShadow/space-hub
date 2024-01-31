<template>
  <!-- Widget Container component -->
  <div class="widget-container">
    <div class="header">
      <h1 class="title">Widget Title</h1> <!-- Add title content -->
      <p class="subtitle">Widget Subtitle</p> <!-- Add subtitle content -->
    </div>
    <!-- Add additional widget content here -->
  </div>
</template>

<script>
export default {
  name: "WidgetContainer",
  // Additional script content (props, data, methods, etc.) as needed
};
</script>

<style lang="scss">
.widget-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .header {
    width: 100%; // Ensures the header takes the full width of the container

    .title {
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .subtitle {
      text-align: left;
      font-size: 18px;
      color: #666;
    }
  }

  // Consider adding responsive styles for larger screens if necessary
  @media (min-width: 768px) {
    // Adjust flexbox layout and font sizes for larger screens
    flex-direction: row;
    align-items: center;

    .title {
      font-size: 28px; // Larger font for larger screens
    }

    .subtitle {
      font-size: 20px;
    }
  }
}
</style>

