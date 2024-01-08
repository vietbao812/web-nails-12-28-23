<template>
  <section :id="block.id" :style="{ marginTop: `-${marginTop}px` }" class="section-home-banner overflow-hidden relative" :data-cms-bind="dataBinding">
    <img :src="block.banner" :alt="block.banner_alt" class="w-full h-full object-cover">
    <div class="absolute container top-0 left-1/2 -translate-x-1/2 w-full h-full">
      <div class="button-absolute absolute bottom-[74px] right-0">
        <!-- <div class="button-bottom" @click="handleRouter(background, block.button.url)">
          <span class="bg-secondary">{{ block.button.text }}</span>
        </div>
        <div ref="background" class="bg-active-zoom" /> -->
        <ButtonAnimation :block="block" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>()

const header = ref()
const marginTop = ref(134)
onMounted(() => {
  header.value = document.querySelector('header')
  marginTop.value = header.value.clientHeight
})

</script>

<style lang="scss" scoped>
.section-home-banner {
  height: 100vh;
}
</style>
