import {defineStore} from "pinia";
import {computed, ref} from "vue";
import vuetify from '@/plugins/vuetify';
import {useTheme} from "vuetify";

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('CustomDark'); // 초기 테마 설정


  const isDark = computed(() => {
    const theme = useTheme()
    return theme.global.current.value.dark
  })

  const changeTheme = (newTheme) => {
    if (vuetify.theme.themes[newTheme]) { // 유효한 테마인지 확인
      theme.value = newTheme;
      vuetify.theme.global.name.value = newTheme; // Vuetify의 테마를 변경
    } else {
      console.error(`Theme ${newTheme} does not exist.`);
    }
  };

  return { theme, changeTheme, isDark };
})
