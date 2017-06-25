<template>
    <div>
        <input type="text" v-model="fruitFilterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import  { fruitsMixin } from './fruitsMixin';

    export default {
        mixins: [fruitsMixin]
    }
</script>

<style>

</style>
