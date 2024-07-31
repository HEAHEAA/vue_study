import { createRouter, createWebHistory } from 'vue-router/auto'

import Login from "@/view/Login.vue";
import {useMainStore} from "@/store/main";

const routes = [
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', redirect: '/login' },// 모든 알 수 없는 경로를 /login으로 리디렉션
  {
    path: '/',
    component: ()=> import('@/layout/DefaultView.vue'),
    children: [
      {
        path: '',
        component: ()=> import('@/view/dashboard/Dashboard.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const store = useMainStore();
  if (!store.auth.accessToken && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
})


export default router
