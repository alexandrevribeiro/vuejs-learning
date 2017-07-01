import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

// Configuring the root URL globally
Vue.http.options.root = 'https://vuejs-http-ed616.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
