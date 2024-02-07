<template>
  <!-- Quote Widget component -->
  <div class="quote-widget" v-if="currentQuote">
    <!-- Display the quote content -->
    <blockquote>{{ currentQuote.content }}</blockquote>
    <!-- Display the quote author, if available -->
    <cite v-if="currentQuote.author">— {{ currentQuote.author }}</cite>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuoteWidget",
  data() {
    return {
      currentQuote: null,
    };
  },
  methods: {
    // Function to fetch a random quote
    fetchQuote() {
      axios
          .get("https://api.quotable.io/random")
          .then((response) => {
            this.currentQuote = response.data;
          })
          .catch((error) => {
            console.error("Error fetching quote:", error);
          });
    },
  },
  mounted() {
    // Fetch a quote when the component is mounted
    this.fetchQuote();

    // Fetch a new quote every 10 minutes (600,000 ms)
    setInterval(this.fetchQuote, 600000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.quote-widget {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(250 147 70 / 82%);
  width: fit-content;
  border-radius: 5px;
  max-width: 150%;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  blockquote {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
  }

  cite {
    display: block;
    padding: 20px;
    color: #999;
  }
}
</style>
