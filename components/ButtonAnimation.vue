<template>
  <div class="relative">
    <div :style="{ color: block.button.text_color, background: block.button.background }" class="button-bottom" @click="handleRouter(background, block.button.url)">
      <span :style="{}">{{ block.button.text }}</span>
    </div>
    <div ref="background" :style="{ background: block.button.background }" class="bg-active-zoom" />
  </div>
</template>

<script lang="ts" setup>
import { handleRouter } from '@/utils/handleRouter';

interface Props {
  block: any;
}
defineProps<Props>()
const background = ref()

</script>

<style lang="scss" scoped>
// .button-bottom {
//   // &::after,
//   // &::before {
//   //   // background-color: var(--bgButton);
//   // }
// }
</style>
