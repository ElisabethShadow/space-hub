<template>
  <div class="daily-recipe-widget">
    <!-- Display recipe if available -->
    <div v-if="recipe">
      <!-- Recipe Image -->
      <img :src="recipe.image" alt="Recipe Image" @click="toggleSummary" />
      <!-- Recipe Information -->
      <p><span class="recipe-text">RECIPE</span> - <span class="read-time">5min read</span></p>
      <h2 @click="toggleSummary">{{ recipe.title }}</h2>
      <!-- Display full summary when toggled, otherwise display truncated summary -->
      <p v-if="showFullSummary" v-html="cleanSummary(recipe.summary)"></p>
      <p v-else>{{ truncatedSummary }}</p>
    </div>
    <!-- Display loading message if recipe is being fetched -->
    <div v-else>
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
      recipe: null,
      showFullSummary: false,
    };
  },
  mounted() {
    // Fetch the daily recipe when the component is mounted
    this.fetchDailyRecipe();
  },
  methods: {
    async fetchDailyRecipe() {
      // API key
      const apiKey = process.env.VUE_APP_RECIPE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;
      try {
        // Send a GET request to fetch a random recipe
        const response = await axios.get(url);
        this.recipe = response.data.recipes[0];
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    },
    toggleSummary() {
      // Toggle between full and truncated summary
      this.showFullSummary = !this.showFullSummary;
    },
    cleanSummary(summary) {
      // Remove HTML tags from the summary to display clean text
      return summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
  },
  computed: {
    truncatedSummary() {
      if (!this.recipe || !this.recipe.summary) return "";
      let cleanText = this.cleanSummary(this.recipe.summary);
      // Truncate summary to a certain length and add ellipsis
      return cleanText.length > 70 ? cleanText.substr(0, 70) + '...' : cleanText;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";

.daily-recipe-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffffa1;
  border-radius: 5px;

  img {
    max-width: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
  }

  h2, p, .header .title, .header .subtitle {
    width: calc(100% - 40px);
    padding: 10px 20px;
    margin: 0;
    text-align: left;
  }

  .recipe-text {
    font-weight: bold;
    color: #46c6fa;
  }

  .read-time, .header .subtitle {
    font-weight: normal;
    color: #999;
  }

  h2 {
    font-size: 16px;
    color: #2c3e50;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }

  p, .header .title, .header .subtitle {
    font-size: 14px;
    line-height: 1.6;
    color: #535050;
    text-align: justify;
  }

  @media (max-width: 768px) {
    h2, p, .header .title, .header .subtitle {
      padding: 5px 15px;
    }
  }
}
</style>
