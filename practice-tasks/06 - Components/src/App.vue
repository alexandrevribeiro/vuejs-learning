<template>
    <div class="container">
    
        <app-header />
        <hr>
        <div class="row">
            <app-servers />
            <app-server-details />
        </div>
        <hr>
        <app-footer />
    </div>
</template>

<script>

import Header from './shared/Header.vue';
import Footer from './shared/Footer.vue';
import Servers from './server/Servers.vue';
import ServerDetails from './server/ServerDetails.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-servers': Servers,
        'app-server-details': ServerDetails
    }
}
</script>

<style>

</style>
