
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World!'
        },
        methods: {
            changeTitle: function(event) {
                // Vue makes all data properties available through "this"
                this.title = event.target.value;
            }
        }
    });
}
