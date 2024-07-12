import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
        }
    },
    mutations: {
      onchangeName(state) {
          state.name = 'park';
      }
    },

})

export default store;
