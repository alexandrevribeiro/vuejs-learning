// Mutations MUST be synchronous, because otherwise it would be
// impossible to track the state changes

export const updateValue = (state, payload) => {
    state.value = payload;
};