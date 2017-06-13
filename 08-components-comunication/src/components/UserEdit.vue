<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    props: {
        userAge: Number
    },
    methods: {
        editAge() {
            this.userAge = 30; // Vue shows an error because of this line: "Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders"
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
