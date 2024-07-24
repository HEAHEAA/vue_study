<template>
  <p>Count {{count}}</p>
  <button @click="increment">숫자 +1</button>
  <br/>
  <p>{{name}}</p>
  <button @click="changeName">이름바꾸기</button>
</template>

<script setup>
 import {useCounterStore} from "@/store/counter";
 import {storeToRefs} from "pinia";
 import {useUserStore} from "@/store/user";
 const store = useCounterStore();
 const user = useUserStore();

 const {count} = storeToRefs(store);
 const {name} = storeToRefs(user);
 const {increment} = store
 const {setName} = user;

 const changeName = () => {
   setName('지희');
 }

</script>
<style>
button{
  background-color: aqua;
}
</style>
