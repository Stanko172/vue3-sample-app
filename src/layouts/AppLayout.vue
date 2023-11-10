<template>
  <header class="bg-slate-100 p-4 mb-12">
    <nav>
      <RouterLink to="/"> Home </RouterLink> |
      <RouterLink to="/posts"> Posts </RouterLink>
    </nav>
  </header>

  <slot />
</template>

<script setup lang="ts"></script>
