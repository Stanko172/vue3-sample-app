<script setup lang="ts">
import AppLayout from '@app/layouts/AppLayout.vue';
// import { ref, provide } from 'vue';
import { ChildA, ChildB } from '@app/components';
import { useHomeStore } from '@app/stores';

//PROVIDE/INJECT
// const count = ref<number>(0);

// function increment(): void {
//   count.value++;
//   console.log('count: ', count.value);
// }

//
const { count } = useHomeStore();

// provide('count', count);
</script>

<template>
  <AppLayout>
    <main>
      <div class="mb-6">Count in home: {{ count }}</div>

      <div class="space-y-3">
        <ChildA />
        <ChildB />
      </div>
    </main>
  </AppLayout>
</template>
