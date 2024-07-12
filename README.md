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
