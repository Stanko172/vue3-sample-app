<template>
  <div>
    <div class="flex space-x-6 mb-2.5">
      <InputText v-model="todo.title" type="text" class="flex-1" placeholder="Add todo..." />
      <Button label="Add todo" @click="storeTodo(todo)" />
    </div>
    <InlineMessage v-if="errors.title" severity="error">
      {{ errors.title }}
    </InlineMessage>
  </div>
</template>

<script setup lang="ts">
import { useStoreTodoMutation } from '@app/composables';
import type { Todo } from '@app/types';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import { ref } from 'vue';

const todo = ref<Todo>({
  title: '',
  content: null,
  completed: false
});

const { mutate: storeTodo, errors } = useStoreTodoMutation();
</script>
