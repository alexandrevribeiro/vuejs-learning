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

    import Header from './components/shared/Header.vue';
    import Footer from './components/shared/Footer.vue';
    import Servers from './components/server/Servers.vue';
    import ServerDetails from './components/server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
            appServers: Servers,
            appServerDetails: ServerDetails
        }
    }
</script>

<style>

</style>
