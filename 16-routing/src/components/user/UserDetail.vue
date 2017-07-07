<template>
    <div>
        <h3>Some User Details</h3>
        <p>User id: {{ id }}</p>
        <router-link
            tag="a"
            :to="{ name: 'userEdit', params: { id: id} }"
            class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>
