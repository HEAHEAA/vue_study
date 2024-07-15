import { createStore } from 'vuex';
import store1 from './modules/store1';
import store2 from './modules/store2';

const store = createStore({
    modules: {
        store1,
        store2
    }
});

export default store;
