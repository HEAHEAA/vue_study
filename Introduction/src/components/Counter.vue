<template class="counter">
  <p>{{count}}</p>
  <p>{{doubleCount}}</p>
  <v-btn @click="increment">+1</v-btn>
  <hr/>
</template>

<script setup>
import {useCounterStore} from '@/store/counter';
import {storeToRefs} from "pinia";

const store = useCounterStore();
const {count, doubleCount} = storeToRefs(store);
const {increment} = store

//초기값 설정해줌
store.$counterDefault();

import {onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";




onMounted(()=>{
  console.log("onMounted");
});

onUnmounted(()=>{
  console.log("onUnmounted");
})

onBeforeUpdate(()=>{
  console.log("onBeforeUpdate");
})

onUpdated(()=>{
  console.log("onUpdated");
})

</script>

<style scoped>
.counter{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
