<template>
  <!-- Daily Recipe Widget component -->
  <div class="daily-recipe-widget">
    <div v-if="recipe">
      <!-- Recipe title -->
      <h2>{{ recipe.title }}</h2>
      <!-- Recipe image -->
      <img :src="recipe.image" alt="Recipe Image" />
      <!-- Recipe summary -->
      <p v-html="cleanSummary(recipe.summary)"></p>
    </div>
    <div v-else>
      <!-- Loading message -->
      Loading recipe...
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DailyRecipeWidget",
  data() {
    return {
      recipe: null, // Holds the fetched recipe
    };
  },
  mounted() {
    // Fetch the daily recipe on component mount
    this.fetchDailyRecipe();
  },
  methods: {
    async fetchDailyRecipe() {
      const apiKey = "35f38cd8b5184b9ab3c31810ad82a95b";
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;
      try {
        // Make the API request to fetch the recipe
        const response = await axios.get(url);
        this.recipe = response.data.recipes[0]; // Store the fetched recipe
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    },
    cleanSummary(summary) {
      return summary; // Clean up the recipe summary, if necessary
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/styles";

.daily-recipe-widget {
  /* Widget container styles */
  @include widget-container;
  max-width: 400px;
  margin: auto;
  text-align: center;

  img {
    /* Set the recipe image styles */
    max-width: 100%;
    height: auto;
  }

  h2 {
    /* Set the recipe title styles */
    font-size: 1.5em;
  }

  .header {
    /* Header styles */
    .title {
      text-align: left;
      font-size: 15px;
      font-weight: bold;
      color: #333333;
    }

    .subtitle {
      text-align: left;
      font-size: 14px;
      color: #666666;
    }
  }
}
</style>
