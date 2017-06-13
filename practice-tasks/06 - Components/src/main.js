import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showServerDetails(server) {
      this.$emit('showServerDetails', server);
    },
    serverWasChanged(server) {
      this.$emit('serverWasChanged', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
