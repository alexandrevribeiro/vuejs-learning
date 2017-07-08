<template>
    <div>
        <h3>Some User Details</h3>
        <p>User id: {{ id }}</p>
        <router-link
            tag="a"
            :to="editUserLink"
            class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            editUserLink: { 
                name: 'userEdit', 
                params: { id: this.id}, 
                query: { locale: 'en', q: 100 } ,
                hash: "#data"
            }
        }
    }
}
</script>
