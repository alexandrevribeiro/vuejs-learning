<template>
    <div class="container">
        <div class="row">
            <app-header />
        </div>
        <hr>
        <div class="row">
            <app-servers />
            <app-server-details />
        </div>
        <hr>
        <div class="row">
            <footer />
        </div>
    </div>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import Servers from './Servers.vue';
import ServerDetails from './ServerDetails.vue';

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
