
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Type something below...'
        },
        methods: {
            changeTitle: function(event) {
                // Vue makes all data properties available through "this"
                this.title = event.target.value;
            },
            sayHello: function() {
                return 'Hello!'
            }
        }
    });
}
