import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleCounter: state => {
            return state.count * 2;
        },
        stringCounter: state => {
            return state.count + ' clicks';
        }
    },
    mutations: {
        increment: state => {
            state.count++;
        },
        decrement: state => {
            state.count--;
        }
    }
});