<template>
  <div class="bvg-widget">
    <h3>Next Departures from Tempelhof</h3>
    <ul>
      <li v-for="departure in departures" :key="departure.tripId">
        {{ departure.line.name }} to {{ departure.direction }} - {{ formatTime(departure.when) }}
      </li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      departures: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get('/api/departures/900068201'); // Use your actual backend endpoint URL and station ID
      this.departures = response.data;
    } catch (error) {
      console.error("Error fetching departures:", error);
    }
  },
};
</script>


<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";
.bvg-widget {
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffffbf;
  width: fit-content;
  border-radius: 5px;

  .bvg-widget {
    h3 {
      color: #333;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }

}
</style>
