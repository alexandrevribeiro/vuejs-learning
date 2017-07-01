const state = {
    count: 0
};

const getters = {
    doubleCounter: state => {
        return state.count * 2;
    },
    stringCounter: state => {
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