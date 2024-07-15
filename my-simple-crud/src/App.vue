
<template>
  <div id="app">
<!--        <ItemList/>-->

    <div>
      <h1>Store 1 Count: {{ count }}</h1>
      <button @click="incrementCount">Increment Count</button>
      <h1>Store 2 Message: {{ message }}</h1>
      <input v-model="newMessage" @keyup.enter="updateMessage" placeholder="Update message" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// Store 1
const count = computed(() => store.state.store1.count);
const incrementCount = () => store.dispatch('store1/increment');

// Store 2
const message = computed(() => store.state.store2.message);
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
