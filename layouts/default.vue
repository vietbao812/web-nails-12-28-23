<template>
  <div class="min-h-screen flex flex-col">
    <MainHeader class="shrink-0" />
    <main class="grow">
      <slot />
    </main>
    <MainFooter v-if="showFooter" class="shrink-0" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showFooter = ref(route.path !== '/')
watch(() => route.path, (path) => {
  showFooter.value = path !== '/'
})
</script>

<style scoped>

</style>
