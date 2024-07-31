import {defineStore} from "pinia";
import {useAuthStore} from "@/store/auth/auth";
import {useThemeStore} from "@/store/default/theme";

export const useMainStore = defineStore('main', () => {
  const auth = useAuthStore();
  const theme = useThemeStore();

  return {
    auth,
    theme
  }
})
