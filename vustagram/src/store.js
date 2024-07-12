import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 30,
            check: false,
        }
    },
    mutations: {
        onchangeName(state) {
            state.name = 'park';
        },
        onchangeAge(state, payload) {
            state.age+= payload; //방법 1
            // state.age = state.age + 1; //방법2
        },
        onchangeLikes(state) {
            if(state.check === false){
                state.likes += 1;
                state.check = true;
            }else {
                state.likes -= 1;
                state.check = false;
            }
        }
    },

})

export default store;
