<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 20, duration: 1000})">Increment (async)</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 20, duration: 1000})">Decrement (async)</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {        
        methods: {
            ...mapActions('counter', [
                // map this.asyncIncrement() to this.$store.dispatch('counter/asyncIncrement')
                'asyncIncrement',
                
                // map this.asyncDecrement() to this.$store.dispatch('counter/asyncDecrement')
                'asyncDecrement'
            ])
        }
    }
</script>