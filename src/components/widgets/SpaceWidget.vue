<template>
  <!-- Space Widget component -->
  <div class="space-widget">
    <!-- Display the title if spaceData is available -->
    <h3 v-if="spaceData">{{ spaceData.title }}</h3>
    <!-- Display the space image if spaceData is available -->
    <img v-if="spaceData" :src="spaceData.url" alt="Space Image" />

    <!-- Button to toggle full text visibility -->
    <button @click="showFullText = !showFullText">Read More</button>
    <!-- Display the explanation if spaceData and showFullText are truthy -->
    <p v-if="spaceData && showFullText">{{ spaceData.explanation }}</p>
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
    // Fetch space data on component mount
    this.fetchSpaceData();
  },
  methods: {
    async fetchSpaceData() {
      try {
        // Fetch space data from the NASA API
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=PGWM7eu0mkpachg39Ku6WElA6wJnW9EXVKcbswCm`,
        );
        const data = await response.json();
        this.spaceData = data; // Store the fetched space data
      } catch (error) {
        console.error("Error fetching space data:", error);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/styles";

.space-widget {
  /* Widget container styles */
  @include widget-container;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    /* Space image styles */
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
      opacity: 0.9;
    }
  }

  h3 {
    /* Space title styles */
    font-size: 18px;
    color: #2c3e50;
    margin-bottom: 15px;
  }

  p {
    /* Space explanation styles */
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    margin-top: 10px;
    text-align: justify;
  }

  button {
    /* Read More button styles */
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
}
</style>
