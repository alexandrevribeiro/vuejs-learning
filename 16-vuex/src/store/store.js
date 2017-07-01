import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,    
    actions,
    modules: {
        counter
    },
});

// - "Mutations" MUST be synchronous, because otherwise it would be
// impossible to track the state changes
// - "Actions", however, may run async code and then change the state 
// by calling a mutation (through "commit" method)


/*

-> BEFORE folder restructuring

export const store = new Vuex.Store({
    state: {
        count: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.count * 2;
        },
        stringCounter: state => {
            return state.count + ' clicks';
        },
        value: state => {
            return state.value;
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
        },
        updateValue: (state, payload) => {
            state.value = payload;
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
        },
        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
        }
    }
});

*/