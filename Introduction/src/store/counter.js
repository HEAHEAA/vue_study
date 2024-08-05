import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref('Eduardo');

  //computed 는 실제 계산하는 값에서 계산을 미리해서 내보냄
  /**
   * ! 반응형 동작 컴포넌트에서 정의할때
   * ! 이미 doubleCount 는 같이 계산된 값이다.
   * ! 업데이트될때마다 알아서 값을 업데이트 시켜줌
   *  const {count, doubleCount} = storeToRefs(store);
   **/
  const doubleCount = computed(() => count.value * 2);


  /**
   * ! 반응형 동작 컴포넌트에서 정의할때
   * const store = useCounterStore();
   * const {increment} = store 이렇게 정의
   **/
  const increment = () => {
    count.value++;
  }


  const $counterDefault = () => {
    count.value = 7;
  }

  return {count, name, doubleCount, increment , $counterDefault};
})
