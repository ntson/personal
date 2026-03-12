<script setup lang="ts">
defineProps<{ path: string }>();

const route = useRoute();

function isActive(path: string) {
  if (path === '/' && route.path === '/') return true;
  if (path !== '/' && route.path.startsWith(path)) return true;
  return false;
}

function navActiveClass(path: string) {
  return isActive(path) ? 'text-black' : 'text-gray-500 hover:text-black';
}
</script>

<template>
  <NuxtLink
    :to="path"
    class="transition-colors"
    :class="navActiveClass(path)"
    v-bind="$attrs"
  >
    <slot></slot>
  </NuxtLink>
</template>
