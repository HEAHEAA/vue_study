<template>
  <!--true false 버튼으로 상태값 지정해주기-->
  <v-btn @click="awesome = !awesome">
    {{ awesome }}
  </v-btn>

  <v-btn @click="typeView">{{ type }}</v-btn>

  <p v-if="type===1">1 입니당</p>
  <p v-else-if="type===2">2 입니당</p>
  <p v-else-if="type===3">3 입니당</p>

  <!--v-show 를 하면, 1포함 다보여짐-->
  <p v-show="awesome">1번 타켓</p>


  <p
    v-for="demo in demos"
    :key="demo"
  >
    이름: {{ demo.name }} <br/>
    휴대폰번호 : {{ demo.phone }}<br/>
    {{ demo.relationship }}
  </p>

  <br/>

</template>
<script setup>
import {onMounted, ref} from "vue";
import demo from '@/json/Demo.json';

const awesome = ref(true);


const type = ref(1);
const typeView = () => {
  if (type.value <= 3) {
    type.value++;
  }
}


/**
 * 방법 1
 * const demoFilter = () => {
 *   demos.value = demo.person.emergencyContacts.filter(item => item.name === 'Jane Doe');
 * };
 *
 * 방법 2
 * const demoFilter  = () => {
 *   demo.person.emergencyContacts.filter((item) => {
 *     if(item.name === 'Jane Doe'){
 *       demos.value = item;
 *     }
 *   })
 * }
 * **/

const demos = ref([]);
const demoFilter = () => {
  demos.value = demo.person.emergencyContacts.filter(item => item.name === 'Jane Doe'
    || item.name === 'Justin Doe');
};


onMounted(() => {
  demoFilter();
  console.log(demos.value);
})

</script>
