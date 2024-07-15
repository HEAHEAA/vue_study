# Vue 3 + Vite 

### vue3 + vite + 필요 라이브러리 설치
```
$ npm create vite@latest [프로젝트 명] --template vue
$ cd [프로젝트명]
$ npm install
$ npm install vuex@next axios 
```

### Vuex 설정
#### Vuex Store 설정
-  src/store/index.js 파일을 생성하고 아래와 같이 설정
```
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        item: []
    },
    mutations: {

    },
    actions: {

    }
})
```


### Vuex Store 적용 
- src/main.js store적용
```
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.use(store);
app.mount('#app');
```


### 컴포넌트 생성
- src/components/ItemList.vue
- 일단 기본 틀 생성
```
<script setup>

</script>

<template>
  <div>
    <ul>
      <li>name</li>
      <button>Edit</button>
      <button>Delete</button>
    </ul>
    
    <input/>
    <button>Add Item</button>
    
  </div>
</template>

<style>

</style>
```


### crud 생성해보기
```
[src/store/index.js]

import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
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
            if(index !== -1){
                state.items.splice(index, 1, updateItem);
            }
        },
    },
    actions: {
        async fetchItems({ commit }) {
            const response = await axios.get('http://localhost:3000/item');
            commit('SET_ITEMS', response.data);
        },
        async addItem({ commit }, item) {
            const response = await axios.post(`http://localhost:3000/item`, item);
            commit('ADD_ITEM', response.data);
        },
        async deleteItem({commit}, id){
            await axios.delete(`http://localhost:3000/item/${id}`);
            commit('DELETE_ITEM',id);
        },
        async updateItem({ commit }, item) {
            const response = await axios.put(`http://localhost:3000/item/${item.id}`, item);
            commit('UPDATE_ITEM', response.data);
        }

    },
    
    //store 상태에서 계산되거나 필터된 데이터를 가져올 때 사용.
    getters: {
        items: state => state.items
    }
});

```



### ui에 실어보기
```
<template>
  <div>
    <div v-if="!currentItem">
      <input v-model="newItem.name" placeholder="New item name"/>
      <button @click="addItem">Add Item</button>
    </div>


    <div v-if="currentItem">
        <h2>Edit Item</h2>
      <input v-model="currentItem.name" placeholder="Edit Item"/>
      <button @click="updateItem">Update Item</button>
    </div>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>



  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

const store = useStore();

//1. 아이템 값 가져오기
const items = computed(() => store.getters.items);
const fetchItems = () => store.dispatch('fetchItems');

//2. 아이템 생성
const newItem = ref({name: ''});

const addItem = async () => {
  await store.dispatch('addItem', newItem.value);
  newItem.value.name = '';
}

//3. 아이템 삭제
const deleteItem = (id) => store.dispatch('deleteItem', id);

//4. 아이템 수정
const currentItem = ref(null);
const editItem = (item) => {
  currentItem.value = {...item};
}
const updateItem = async () => {
  await store.dispatch('updateItem', currentItem.value);
  currentItem.value = null;
}


onMounted(fetchItems);
</script>


<style scoped>
input{
  height: 35px;
}

li {
  margin-top: 10px;
}

button {
  margin-left: 5px;
}
</style>


```
