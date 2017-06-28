<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement">Increment (async)</button>
        <button class="btn btn-primary" @click="asyncDecrement">Decrement (async)</button>
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