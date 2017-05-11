new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Button clicked!');
            },
            updateValue: function(event) {
                this.value = event.target.value;
            }
        }
    });