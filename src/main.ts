import './assets/main.css';

import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';

import { VueQueryPlugin } from 'vue-query';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(VueQueryPlugin);

app.mount('#app');
