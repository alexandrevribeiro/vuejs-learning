<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Quadruple of counter is: {{ quadrupleCounter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        // -> Option 1) Many computed props, which requires to 
        // repeat the getters instead of directly using it
        /*
        computed: {
            counter() {
                // return this.$store.state.count * 2;
                return this.$store.getters.doubleCounter;
            },
            clicks() {
                return this.$store.getters.stringCounter;
            }
        } */

        // -> Option 2) Use the "mapGetters" help function to automatically
        // map all getters to computed properties. It can be an array of
        // strings (with the getter names), or an object where you can change the name]
        /*
        computed: mapGetters({
            counter: 'doubleCounter',
            clicks: 'stringCounter'
        })
        */

        // -> Option 3) Use "mapGetters" with more computed properties, which is 
        // easily possible through EC6 Spread operators
        computed: {
            ...mapGetters({
                counter: 'doubleCounter',
                clicks: 'stringCounter'
            }),
            quadrupleCounter() {
                return this.$store.state.count * 4;
            }
        }
    }
</script>