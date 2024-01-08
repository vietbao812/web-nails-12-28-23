<template>
  <section :id="block.id" :style="{ background: block.background, color: block.text_color }" :data-cms-bind="dataBinding" class="pt-[35px]">
    <div class="container">
      <div class="grid sm:grid-cols-3 gap-[5px]">
        <div v-for="(contact, index) in block.contact" :key="index" class="rounded-[20px] flex items-center justify-center gap-[20px] py-[35px] px-[16px] sm:px-[40px] relative">
          <div>
            <img :src="contact.icon" alt="icon" class="min-w-[28px] w-[28px]">
          </div>
          <div :class="[index === 0 ? 'text-[20px]' : 'text-[24px]']">
            {{ contact.value }}
          </div>
          <div :style="{ background: block.background_box }" class="w-full h-full absolute top-0 left-0 rounded-[20px] opacity-5" />
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

</style>
