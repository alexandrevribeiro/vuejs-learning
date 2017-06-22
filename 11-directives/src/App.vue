<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives (global)</h1>
                <p v-highlight="'red'">Color this! (text)</p>
                <p v-highlight:background.delayed="'red'">Color this! (background)</p>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives (local)</h1>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this! (background)</p>
            </div>
        </div>
    </div>
</template>

<script>
    import HighlightDirective from './directives/HighlightDirective.js';

    export default {
        directives: {
            'local-highlight': HighlightDirective
        }
    }
</script>

<style>

</style>
