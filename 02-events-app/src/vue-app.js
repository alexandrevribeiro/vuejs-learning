
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            x: 0,
            y: 0,
            showInputValue: false,
            inputValue: '',
        },
        methods: {
            increase: function(step, event) {
                this.counter += step;
            },
            updateCoordinates: function(event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
            clearInput: function(event) {
                this.inputValue = '';
                this.showInputValue = false;
            }
        }
    });
}