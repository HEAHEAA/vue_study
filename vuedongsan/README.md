# Vue Study Repository

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


### 




