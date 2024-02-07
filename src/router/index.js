// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DailyRecipeWidget from "@/components/widgets/DailyRecipeWidget.vue";
import WeatherWidget from "@/components/widgets/WeatherWidget.vue";
import QuoteWidget from "@/components/widgets/QuoteWidget.vue";
import ToDoWidget from "@/components/widgets/ToDoWidget.vue";
import SpaceWidget from "@/components/widgets/SpaceWidget.vue";
import Dashboard from '@/modules/Dashboard.vue';


const routes = [
    { path: '/daily-recipes', name: 'DailyRecipes', component: DailyRecipeWidget },
    { path: '/weather', name: 'Weather', component: WeatherWidget },
    { path: '/quotes', name: 'Quotes', component: QuoteWidget },
    { path: '/todo', name: 'ToDo', component: ToDoWidget },
    { path: '/space', name: 'Space', component: SpaceWidget },
    { path: '/', name: 'Home', component: Dashboard },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

