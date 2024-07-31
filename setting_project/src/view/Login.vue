<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field v-model="user_id" label="user_id" required></v-text-field>
      <v-text-field v-model="user_password" label="user_password" type="password" required></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/store/auth/auth";
import {useRouter} from "vue-router";

const user_id = ref('');
const user_password = ref('');
const authStore = useAuthStore();
const router = useRouter();

// 로그인 이벤트
const handleLogin = async () => {
  await authStore.login({user_id: user_id.value, user_pwd: user_password.value});
  if(authStore.accessToken){
    router.replace('/');
  }
}

</script>
