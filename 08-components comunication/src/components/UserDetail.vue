<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>Reversed name: {{ reverseName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name (child method)</button>
        <button @click="resetCallback">Reset name (parent callback)</button>
    </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    },
    methods: {
        reverseName() {
            return this.myName.split('').reverse().join('');
        },
        resetName() {
            this.myName = 'Alexandre';
            // Emittes an event to the parent component
            this.$emit('nameWasReset', this.myName);
        }
    },

    // Possibilities to specify props:    

    // 1) A more complex validations:
    props: {
        myName: {
            type: String,
            required: true
        },
        resetCallback: Function,
        userAge: Number
    }

    // 2) Just the name:
    // props: ['myName'],

    // 3) Validating it by type:
    // props: {
    //     myName: String
    // },

    // 4) With default values:
    // props: {
    //     myName: {
    //         type: String,
    //         default: 'Alexandre'
    //     }
    // },

    // 5) Default for objects:
    // props: {
    //     myName: {
    //         type: Object,
    //         default() {
    //             return { name: 'Me!'};
    //         }
    //     }
    // },    
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
