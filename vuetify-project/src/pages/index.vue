<template>
  <p>{{name}}</p>
  <p>Count {{count}}</p>
  <button @click="increment">숫자 +1</button>
  <br/>
  <button @click="nameChange">이름바꾸기</button>
</template>

<script setup>
 import {useCounterStore} from "@/store/counter";
 import {storeToRefs} from "pinia";
 const store = useCounterStore();

 const {name, count} = storeToRefs(store);
 const {increment,nameChange} = store

</script>
<style>
button{
  background-color: aqua;
}
</style>
