// Using namespaces manually (Option 1).
// It would also require to change the components that use this

import * as types from '../types';

const state = {
    count: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.count * 2;
    },
    [types.STRING_COUNTER]: state => {
        return state.count + ' clicks';
    }
};

// Mutations MUST be synchronous, because otherwise it would be
// impossible to track the state changes
const mutations = {
    increment: (state, payload) => {
        state.count += payload;
    },      
    decrement: (state, payload) => {
        state.count -= payload;
    }
};

// Actions, however, may run async code and then change the state 
// by calling a mutation (through "commit" method)
const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions
}