<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-slate-100 p-4 mb-12">
    <nav>
      <RouterLink to="/"> Home </RouterLink> |
      <RouterLink to="/posts"> Posts </RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>
