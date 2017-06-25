import Vue from 'vue';

export default function () {

    // Creates a global filter that counts the length of a string and return
    // the original string plus its count
    Vue.filter('append-count', (value) => {
        if (!value) 
            return value;

        return `${value} (${value.length})`;
    });
}