<template>
  <v-btn @click="show = !show">토글</v-btn>
  <Transition>
    <p v-if="show">안녕</p>
  </Transition>

</template>
<script setup>
import {ref} from "vue";

const show = ref(false);


</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
