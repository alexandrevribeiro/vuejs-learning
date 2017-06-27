<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                // return this.$store.state.count * 2;
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>