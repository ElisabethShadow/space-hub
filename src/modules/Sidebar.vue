<template>
  <div class="sidebar" :class="{ 'dark-mode': darkMode }">
    <!-- Navigation Links -->
    <ul class="nav-links">
      <li><a href="#dashboard" class="nav-link">Dashboard</a></li>
      <!-- Loop through additional items and render them -->
      <li v-for="item in sidebarItems" :key="item.name" class="sidebar-item" @click="item.action">
        <img :src="item.icon" :alt="item.name" class="icon">
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <!-- Dark Mode Toggle -->
    <div class="settings-toggle">
      <h2>darkmode</h2>
      <div class="setting">
        <label class="switch" for="darkMode">
          <input type="checkbox" id="darkMode" v-model="darkMode">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sidebarItems: [
        { name: 'Dashboard', icon: require('@/assets/icons/cloudy.png'), action: this.navigateToDashboard },
        { name: 'Weather', icon: require('@/assets/icons/morning.png'), action: this.navigateToWeather },
        { name: 'To Do', icon: require('@/assets/icons/snow.png'), action: this.navigateToTodo },
        // Additional items can be added here
      ],
    };
  },
  computed: {
    darkMode: {
      get() {
        return localStorage.getItem('darkMode') === 'true';
      },
      set(value) {
        localStorage.setItem('darkMode', value.toString());
      },
    },
  },
  watch: {
    darkMode(value) {
      if (value) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
  },
  methods: {
    navigateToDashboard() {
      // Navigation logic for Dashboard
    },
    navigateToWeather() {
      // Navigation logic for Weather Widget
    },
    navigateToTodo() {
      // Navigation logic for To Do Widget
    },
    // Additional methods for other items
  },
  created() {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    }
  },
};
</script>

<style scoped>
@import "../assets/scss/sidebar.scss";

/* Existing sidebar and nav-link styles */

.settings-toggle {
  margin-top: 1rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }

  .slider.round {
    border-radius: 24px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}


</style>

