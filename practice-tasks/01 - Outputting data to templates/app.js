new Vue({
    el: '#exercise',
    data: {
        name: 'Alexandre Ribeiro',
        age: 26,
        vueLogoUrl: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        getRandom: function() {
            return Math.round(Math.random()*100) + 1;
        }
    }
});