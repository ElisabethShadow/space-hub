<template>
  <!-- Main welcome heading -->
  <h1>Welcome to Space Hub</h1>

  <!-- Dashboard layout -->
  <div class="dashboard">

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar title -->
      <h2 class="sidebar-title"></h2>
      <nav>
        <!-- Navigation links -->
        <ul class="nav-links">
          <!-- Active link for the Dashboard page -->
          <li class="sidebar-link active">
            <router-link to="/">Home</router-link>
          </li>
          <!-- Links to Scroll to Widget pages -->
          <li class="sidebar-link">
            <a href="#" @click="scrollToWidget('toDoWidget')">Tasks</a></li>

          <li class="sidebar-link">
            <a href="#" @click="scrollToWidget('spaceWidget')">Space</a></li>

          <li class="sidebar-link">
            <a href="#" @click="scrollToWidget('weatherWidget')">Weather</a></li>

          <li class="sidebar-link">
            <a href="#" @click="scrollToWidget('quoteWidget')">Quote</a></li>

          <li class="sidebar-link">
          <a href="#" @click="scrollToWidget('dailyRecipeWidget')">Recipe</a></li>
        </ul>
      </nav>
      <!-- Quick statistics -->
      <div class="quick-stats">
        <h3>Quick Stats</h3>
        <p><strong>Posts:</strong> 120</p>
        <p><strong>Followers:</strong> 350</p>
        <p><strong>Following:</strong> 190</p>
      </div>
      <!-- SpaceSquad Icon -->
      <img src="/icons/ssq-logo.svg" alt="SpaceSquad Icon" class="sidebar-icon">
    </div>

    <!-- Content section containing widgets -->
    <div class="content">
      <!-- Quote Widget -->
      <QuoteWidget class="widget quote-widget" ref="quoteWidget" />
      <!-- To-Do Widget -->
      <ToDoWidget class="widget to-do-widget" ref="toDoWidget" />
      <!-- Weather Widget -->
      <WeatherWidget class="widget weather-widget" ref="weatherWidget" />
      <!-- Daily Recipe Widget -->
      <DailyRecipeWidget class="widget daily-recipe-widget" ref="dailyRecipeWidget" />
      <!-- Space Widget -->
      <SpaceWidget class="widget space-widget" ref="spaceWidget"/>

    </div>
  </div>
</template>

<script>
import WeatherWidget from "@/components/widgets/WeatherWidget.vue";
import QuoteWidget from "@/components/widgets/QuoteWidget.vue";
import ToDoWidget from "@/components/widgets/ToDoWidget.vue";
import SpaceWidget from "@/components/widgets/SpaceWidget.vue";
import DailyRecipeWidget from '@/components/widgets/DailyRecipeWidget.vue';

export default {
  name: "DashboardPage",

  components: {
    WeatherWidget,
    QuoteWidget,
    ToDoWidget,
    SpaceWidget,
    DailyRecipeWidget,
  },

  methods: {
    scrollToWidget(refName) {
      this.$nextTick(() => {
        const component = this.$refs[refName];
        if (component) {
          const element = component.$el || component;
          if (element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.error('The referenced element does not exist or is not a DOM element');
          }
        }
      });
    },
  },
};
</script>


<style lang="scss" scoped>
/* Dashboard styling for layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
  height: 100vh;
  margin: 20px;

  /* Main heading style */
  h1 {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 30px;
  }

  /* Sidebar styling */
  .sidebar {
    background-color: #ffffffd4;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: inherit;
    grid-row: 1 / 3;


    /* Quick stats styling */
    .quick-stats {
      text-align: center;
      color: #333;
      font-size: 15px;
      padding-top: 100px;
    }

    /* Sidebar title styling */
    .sidebar-title {
      color: #333;
      margin-bottom: 16px;
    }

    /* Navigation links styling */
    .nav-links {
      list-style-type: none;
      padding: 0;
      font-size: 18px;
      margin: 20px;

      /* Sidebar link styling */
      .sidebar-link {
        margin: 10px 0;

        /* Sidebar link anchor styling */
        a {
          color: #333;;
          text-decoration: none;

          /* Hover effect for links */
          &:hover {
            text-decoration: underline;
          }
        }

        /* Styling for the active link */
        &.active {
          font-weight: bold;
        }
      }
    }

    /* Sidebar icon styling */
    .sidebar-icon {
      display: block;
      margin: 110px auto;
      width: 80px;
    }
  }

  /* Content section styling */
  .content {
    display: grid;
    grid-template-columns: repeat(2, 4fr);
    grid-auto-rows: minmax(200px, auto);
    gap: 30px;
    grid-template-rows: auto 1fr;

    .quote-widget {
      /* Ensure the quote widget is the first item in the content area */
    }

    /* Weather widget styling */
    .weather-widget {
      grid-column: span 1;
    }

    /* Quote widget styling */
    .quote-widget {
      grid-column: span 1;
      grid-row: span 1;
    }

    /* Daily Recipe widget styling */
    .daily-recipe-widget {
      grid-column: span 1;
      grid-row: span 1;
    }

    /* To-Do widget styling */
    .to-do-widget {
      grid-column: span 1;
    }

    /* Space widget styling */
    .space-widget {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  @media (max-width: 768px) {
    /* Responsive design for smaller screens */
    grid-template-columns: 1fr;

    /* Margin for Daily Recipe widget on smaller screens */
    .daily-recipe-widget {
      margin-bottom: 20px;
    }

    /* Responsive sidebar layout */
    .sidebar {
      order: -1;
      grid-column: 1 / -1;
      padding: 0 15px;
      height: fit-content;
      width: calc(100% - 20px);
      box-sizing: border-box;

      /* Hide sidebar icon and quick stats */
      .sidebar-icon {
        display: none;
      }
      .quick-stats {
        display: none;
      }

      /* Flex layout for navigation links */
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      /* Styling for navigation links */
      .nav-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        font-size: 9px;
      }
    }

    /* Adjust content layout for smaller screens */
    .content {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 15px;
    }

    /* Widget layout for smaller screens */
    .widget {
      grid-column: span 2;
    }
  }

  @media (max-width: 430px) {
    /* Further responsive design for very small screens */
    .content {
      grid-template-columns: 2fr;
    }

    /* Widget layout for very small screens */
    .widget {
      grid-column: span 2;
    }
  }
}
</style>
