import Vue from 'vue'
import App from './App.vue'

// Global directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    // "delayed" modifier
    var delay = binding.modifiers['delayed']
      ? 3000
      : 0;

    setTimeout(function () {
      
      // Verifies if there's the "background" argument 
      if (binding.arg == 'background')
        el.style.backgroundColor = binding.value;
      else
        el.style.color = binding.value;

    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
