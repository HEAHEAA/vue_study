// src/store/modules/store1.js

import axios from "axios";

const store1 = {
    namespaced: true,
    state: () => ({
        count: 0,
        itemList: []
    }),
    mutations: {
        GET_ITEM(state,item){
            state.itemList = item;
        }

    },
    actions: {
        increment({ commit }) {
            commit('increment');
        },

    },
    getters: {
        count(state) {
            return state.count;
        },
    }
};

export default store1;
