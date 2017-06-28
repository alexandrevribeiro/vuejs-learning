<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 20, duration: 1000})">Increment (async)</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 20, duration: 1000})">Decrement (async)</button>
    </div>
</template>

<script>
    // For all details about "Mutations" see the "Counter.vue" file

    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {        
        // methods: {
        //     ...mapMutations([
        //         'increment',
        //         'decrement'
        //     ])
        // }
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>