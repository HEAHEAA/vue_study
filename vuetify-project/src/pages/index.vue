<template>
  <p>Count {{count}}</p>
  <button @click="increment">숫자 +1</button>
  <br/>
  <p>{{name}}</p>
  <button @click="changeName">이름바꾸기</button>

  <hr/>

  <p>{{ message }}</p>
  <button @click="updateMessage">Update Message</button>
</template>

<script setup>
 import {storeToRefs} from "pinia";
 import {useStoreMain} from "@/store/storeMain";
 import {onMounted,  ref ,onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

 const mainStore = useStoreMain();
 const {countStore,userStore} = mainStore;

 const {count} = storeToRefs(countStore);
 const {name} = storeToRefs(userStore);
 const {increment} = countStore
 const {setName} = userStore;

 const changeName = () => {
   setName('지희');
 }

 // 상태 정의
 const message = ref('Hello, Vue.js!');

 // 라이프사이클 훅 사용
 onBeforeMount(() => {
   console.log('be mounted');
 });

 onMounted(() => {
   console.log('onMounted');
 });

 onBeforeUpdate(() => {
   console.log('업데이트 beforeUpdate');
   count.value ++;
 });

 onUpdated(() => {
   console.log('업데이트 onUpdated');
 });

 onBeforeUnmount(() => {
   console.log('BeforeUnmounted');
 });

 onUnmounted(() => {
   console.log('onUnmounted');
 });

 // 메서드 정의
 function updateMessage() {
   message.value = 'Message updated!';
 }
</script>



<style>
button{
  background-color: aqua;
}
</style>
