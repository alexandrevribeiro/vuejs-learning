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
        increment: (state, payload) => {
            state.count += payload;
        },
        decrement: (state, payload) => {
            state.count -= payload;
        }
    },
    // Actions, however, may run async code and then change the state 
    // by calling a mutation (through "commit" method)
    actions: {
        anyAction: context => { console.log('anyAction'); },
        asyncIncrement: (context, payload) => {
            setTimeout(() => {
                context.commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        }
    }
});