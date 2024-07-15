// src/store/modules/store1.js
const store1 = {
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        }
    },
    getters: {
        count(state) {
            return state.count;
        }
    }
};

export default store1;
