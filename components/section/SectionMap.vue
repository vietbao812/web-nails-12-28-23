<template>
  <section :id="block.id" :style="{ background: block.background }" :data-cms-bind="dataBinding" class="pb-[68px] pt-[60px] text-white">
    <div class="container">
      <!-- eslint-disable -->
      <div class="gg-map">
        <div v-html="block.map"></div>
      </div>
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

<style lang="scss" scoped>
.gg-map {
  border-radius: 40px;
  overflow: hidden;
  iframe {
    width: 100% !important;
    height: 400px !important;
  }
}
</style>
