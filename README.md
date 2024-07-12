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
