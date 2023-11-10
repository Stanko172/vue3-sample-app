<template>
  <AppLayout>
    <Add />
    <List />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@app/layouts/AppLayout.vue';
import { Add, List } from '@app/components';
</script>
