<template>
  <!-- 마우스 움직임 없을 시, 화면잠금 발생 -->
  <Lock
    v-if="isLocked"
    :toggleLockScreen="toggleLockScreen"
  />

  <Default v-else/>
</template>
<script setup>
import Lock from "@/layout/Lock.vue";
import {ref} from "vue";
import Default from "@/layout/bar/Default.vue";
import {useMainStore} from "@/store/main";


const store = useMainStore();

// 상태정의
const isLocked = ref(false);

const toggleLockScreen = () => {
  isLocked.value = false;
}

// 1분 동안 비활동 시 잠금
let inactivityTimer;

function startInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    isLocked.value = true;
    store.auth.logout();
  }, 1000 * 60 * 5);
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  startInactivityTimer();
}

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);

// 페이지 로드 시 타이머 시작
startInactivityTimer();

</script>
<style>

</style>
