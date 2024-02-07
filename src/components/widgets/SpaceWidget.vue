<template>
  <!-- Space Widget component -->
  <div class="space-widget">
    <!-- Display space image if available -->
    <img v-if="spaceData" :src="spaceData.url" alt="Space Image" @click="toggleFullText" />
    <p><span class="nasa-text">NASA</span> <span class="read-time">- 5min read</span></p>
    <!-- Display space title when available, and allow toggling of full text -->
    <h2 v-if="spaceData" @click="toggleFullText">{{ spaceData.title }}</h2>
    <!-- Display full text if toggled, otherwise display truncated explanation -->
    <p v-if="spaceData && showFullText" v-html="spaceData.explanation"></p>
    <p v-else-if="spaceData">{{ truncatedExplanation }}</p>
  </div>
</template>

<script>
export default {
  name: "SpaceWidget",
  data() {
    return {
      showFullText: false,
      spaceData: null,
    };
  },
  mounted() {
    // Fetch space data when the component is mounted
    this.fetchSpaceData();
  },
  methods: {
    async fetchSpaceData() {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=PGWM7eu0mkpachg39Ku6WElA6wJnW9EXVKcbswCm`);
        const data = await response.json();
        this.spaceData = data;
      } catch (error) {
        console.error("Error fetching space data:", error);
      }
    },
    toggleFullText() {
      // Toggle between full text and truncated text
      this.showFullText = !this.showFullText;
    },
  },
  computed: {
    truncatedExplanation() {
      if (this.spaceData && this.spaceData.explanation) {
        return this.spaceData.explanation.substring(0, 70) + "...";
      }
      return "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";

.space-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.631372549);
  border-radius: 5px;

  img {
    max-width: 100%;
    object-fit: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  h2, p {
    width: calc(100% - 40px);
    padding: 10px 20px;
    margin: 0;
    text-align: left;
  }

  h2 {
    font-size: 16px;
    color: #2c3e50;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #535050;
    text-align: justify;
  }

  .nasa-text {
    font-weight: bold;
    color: #46c6fa;
  }

  .read-time {
    font-weight: normal;
    color: #999;
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 14px;
    color: #2c3e50;
    cursor: pointer;
    text-align: left;
    padding: 10px 20px;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2, p, button {
      padding: 5px 15px;
    }
  }
}
</style>
