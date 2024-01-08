<template>
  <section :id="block.id" class="pt-[38px] pb-[86px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid grid-cols-[544px_1fr] gap-[96px]">
        <div>
          <img :src="block.banner" :alt="block.banner_alt">
        </div>
        <div>
          <div class="section_label mb-[20px]">
            {{ block.section_label }}
          </div>
          <!-- eslint-disable -->
          <div class="heading-2" v-html="block.title" />
          <div class="section_title_line my-[20px] ml-[32px]" />
          <div class="mb-[30px]" v-html="block.description" />
          <!-- eslint-enable -->
          <div class="flex justify-end">
            <!-- <div ref="background" class="buton-abtsolute">
              <div class="button-bottom" @click="handleRouter(background, block.button.url)">
                <span class="bg-anchor text-white">{{ block.button.text }}</span>
              </div>
            </div> -->
            <ButtonAnimation :block="block" />
          </div>
        </div>
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

</script>

<style lang="scss" scoped>
// .button-bottom {
//   &::after,
//   &::before {
//     background-color: var(--color-anchor);
//   }
// }
</style>
