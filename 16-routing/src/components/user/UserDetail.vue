<template>
    <div>
        <h3>Some User Details</h3>
        <p>User id: {{ id }}</p>
        <router-link
            tag="a"
            :to="{ name: 'userEdit', params: { id: id}, query: { locale: 'en', q: 100 } }"
            class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>
