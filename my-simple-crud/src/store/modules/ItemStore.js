import axios from "axios";

const ItemStore = {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
        SET_ITEMS(state, items) {
            state.items = items;
        },
        ADD_ITEM(state, item) {
            state.items.push(item);
        },
        DELETE_ITEM(state, id) {
            state.items = state.items.filter(item => item.id !== id);
        },
        UPDATE_ITEM(state, updateItem) {
            const index = state.items.findIndex((item) => item.id === updateItem.id);
            if (index !== -1) {
                state.items.splice(index, 1, updateItem);
            }
        },
    },
    actions: {
        async fetchItems({commit}) {
            const response = await axios.get('http://localhost:3000/item');
            commit('SET_ITEMS', response.data);
        },
        async addItem({commit}, item) {
            const response = await axios.post(`http://localhost:3000/item`, item);
            commit('ADD_ITEM', response.data);
        },
        async deleteItem({commit}, id) {
            await axios.delete(`http://localhost:3000/item/${id}`);
            commit('DELETE_ITEM', id);
        },
        async updateItem({commit}, item) {
            const response = await axios.put(`http://localhost:3000/item/${item.id}`, item);
            commit('UPDATE_ITEM', response.data);
        }

    },
    getters: {
        items: state => state.items,
    },
}
export default ItemStore;
