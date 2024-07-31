<template>
  <router-view/>
</template>

<script setup>
import {useAuthStore} from "@/store/auth/auth";
import {onMounted} from "vue";
import {useTheme} from 'vuetify';

/**
 * vuetify 테마 적용
 */
const theme = useTheme();
function setTheme() {
  const local = window.localStorage.getItem("gis-theme")
  if (local !== null) {
    theme.global.name.value = local
  }
}

const authStore = useAuthStore();

onMounted(()=>{
  authStore.checkAuth();
  setTheme();
})
</script>

<style>
@font-face {
  font-family: 'Line B';
  src: url("@/assets/font/LINESeedKR-Bd.woff2");
}
@font-face {
  font-family: 'Line R';
  src: url("@/assets/font/LINESeedKR-Rg.woff2");
}
@font-face {
  font-family: 'Line Th';
  src: url("@/assets/font/LINESeedKR-Th.woff2");
}

html {
  font-family: "Line R", serif;
}

body::-webkit-scrollbar{
  display: none;
}


</style>
