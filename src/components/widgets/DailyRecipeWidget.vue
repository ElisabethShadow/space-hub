<template>
  <div class="daily-recipe-widget">
    <div v-if="recipe">
      <img :src="recipe.image" alt="Recipe Image" @click="toggleSummary" />
      <h2 @click="toggleSummary">{{ recipe.title }}</h2>
      <p v-if="showFullSummary" v-html="cleanSummary(recipe.summary)"></p>
      <p v-else>{{ truncatedSummary }}</p>
    </div>
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
    this.fetchDailyRecipe();
  },
  methods: {
    async fetchDailyRecipe() {
      const apiKey = "35f38cd8b5184b9ab3c31810ad82a95b";
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;
      try {
        const response = await axios.get(url);
        this.recipe = response.data.recipes[0];
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    },
    toggleSummary() {
      this.showFullSummary = !this.showFullSummary;
    },
    cleanSummary(summary) {
      return summary.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
    }
  },
  computed: {
    truncatedSummary() {
      if (!this.recipe || !this.recipe.summary) return "";
      let cleanText = this.cleanSummary(this.recipe.summary);
      return cleanText.length > 70 ? cleanText.substr(0, 70) + '...' : cleanText;
    },
  },
};
</script>



<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";


.daily-recipe-widget {
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }

  h2 {
    font-size: 16px;
    cursor: pointer;
  }

  p {
    padding: 20px;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    text-align: justify;
  }
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
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      margin-top: 10px;
      text-align: justify;
      padding: 20px;
    }
  }
</style>
