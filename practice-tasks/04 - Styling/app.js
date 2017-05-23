new Vue({
  el: '#exercise',
  data: {
    effectStarted: false,
    attachHighlight: false,
  },
  methods: {
    startEffect: function () {
      this.effectStarted = true;
      this.attachHighlight = true;
      
      var vm = this;
      setInterval(function () {
        vm.attachHighlight = !vm.attachHighlight;
      }, 3000);
    }
  },
  computed: {
    effectClass: function () {
      console.log('effectClass');
      if (!this.effectStarted)
        return;

      return {
        highlight: this.attachHighlight,
        shrink: !this.attachHighlight
      };
    }
  }
});
