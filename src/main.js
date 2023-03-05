
import { createApp } from 'vue'
import App from './App.vue'

// Import Tailwind Css
import '../index.css';

// Import Pinia and Create instance
import { createPinia } from 'pinia';
const pinia = createPinia();

// Import Router
import router from './router/index.js';

const app = createApp(App);

// Use Pinia
app.use(pinia);
// Use Router
app.use(router);

app.mount('#app');
