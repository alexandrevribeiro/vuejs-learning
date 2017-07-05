import Vue from 'vue';
import Vuex from 'vuex';

// Using module with manual namespaces (types.js file)
import counter from './modules/counter_manual_namespaced';

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