<template>
  <section :id="block.id" class="py-[50px]" :data-cms-bind="dataBinding">
    <div class="container">
      <!-- eslint-disable -->
      <div v-html="block.content" />
      <!-- eslint-enable -->
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>
