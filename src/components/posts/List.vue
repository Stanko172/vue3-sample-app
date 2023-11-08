<template>
  <div class="mt-8 space-y-2">
    <div v-for="todo in todos" :key="todo.id">
      <div class="border border-slate-300 py-2 px-4 rounded-md flex items-center justify-between">
        <span>{{ todo.title }}</span>
        <Button label="Delete" severity="danger" text @click="deleteTodo(todo.id)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodosQuery, useDeleteTodoMutation } from '@app/composables';
import Button from 'primevue/button';

const { data: todos } = useTodosQuery();
const { mutate: deleteTodo } = useDeleteTodoMutation();
</script>
