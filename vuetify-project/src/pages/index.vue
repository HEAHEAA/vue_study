<template>
  <p>Count {{count}}</p>
  <button @click="increment">숫자 +1</button>
  <br/>
  <p>{{name}}</p>
  <button @click="changeName">이름바꾸기</button>
</template>

<script setup>
 import {storeToRefs} from "pinia";
 import {useStoreMain} from "@/store/storeMain";

 const mainStore = useStoreMain();
 const {countStore,userStore} = mainStore;

 const {count} = storeToRefs(countStore);
 const {name} = storeToRefs(userStore);
 const {increment} = countStore
 const {setName} = userStore;

 const changeName = () => {
   setName('wlgml');
 }




</script>
<style>
button{
  background-color: aqua;
}
</style>
