<template>
  <v-card class="lock">
    <v-row justify="center">
      <v-col
        cols="12"
        lg="6"
        md="8"
        sm="10"
        class="lock-col"
      >
        <v-form @submit.prevent="handleLockLogin">
          <p>화면잠금</p>
          <v-text-field
            v-model="user_pwd"
            label="password"
            type="password"
            required />

          <v-btn type="submit">
            잠금풀기
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

  </v-card>
</template>
<script setup>

import {ref} from "vue";
import {useMainStore} from "@/store/main";

const user_id = ref(localStorage.getItem('id'));
const user_pwd = ref('');
const store = useMainStore();

const props = defineProps({
  toggleLockScreen: {
    type: Function,
    required: true
  },
});

const handleLockLogin = async () => {
  await store.auth.login({
    user_id: user_id.value,
    user_pwd: user_pwd.value
  });
  if(store.auth.accessToken){
    props.toggleLockScreen();
  }
}

//
</script>
<style>
.lock{
  width: 100%;
  height: 100vh;
  align-items: center;
}

.lock-col{
  position: absolute;
  top: 45%;
}
.lock-col p{
  margin-bottom: 10px;
}
</style>

