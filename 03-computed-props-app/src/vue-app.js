
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            firstCounter: 0,
            secondCounter: 0,
            watchedFirstState: '',
            watchedSecondState: ''
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
        },
        watch: {
            firstCounter: function() {
                this.watchedFirstState = 'Watching "firstCounter": func called.';
                var vueInst = this;
                setTimeout(function(){
                    vueInst.watchedFirstState = 'Watching "firstCounter": after 2 seconds (setTimeout).';
                }, 2000);
            },
            secondCounter: function() {
                this.watchedSecondState = 'Watching "secondCounter": func called.';
                var vueInst = this;
                setTimeout(function(){
                    vueInst.watchedSecondState = 'Watching "secondCounter": after 2 seconds (setTimeout).';
                }, 2000);
            }
        }
    });
}