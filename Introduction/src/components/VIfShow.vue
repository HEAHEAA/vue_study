<template>
  <!--true false 버튼으로 상태값 지정해주기-->
  <v-btn @click="awesome = !awesome">
    {{awesome}}
  </v-btn>

  <v-btn @click="typeView">{{type}}</v-btn>

  <p v-if="type===1">1 입니당</p>
  <p v-else-if="type===2">2 입니당</p>
  <p v-else-if="type===3">3 입니당</p>

  <!--v-show 를 하면, 1포함 다보여짐-->
  <p v-show="awesome">1</p>

  <hr/>

</template>
<script setup>
import {ref} from "vue";

const awesome = ref(true);


const type = ref(1);
const typeView = () => {
  if(type.value <= 3){
    type.value ++;
  }
}
</script>
