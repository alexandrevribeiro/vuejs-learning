import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

// Configuring the root URL globally
Vue.http.options.root = 'https://vuejs-http-ed616.firebaseio.com/';

// Intercepting Requests and Responses
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // next();

  // Intercepting also the response
  next(response => {
    console.log(response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
