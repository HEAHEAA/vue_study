<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        width="260"
      >
        <v-list-item nav>

          <template #prepend>
            <v-btn
              variant="text"
              icon="mdi-menu"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
          <template #title>
            <v-img class="ma-2" contain max-width="30" src="@/assets/logo.png"></v-img>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list v-for="(menu,idx) in menu" :key="idx" density="compact" nav>
          <v-list-item v-if="menu.children === null" :prepend-icon="menu.icon" :title="menu.text" :to="menu.url"></v-list-item>
          <v-list-group v-else value="item">
            <template #activator="{props}">
              <v-list-item v-bind="props" :prepend-icon="menu.icon" :title="menu.text" @click.stop="rail = false"></v-list-item>
            </template>
            <v-list-item v-for="child in menu.children" :key="child.id" :title="child.text" :to="child.url"></v-list-item>
          </v-list-group>
        </v-list>

        <template v-slot:append v-if="!rail">
          <div class="pa-2">
            <v-btn block @click="store.auth.handleLogout()">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 100vh;">
        <TopBar/>
        <router-view/>
      </v-main>

    </v-layout>
  </v-card>
</template>

<script setup>
import TopBar from './TopBar.vue';
import {useMainStore} from '@/store/main';
import menu from '@/mock/menu.json';
import {ref} from "vue";

const store = useMainStore();
const drawer = ref(true);
const rail = ref(true);

console.log(menu)



</script>
