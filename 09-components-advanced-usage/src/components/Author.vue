<template>
    <div>
        <h3>The Author</h3>
        <button @click="counter++">Increase: </button> <span>{{ counter }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            };
        },
        activated() {
            console.log('Author component activated!');
        },
        deactivated() {
            console.log('Author component deactivated!');
        }
    }
</script>

