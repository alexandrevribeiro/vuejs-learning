<template>
    <div v-if="!server" class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>
    <div v-else class="col-xs-12 col-sm-6">
        <p>Server # {{ server.id }}</p>
        <p>Status: {{ server.status }}</p>
        <button v-if="server.status != 'Normal'" @click="changeToNormal">Change to 'Normal'</button>
    </div>
</template>

<script>

    import { eventBus } from './../../main.js';

    export default {
        data() {
            return {
                server: null
            };
        },
        created() {
            // Listens to the "showServerDetails" event
            eventBus.$on('showServerDetails', (server) => {
                this.server = server;
            });
        },
        methods: {
            changeToNormal() {
                this.server.status = 'Normal';
                eventBus.serverWasChanged(this.server);
            }
        }
    }
</script>


<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
