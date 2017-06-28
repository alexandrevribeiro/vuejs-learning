<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        // Option 1) Create one method for each mutation, calling the "commit".
        /*
        methods: {
            increment() {
                // this.$store.state.count++;
                this.$store.commit('increment');
            },
            decrement() {
                // this.$store.state.count--;
                this.$store.commit('decrement');
            }
        }
        */

        // Option 2)  Use the "mapMutations" help function to automatically
        // map all mutations to methods. It can be an array of
        // strings (with the getter names), or an object where you can change the name].
        // Optionally we can use EC6 Spread operators to allow creating more methods
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>