
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            firstCounter: 0,
            secondCounter: 0
        },
        methods: {
            firstCounterResult: function() {
                console.log('Method called.');
                return this.firstCounter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        },
        computed: {
            secondCounterResult: function() {
                console.log('Computed prop called.');
                return this.secondCounter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        }
    });
}