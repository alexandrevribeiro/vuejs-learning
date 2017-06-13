<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="!server"> <p>Please select a serer.</p> </template>
        <template v-else>
            <p>Server # {{ server.id }} selected.</p>
            <p>Status: {{ server.status }}.</p>
            <hr />
            <button v-if="server.status != 'Normal'" @click="changeToNormal">Change to 'Normal'</button>
        </template>
    </div>
</template>

<script>

    import { serverBus } from './../../main.js';

    export default {
        data() {
            return {
                server: null
            };
        },        
        methods: {
            changeToNormal() {
                this.server.status = 'Normal';
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>


<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
