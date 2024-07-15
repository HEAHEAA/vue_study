import { createStore } from 'vuex';
import store1 from './modules/store1';
import store2 from './modules/store2';
import ItemStore from "./modules/ItemStore.js";
const store = createStore({
    modules: {
        store1,
        store2,
        ItemStore,
    }
});

export default store;
