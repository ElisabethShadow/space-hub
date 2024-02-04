<template>
  <div class="space-widget">
    <img v-if="spaceData" :src="spaceData.url" alt="Space Image" @click="toggleFullText" />
    <h2 v-if="spaceData" @click="toggleFullText">{{ spaceData.title }}</h2>
    <p v-if="spaceData && showFullText" v-html="spaceData.explanation"></p>
    <p v-else-if="spaceData">{{ truncatedExplanation }}</p>
  </div>
</template>

<script>
export default {
  name: "SpaceWidget",
  data() {
    return {
      showFullText: false, // Flag to indicate whether to show full text or not
      spaceData: null, // Holds the fetched space data
    };
  },
  mounted() {
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
  background-color: #fff;

  img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    width: 100%;

    &:hover {
      opacity: 0.9;
    }
  }

  h2 {
    font-size: 16px;
    color: #2c3e50;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    margin-top: 10px;
    text-align: justify;
    padding: 20px;
  }

  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 14px;
    color: #2c3e50;
    cursor: pointer;
    text-align: left;
    margin-top: 10px;

    &:hover {
      color: #255f6f;
    }
  }

  @media (max-width: 768px) {
    .space-widget img, .space-widget h3 {
      cursor: pointer;
    }
  }
}

</style>
