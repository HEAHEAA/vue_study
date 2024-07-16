# vue_study


* * *
#### 프로젝트생성
```
vue create {프로젝트 명} --CLI
```

#### 프로젝트 install
```
npm install
```

#### 프로젝트 실행
```
npm run serve
```

#### 프로젝트 배포빌드
```
npm run build
```
* * *


### 기본 vue 파일 로직
```
<template>
    <img :src="이미지 변수" alt=""/>
    
    <input v-model="입력 변수 넣는 곳"/> //첫번째 방법
    <input @input="month = $event.target.value"/> //두번째 방법
    
    <select v-model="input 과 동일">
        <option></option>
    </select>
    
    <button @click="클릭 이벤트 넣는 방법"> onClick! </button>
    
    
    //for 문 사용방법
    <div v-for="(두개변수 삽입가능,i) in 변수명" :key="두개변수 삽입가능"></div>
    
    //if문 사용방법
    <div v-if="a===1"></div>
    <div v-else-if="a===2"></div>
    <div v-else></div>
    
</template>

<script>
import {} from '@/경로' //컴포넌트 및 데이터 불러오기

export default {
  name: [컴포넌트 명],
  props : { //부모 컴포넌트로부터 받은 데이터
    변수명 : 변수타입 (Number, Object, Array ...등)
  } 
  data() { // 데이터 들어가는 곳
    return{
        key: value
    }
  } 
  method: { //함수 function 이벤트 생성하는 곳
    increase(){
       이벤트 함수
    }
  } 
  components: { //컴포넌트 선언구
    Modal: Modal
  } 
  watch : {
    //변수가 변경될때 실행 할 코드
    month(value){
        if(value >= 12){
            alert('12이상 입니다.');
        }
    }
  }
  
  //라이프사이클 종류
  beforeCreate()
  created()
  beforeMount()
  mounted()
  beforeUpdate()
  updated()
  beforeUnmount()
  unmounted()
  
}
</script>

<style>
</style>
```

* * *


## Vue Router 기능

### vue router install 하기
```
$ npm install vue-router@4
```

### router.js 파일 만들어주기
```
[router.js]
import { createWebHistory, createRouter } from "vue-router";
import List from '~~경로'

const routes = [
  {
    path: "/경로",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

----------------------------------------------------------


[main.js]
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

createApp(App).use(router).mount('#app')


----------------------------------------------------------

[App.vue]
.
.
.
 // 부모 컴포넌트에 선언을 해주고, 넘기고자 하는 데이터를 props 로 넣어줄 수 있음.
 <router-view :blogs="blogs"/>
 .
 .
 

----------------------------------------------------------
 
※ hashrouter 사용는 방법 
    - 이렇게 설정하면 URL에 전부 # 이 붙은채로 시작함.
    - # 을 왜 붙이냐면 # 뒤에오는 내용들은 절대 서버로 전달하지 않음.

import { createRouter, createWebHashHistory } from 'vue-router'

const router = [];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
```


### 파라미터 작성 및 사용하는 방법
```
[router.js]
import { createWebHistory, createRouter } from "vue-router";
import List from '~~경로'
import Author from '~~~경로'
import Comment from '~~~경로'

const routes = [
  {
    path: "/경로/:param",
    component: List, //파라미터에 들어갈 컴포넌트
    children: [
        {path: 'author', component : Author},
        {path: 'comment', component : Comment}
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
```

### router param 에 맞는 데이터 바인딩 하는 방법
```
[Detail.vue]

//$route.params.[파라미터값] 

<template>
  <div>
    <h4>Deyail</h4>
    <h5>{{blogs[$route.params.id].title}}</h5>
    <p>{{blogs[$route.params.id].content}}</p>
    <button @click="$router.go(-1)">
      뒤로가기
    </button>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data(){
  },
  props: {
    blogs: Array,
  }
}
</script>

<style>

</style>

```


### router 파라미터 사이트 이동방법
```
// $router.push(`/detail/[for문에 들어간 id값으로 이동 시키기]`);

<template>
  <div v-for="blogs in blogs" :key="blogs">
    <h5 @click="$router.push(`/detail/${blogs.number}`)">{{blogs.title}}</h5>
    <p>{{ blogs.date }}</p>
<!--    <p>{{ blogs.content }}</p>-->
<!--    <p>{{ blogs.number }}</p>-->
<!--    <hr/>-->
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    blogs: Array,
  }
}

</script>

<style>
</style>

```

* * *

## solt 사용방법
#### - 부모컴포넌트로부터 props를 사용하지 않고 작성하려면
#### - 자식컴포넌트에서 뚫어놓고자 하는 html 부분에 <slot></slot> 를 적어준다.
#### - 만일 slot을 여러개 작성하고싶다면, <slot name="이름"></slot>을 작성해준다.
```
[vustagram/Filter.vue]
 
<template>
  <div class="filter-item">
    <slot name="a"></slot>
  </div>
</template>
----------------------------------------------------------
 [vustagram/Container.vue]
 
 <template>
    <template v-slot:a>{{filter}}</template> //넣고자 하는 곳에 템플릿과 v-slot에 정해놓은 name값 넣기
 </template>

```


* * *

## mitt 라이브러리 사용방법

#### 설치방법
```
$ npm install mitt //npm
$ yarn add mitt // yarn
```

#### mitt 기본세팅
```
[main.js]

import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.mount('#app') 
```

#### mitt 사용방법
```
[vuestagram/FilterBox.vue]

<template>
  <div @click="choiFilter(filter)">
    <slot name="a"></slot>
  </div>
</template>

<script>
    methods: {
        fun(value){
            this.emitter.emit('이벤트명', value);
        }
    }
</script>

----------------------------------------------------------
[vuestagram/App.vue]
    //이렇게 하면 a emitter가 선언된 값에 맞게 들어온다.
    
  mounted: {
     this.emitter.on('choiFilter', (a) => {
      this.picFilter = a;
      console.log('필터시작', a);
    });
 }

```

* * *

## Vuex 사용방법
#### props 와 custom event 로 사용하게 될시, 데이터를 주고받는 코드도 많아지고, 불편한점이 여럿생긴다.
#### 해당 문제점을 개선하기위해 한 곳에 데이터를 넣어서 다른 컴포넌트들도 사용할 수 있게끔 만들어놓은 라이브러리

```
[store.js 생성]

import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      
    }
  },
})

export default store
----------------------------------------------------------
[main.js]
import store from './store.js'

app.use(store).mount('#app')
```
####  vue파일에서 {{ $store.state.데이터명 }} 선언 시, 해당 state 값을 가져올 수 있다.

### state 변수상태 관리 하는 방법
```
[store.js]

const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
    }
  },
  mutations :{
    ageOnChange(state){ // age값이 +1 되게끔 선언
      state.age++
    }
  },
}

----------------------------------------------------------
[App.vue]

<button @click="$store.commit('ageOnChange')">버튼</button>

```


#### payload 로 추가 값 변경하기
```
[store.js]
const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
    }
  },
  mutations :{
    ageOnChange(state, payload){ 
      state.age+= payload
    }
  },
}

----------------------------------------------------------
[App.vue]
<button @click="$store.commit('ageOnChange',10)">버튼</button>
```


* * *

# Vue + Vite

### vue + vite + 필요 라이브러리 설치
```
$ npm create vite@latest [프로젝트 명] --template vue
$ cd [프로젝트명]
$ npm install
$ npm install vuex@next axios 
```

#### Vuex4 Store 설정
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


### Vuex4 Store 적용
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


* * *


### GridStack 사용하는방법
- components/GridStack.vue 생성
```
<template>
  <div ref="gridstack" class="grid-stack">
    <div v-for="item in items" :key="item.id" class="grid-stack-item" :gs-x="item.x" :gs-y="item.y" :gs-width="item.width" :gs-height="item.height">
      <div class="grid-stack-item-content">
        {{ item.content }}
      </div>
    </div>
  </div>

</template>

<script setup>
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import {onBeforeUnmount, onMounted, ref} from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const gridstack = ref(null);
let grid;

onMounted(()=>{
  grid = GridStack.init({
    float: true,
    resizable: {
      handles: 'se, sw'
    }
  }, gridstack.value);
});

onBeforeUnmount(()=>{
  if(grid){
    grid.destroy(false);
  }
})

</script>

<style>
.grid-stack-item-content {
  background-color: lightgrey;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

```

### App.vue
- 그리드스택 설정
```
<script setup>
import ItemList from "./components/ItemList.vue";
import GridStack from "./components/Gridstack.vue";
import {ref} from "vue";

const gridItems = ref([
  { id: 1, x: 0, y: 0, width: 2, height: 2, content: 'Item 1' },
  { id: 2, x: 2, y: 0, width: 20, height: 2, content: 'Item 2' },
  { id: 3, x: 4, y: 0, width: 2, height: 2, content: 'Item 3' },
])
</script>

<template>
  <div id="app">
    <ItemList/>
    <GridStack :items="gridItems"/>
  </div>
</template>

<style>

</style>

```

* * *

### Vuex4 에서 store 여러개로 관리하기

#### 1. 폴더 구조
```
src/
|-- store/
|   |-- modules/
|   |   |-- itemListStore.js
|   |   |-- store2.js
|   |-- index.js
|-- main.js
```

#### 2. itemListStore.js
```
// src/store/modules/itemListStore.js

const itemListStore = {
    namespaced: true,
    state: () => ({
        
    }),
    mutations: {
      
    },
    actions: {
        
    },
    getters: {
  
    }
};

export default itemListStore;
```


#### 2. store2.js
```
// src/store/modules/store2.js

const store2 = {
    namespaced: true,
    state: () => ({
        
    }),
    mutations: {
      
    },
    actions: {
        
    },
    getters: {
  
    }
};

export default store2;
```

#### 3. index.js
```
import { createStore } from 'vuex';
import itemListStore from './modules/itemListStore';
import store2 from './modules/store2';

const store = createStore({
    modules: {
        itemListStore,
        store2
    }
});

export default store;
```

