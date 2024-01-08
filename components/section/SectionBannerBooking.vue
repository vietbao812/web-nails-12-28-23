<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="mt-[-134px] pt-[134px]">
    <div class="container">
      <img :src="block.banner" :alt="block.banner_alt" class="w-full object-cover aspect-[16/9] sm:aspect-[224/55]">
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

<style lang="scss" scoped>

</style>
