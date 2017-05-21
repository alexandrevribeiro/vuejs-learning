
window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            title: 'Hello World!',
            changeableText: "Type something below...",
            link: 'http://www.google.com',
            repoLinkHtml: '<a href="https://github.com/alexandrevribeiro/vuejs-learning" target="blank">Repository</a>'
        },
        methods: {
            changeTitle: function(event) {
                // Vue makes all data properties available through "this"
                this.changeableText = event.target.value;
            },
            sayHello: function() {
                this.title = "Hello!";
                return this.title;
            }
        }
    });
}
