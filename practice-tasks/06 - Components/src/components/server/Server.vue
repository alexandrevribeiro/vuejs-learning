<template>
    <li class="list-group-item" >
        <a href="javascript:void(0)" @click="showDetails">Server #{{ serverData.id }}</a>         
    </li>
</template>

<script>

    import { eventBus } from './../../main.js';

    export default {
        props: {
            server: Object
        },
        data() {
            return {
                serverData: this.server
            };
        },
        methods: {
            showDetails() {
                eventBus.showServerDetails(this.serverData);
            }
        },
        created() {
            eventBus.$on('serverWasChanged', (server) => {
                this.serverData = server;
            });
        }
    }
</script>
