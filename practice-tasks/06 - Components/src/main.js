import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
  methods: {
    serverSelected(id) {
      this.$emit('serverSelected', id);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
