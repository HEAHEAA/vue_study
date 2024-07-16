<template>
  <div v-if="!currentItem">
    <input v-model="newItem.name" placeholder="New item name"/>
    <button @click="addItem">Add Item</button>
  </div>


  <div v-if="currentItem">
    <h2>Edit Item</h2>
    <input v-model="currentItem.name" placeholder="Edit Item"/>
    <button @click="updateItem">Update Item</button>
  </div>

  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
      <button @click="editItem(item)">Edit</button>
      <button @click="deleteItem(item.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

const store = useStore();

//1. 아이템 값 가져오기
const items = computed(() => store.getters['ItemStore/items']);
const fetchItems = () => store.dispatch('ItemStore/fetchItems');


//2. 아이템 생성
const newItem = ref({name: ''});

const addItem = async () => {
  await store.dispatch('ItemStore/addItem', newItem.value);
  newItem.value.name = '';
}

//3.아이템 삭제
const deleteItem = (id) => store.dispatch('ItemStore/deleteItem', id);

//4. 아이템 수정
const currentItem = ref(null);
const editItem = (item) => {
  currentItem.value = {...item};
}
const updateItem = async () => {
  await store.dispatch('ItemStore/updateItem', currentItem.value);
  currentItem.value = null;
}

onMounted(fetchItems);
</script>

<style></style>
