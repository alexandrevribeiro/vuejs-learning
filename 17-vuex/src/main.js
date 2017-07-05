import Vue from 'vue'
import App from './App.vue'


import { store } from './store/store';
// import { store } from './store/store_modules_auto_namespaced';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
