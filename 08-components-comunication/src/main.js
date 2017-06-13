import Vue from 'vue'
import App from './App.vue'

// Vue instance to centralized shared data.
// It's possible to share methods, data properties, and so on, so that
// we can centralize certain tasks and transport data across the application.
export const eventBus = new Vue({
  // data: {
  //   anyProp: 'anything'
  // },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
