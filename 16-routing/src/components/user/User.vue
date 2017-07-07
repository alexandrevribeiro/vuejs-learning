<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
        <br>
        <!-- Renders the nested (children) route -->
        <router-view></router-view>    
    </div>
</template>

<script>
export default {
    /*
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        // It's necessary to watch "route" for change because the "User.vue" component
        // isn't recreated every time you change the route.
        '$route'(to, from) {
            this.id = to.params.id;
        }
    },
    */
    // As of vue-router version 2.2, it's possible to bind the "route params" to "props",
    // avoiding have to watch a data property.
    // props: {
    //     id: String
    // },
    methods: {
        navigateToHome() {
            // this.$router.push('/');
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
