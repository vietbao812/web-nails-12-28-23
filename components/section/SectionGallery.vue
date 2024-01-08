<template>
  <section :id="block.id" :data-cms-bind="dataBinding" class="pb-[68px]">
    <div class="container">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-[16px] sm:gap-[32px]">
        <div v-for="(gallery, index) in galleryAll.slice(0, galleryLength)" :key="index" class="gallery-item">
          <img :src="gallery.image" :alt="gallery.image_alt" class="w-full h-full object-cover">
        </div>
      </div>
      <div v-show="isButtonSeeMore" class="pt-[68px]">
        <div class="inline-flex items-center justify-center min-w-[240px] min-h-[50px] px-[72px] py-[13px] rounded-[100px] border border-main cursor-pointer" @click="handleSeeMore">
          <span v-if="!isLoading">
            {{ block.button.text }}
          </span>
          <div v-else class="loading-dots">
            <div class="loading-dots--dot" />
            <div class="loading-dots--dot" />
            <div class="loading-dots--dot" />
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

const props = defineProps<Props>()
const GALLERY_PER_PAGE = 12
const isLoading = ref(false)
const galleryLength = ref(GALLERY_PER_PAGE)
const galleryAll = ref(props.block.gallery)
const isButtonSeeMore = ref(galleryLength.value < props.block.gallery.length)

const handleSeeMore = async () => {
  isLoading.value = true
  await new Promise((resolve: any) => setTimeout(resolve, 1000))
  galleryLength.value += GALLERY_PER_PAGE
  isButtonSeeMore.value = galleryLength.value < props.block.gallery.length
  isLoading.value = false
}

</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .gallery-item {
    grid-row: span 1 / span 1;
    aspect-ratio: 8/5;
    &:nth-child(12n - 11),
    &:nth-child(12n - 9),
    &:nth-child(12n - 4),
    &:nth-child(12n - 2) {
      grid-row: span 2 / span 2;
      aspect-ratio: 8/11;
    }
  }
}
@media (min-width: 640px) and (max-width: 1023px) {
  .gallery-item {
    grid-row: span 1 / span 1;
    aspect-ratio: 8/5;
    &:nth-child(9n - 8),
    &:nth-child(9n - 6),
    &:nth-child(9n - 3) {
      grid-row: span 2 / span 2;
      aspect-ratio: 8/11;
    }
  }
}
@media (max-width: 640px) {
  .gallery-item {
    aspect-ratio: 1/1;
    &:nth-child(3n - 2) {
      aspect-ratio: 179/88;
      grid-column: span 2 / span 2;
    }
  }
}
</style>
