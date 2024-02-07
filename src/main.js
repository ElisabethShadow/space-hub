// Import necessary functions and components
import { createApp } from 'vue'; // Import createApp function from Vue
import App from './App.vue'; // Import the main App component
import router from './router'; // Import the Vue Router configuration

// Create a Vue 3 app instance
const app = createApp(App);

// Use the Vue Router configuration
app.use(router);

// Mount the app to the HTML element with the id "app"
app.mount('#app');
