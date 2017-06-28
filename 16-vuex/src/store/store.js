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
    // Mutations MUST be synchronous, because otherwise it would be
    // impossible to track the state changes
    mutations: {
        increment: state => {
            state.count++;
        },
        decrement: state => {
            state.count--;
        }
    },
    // Actions, however, may run async code and then change the state 
    // by calling a mutation (through "commit" method)
    actions: {
        asyncIncrement: context => {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement');
            }, 1000);
        }
    }
});