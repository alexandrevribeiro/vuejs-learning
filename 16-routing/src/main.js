import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

// Use the vue-router middleware
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // The "history" mode requires the server to always return the "index.html" page.
  // For more info see: https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
