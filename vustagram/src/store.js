import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 30,
            likeCheck: false,
            more: {},
        }
    },
    mutations: {
        setMore(state, data){
            state.more = data;
        },
        onchangeName(state) {
            state.name = 'park';
        },
        onchangeAge(state, payload) {
            state.age += payload; //방법 1
            // state.age = state.age + 1; //방법2
        },
        onchangeLikes(state) {
            if(state.likeCheck === false){
                state.likes++;
                state.likeCheck = true;
            }else {
                state.likes--;
                state.likeCheck = false;
            }
        },
    },
    actions: { //ajax 사용할때
        getData(context){
          axios.get(`https://codingapple1.github.io/vue/more0.json`)
              .then((res)=> {
              context.commit('setMore', res.data);
          });
        },
    },

})

export default store;
