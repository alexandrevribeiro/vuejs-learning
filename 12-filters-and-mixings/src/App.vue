<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>Upper filter: "{{ text | toUppercase }}"</p>
                <p>Upper and Lower filter: "{{ text | toUppercase | to-lowercase }}"</p>
                <hr>
                <h4>Code using mixin:</h4>
                <input type="text" v-model="fruitFilterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <h4>Component using mixin:</h4>
                <app-fruits></app-fruits>
            </div>
        </div>
    </div>
</template>

<script>
    import Fruits from './Fruits.vue';
    import  { fruitsMixin } from './fruitsMixin';

    export default {
        mixins: [fruitsMixin],
        data() {
            return {
                text: 'Hello there!'
            };
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appFruits: Fruits
        }
    }
</script>

<style>

</style>
