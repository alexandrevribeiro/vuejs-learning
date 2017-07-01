export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};

export const anyOtherAction = (context, payload) => {
    console.log("anyOtherAction");
}