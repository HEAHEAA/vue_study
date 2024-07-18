import { createStore } from 'vuex';
import item_store from "@/store/modules/item_store";

const store = createStore({
  modules: {
    item_store,
  }
});

export default store;
