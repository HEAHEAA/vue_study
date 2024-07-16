<template>
  <ListItem/>

  <hr/>
<!--  <div>-->
<!--    <h1>Store 1 Count: {{ count }}</h1>-->
<!--    <button @click="incrementCount">Increment Count</button>-->
<!--    <h1>Store 2 Message: {{ message }}</h1>-->
<!--    <input v-model="newMessage" @keyup.enter="updateMessage" placeholder="Update message" />-->
<!--  </div>-->
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ListItem from "./components/ListItem.vue";

// 스토어 인스턴스 가져오기
const store = useStore();

const count = computed(() => store.getters['store1/count']);
const message = computed(() => store.getters['store2/message']);

console.log(store.getters['store1/itemList']);
const incrementCount = () => store.dispatch('store1/increment');
const newMessage = ref('');
const updateMessage = () => store.dispatch('store2/updateMessage', newMessage.value);

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
