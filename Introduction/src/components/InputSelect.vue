<template>
  <div>
    <v-text-field
      v-model="message"
      hide-details="auto"
      label="Main input"
    ></v-text-field>
    <p>{{message}}</p>

    <v-select v-model="selectChi" :items="selectItem" item-title="name" label="이름선택">
      <template v-slot:item="{ props }">
        <v-list-item v-bind="props"></v-list-item>
      </template>
    </v-select>


    {{counts}}
    <v-btn @click="handleCount">
      up
    </v-btn>

    <hr/>

  </div>
</template>
<script setup>
import {inject, ref} from "vue";

const selectItem = ref([
  {
    name: 'John',
    department: 'Marketing',
  },
  {
    name: 'Jane',
    department: 'Engineering',
  },
  {
    name: 'Joe',
    department: 'Sales',
  },
  {
    name: 'Janet',
    department: 'Engineering',
  },
  {
    name: 'Jake',
    department: 'Marketing',
  },
  {
    name: 'Jack',
    department: 'Sales',
  },
]);

const message = ref('');
const selectChi = ref(null);

//props 받기
const {counts,handleCount} = inject('handle');




</script>
