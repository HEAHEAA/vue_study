<template>
  <v-container>
    <Counter/> <br/>
    <VIfShow/> <br/>
    <InputSelect/> <br/>
    <ToggleTransition/> <br/>

    <!-- 동적 컴포넌트장에서 컴포넌트 엘리먼트로 사용하기-->
<!--    <component :is="InputSelect"/>-->

  </v-container>


</template>

<script setup>
import Counter from "@/components/Counter.vue";
import VIfShow from "@/components/VIfShow.vue";
import InputSelect from "@/components/InputSelect.vue";
import {provide, ref} from "vue";
import ToggleTransition from "@/components/ToggleTransition.vue";

//props 개념
const counts = ref(0);
const handleCount = () => {
  counts.value ++;
}
provide('handle', {counts,handleCount});



</script>
