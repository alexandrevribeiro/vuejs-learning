import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// import { routes } from './routes';
import { routes } from './routes-lazy-loading';

// Use the vue-router middleware
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // The "history" mode requires the server to always return the "index.html" page.
  // For more info see: https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  
  // Configures the scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;

    if (to.hash)
      return { selector: to.hash };

    return { x: 0, y: 0};
  }
});

// Configure a listener to be called before every route that's called
router.beforeEach((to, from, next) => {
  console.info(`Global router.beforeEach. URL: ${to.path}`);
  next();
  // Other possibilities:
  // next(false); // Aborts the current operation
  // next('/path'); // A path
  // next({ name: 'anything' }); // A route object
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
