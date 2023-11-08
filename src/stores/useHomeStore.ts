import { ref } from "vue";

const count = ref(0);

export function useHomeStore() {
  function increment() {
    count.value++;
  }

  return { count, increment };
}
