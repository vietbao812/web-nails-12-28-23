<template>
  <footer :id="footerData.id" :style="{ background: footerData.background }" class="text-white relative">
    <div class="container">
      <div class="border-t border-white py-[36px] text-center text-[14px]">
        {{ footerData.copy_right }}
      </div>
    </div>
    <div v-show="isShowButtonToTop" class="fixed right-[33px] bottom-[141px] z-50  gap-[10px] cursor-pointer" @click="scrollToTop()">
      <img :src="footerData.buttonToTop.icon" alt="icon to top" class="mx-auto mb-[10px]">
      <span class="text-black">{{ footerData.buttonToTop.label }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';

const isShowButtonToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      isShowButtonToTop.value = true
    } else {
      isShowButtonToTop.value = false
    }
  })
})

</script>

<style lang="scss">
footer {
  .contact {
    // img {
    //   fill: #fff;
    // }
  }
}
</style>
