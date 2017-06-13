<template>
    <li class="list-group-item" 
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script>

    import { serverBus } from './../../main.js';

    export default {
        props: {
            server: Object
        },
        methods: {
            serverSelected() {
                serverBus.serverSelected(this.server);
            }
        }
    }
</script>
