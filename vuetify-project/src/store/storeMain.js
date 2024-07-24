import {defineStore} from "pinia";
import {useCounterStore} from "@/store/user/counter";
import {useUserStore} from "@/store/user/user";

export const useStoreMain = defineStore('combined', () => {
  const countStore = useCounterStore();
  const userStore = useUserStore();

  return {
    countStore,
    userStore
  }
})
