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
      currentQuote: null, // Holds the current quote
    };
  },
  methods: {
    fetchQuote() {
      // Fetch a random quote from the API
      axios
          .get("https://api.quotable.io/random")
          .then((response) => {
            this.currentQuote = response.data; // Store the fetched quote in currentQuote

          })
          .catch((error) => {
            console.error("Error fetching quote:", error); // Handle any errors
          });
    },
  },
  mounted() {
    // Fetch a quote on component mount
    this.fetchQuote();
    // Fetch a new quote every 10 minutes using setInterval
    setInterval(this.fetchQuote, 600000); // 600000 ms = 10 minutes
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";


.quote-widget {
  /* Widget container styles */
  //@include widget-container;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;


  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  blockquote {
    /* Quote styles */
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
  }

  cite {
    /* Quote author styles */
    display: block;
    margin-top: 10px;
  }
}
</style>