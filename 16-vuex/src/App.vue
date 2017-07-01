<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <h4>Result:</h4>
                <app-result></app-result>
                <hr>
                <h4>Another result</h4>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <h4>Using v-model for a state property</h4>
                <input type="text" v-model="value">
                <p>Value: {{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    

    export default {
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        },
        computed: {
            // The main purpose of computed properties is to get data
            // (since the idea behind it is that it depends on something else,
            // and it gets recalculated every time its dependencies change) ,
            // but RARELY you may need also to set data. For those RARE
            // cases it's possible to define both a "getter" and a "setter" for it.
            // 
            // To be able to use "v-model" with a computed property it's necessary
            // to define both "get" and "set" methods.
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        }
    }
</script>

