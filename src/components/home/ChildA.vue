<template>
  <div class="flex">
    <div class="p-4 bg-slate-100 flex-1">Count from ChildA: {{ count }}</div>
    <Button @click="increment"> increment from child </Button>
  </div>
</template>

<script setup lang="ts">
// import { inject } from 'vue';
import Button from 'primevue/button';
import { useHomeStore } from '@app/stores';

//PROVIDE/INJECT
// const count = inject<number>(0);

// function increment(): void {
//   count.value++;
//   console.log('count: ', count.value);
// }

const { count, increment } = useHomeStore();
</script>
