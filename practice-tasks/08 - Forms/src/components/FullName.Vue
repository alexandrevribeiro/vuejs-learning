<template>
    <div>
        <div class="form-group">                    
            <label for="firstName">First name</label>
            <input type="text" id="firstName" class="form-control" 
                   :value="firstName" @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">                                            
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" class="form-control" 
                   :value="lastName" @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: String
        },
        data() {
            return {
                valueProxy: this.value
            };
        },
        computed: {
            firstName() {
                return this.valueProxy 
                    ? this.valueProxy.split(' ')[0]
                    : '';
            },
            lastName() {
                 return this.valueProxy 
                    ? this.valueProxy.split(' ')[1]
                    : '';
            },
        },
        methods: {
            nameChanged(isFirst, event) {
                this.valueProxy = isFirst
                    ? `${event.target.value} ${this.lastName}`
                    : `${this.firstName} ${event.target.value}`;

                this.$emit('input', this.valueProxy);
            }
        }
    }
</script>
