<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>Reversed name: {{ reverseName() }}</p>
    </div>
</template>

<script>
export default {
    // Possibilities to specify props:
    // 1) Just the name:
    // props: ['myName'],

    // 2) Validating it by type:
    // props: {
    //     myName: String
    // },

    // 3) With more complex validations:
    props: {
        myName: {
            type: String,
            required: true
        }
    },

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

    methods: {
        reverseName() {
            return this.myName.split('').reverse().join('');
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
