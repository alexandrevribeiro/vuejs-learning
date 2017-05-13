
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            secondCounter: 0
        },
        methods: {
            result: function() {
                console.log('Method.');
                return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        },
        computed: {
            computedResult: function() {
                console.log('Computed.');
                return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        }
    });
}