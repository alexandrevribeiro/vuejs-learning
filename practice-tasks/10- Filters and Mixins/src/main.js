import Vue from 'vue'
import App from './App.vue'

import globalFilters from './globalFilters';

// Registers global filters
globalFilters();

new Vue({
  el: '#app',
  render: h => h(App)
})
