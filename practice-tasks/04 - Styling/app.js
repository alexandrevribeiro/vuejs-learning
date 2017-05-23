new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    attachHighlight: false,
    textBoxClass: 'text-box',
    userClass: '',
    anotherInputClass: '',
    anotherClassIsVisible: false,
    myStyle: {
      borderWidth: '1px',
      borderColor: 'green',
      width: '200px'
    },
    progressBarWidth: 0,
  },
  methods: {
    startEffect: function () {

      var vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {

      this.progressBarWidth = 1;

      var vm = this;
      var intervalId = setInterval(function () {

        var currentWidth = vm.progressBarWidth + 10;
        vm.progressBarWidth = currentWidth <= 92
          ? currentWidth
          : 92;

        if (vm.progressBarWidth == 92)
          clearInterval(intervalId);

      }, 300);
    }
  },
  computed: {
    coloredTextBoxClassObj: function () {
      return {
        'orange-text-box': this.effectClasses.highlight,
        'blue-text-box': this.effectClasses.shrink
      };
    },
    anotherComputedClassObj: function () {
      return {
        orange: this.anotherInputClass == 'orange' && this.anotherClassIsVisible == 'true',
        blue: this.anotherInputClass == 'blue' && this.anotherClassIsVisible == 'true',
        black: this.anotherInputClass == 'black' && this.anotherClassIsVisible == 'true'
      };
    }
  }
});
