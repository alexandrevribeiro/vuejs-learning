<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Exercise 1 - Reversed:</h3>
                <p>{{ text | reverse }}</p>
                <p>{{ 'Another text!' | reverse | append-count }}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Exercise 1 - Texts count:</h3>
                <ul>
                    <li v-for="text in someTexts">{{ text | append-count }}</li>
                </ul>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Exercise 3 - Reversed and Texts count using "Computed":</h3>
                <h4>Reversed:</h4>
                <p>{{ reversedText }}</p>

                <h4>Texts count:</h4>
                <ul>
                    <li v-for="text in textsWithCount">{{ text }}</li>
                </ul>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 3 via a Mixin -->
                <!-- Done! -->
                <h3>Exercise 4 - Extract computed props to Mixin. ↑</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import textsWithCountMixin from './textsWithCountMixin';

    export default {
        mixins: [textsWithCountMixin],
        data() {
            return {
                text: 'Vue.js Filters and Mixins!',
                someTexts: ['Test', 'Alexandre', 'Débora', 'VueJS']
            };
        },
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        },       
        computed: {
            reversedText() {
                return this.text.split('').reverse().join('');
            }
            // Moved to mixin:
            // textsWithCount() {
            //     return this.someTexts.map(function(item) {
            //         return `${item} (${item.length})`;
            //     });
            // }
        }
    }
</script>

<style>
</style>
