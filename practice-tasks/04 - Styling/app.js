new Vue({
  el: '#exercise',
  data: {
    effectStarted: false,
    attachHighlight: false,
    textBoxClass: 'text-box',
    inputClass: '',
    anotherInputClass: '',
    attachAnotherClass: false,
    borderColor: 'green',
    borderWidth: 1,
    width: 200,
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
      if (!this.effectStarted)
        return;

      return {
        highlight: this.attachHighlight,
        shrink: !this.attachHighlight
      };
    },
    coloredTextBoxClassObj: function() {
      if (!this.effectStarted)
        return;

      return {
        'orange-text-box': this.attachHighlight,
        'blue-text-box': !this.attachHighlight
      };
    },
    anotherComputedClassObj: function() {
      return {
        orange: this.anotherInputClass == 'orange' && this.attachAnotherClass == 'true',
        blue: this.anotherInputClass == 'blue' && this.attachAnotherClass == 'true',
        black: this.anotherInputClass == 'black' && this.attachAnotherClass == 'true'
      };
    },
    stylesObj: function() {
      return {
        'border-width': this.borderWidth + 'px',
        'border-color': this.borderColor,
        'width': this.width + 'px'
      };
    }
  }
});
