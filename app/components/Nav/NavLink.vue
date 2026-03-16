<script setup lang="ts">
const { path } = defineProps<{ path: string }>();

const route = useRoute();

const isActive = computed(() => {
  if (path === '/' && route.path === '/') return true;
  return path !== '/' && route.path.startsWith(path);
});

const navActiveClasses = computed(() => {
  return isActive.value ? 'text-black' : 'text-gray-500 hover:text-black';
});
</script>

<template>
  <NuxtLink
    :to="path"
    class="transition-colors"
    :class="navActiveClasses"
    v-bind="$attrs"
  >
    <slot></slot>
  </NuxtLink>
</template>
