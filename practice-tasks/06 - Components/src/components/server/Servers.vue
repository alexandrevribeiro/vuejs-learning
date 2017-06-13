<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server :server="server" v-for="server in servers" />
        </ul>
    </div>
</template>

<script>

    import Server from './Server.vue';

    export default {
        components: {
            appServer: Server
        },
        data() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Normal' },
                ]
            };
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>