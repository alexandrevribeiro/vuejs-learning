<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedTemplate = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedTemplate = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedTemplate = 'app-red'">Load Red Template</button>
                <hr>
                <component :is="selectedTemplate">
                    <h3>Content template!</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi ut scelerisque justo. Nunc aliquam convallis urna non varius.
                    </p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                selectedTemplate: 'app-blue'
            };
        }
    }
</script>

<style>
</style>
