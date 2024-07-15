// src/store/modules/store2.js
const store2 = {
    namespaced: true,
    state: () => ({
        message: 'Hello, World!'
    }),
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    actions: {
        updateMessage({ commit }, newMessage) {
            commit('setMessage', newMessage);
        }
    },
    getters: {
        message(state) {
            return state.message;
        }
    }
};

export default store2;
