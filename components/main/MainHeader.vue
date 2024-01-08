<template>
  <header class="header relative z-[9999] py-[33px]">
    <div class="container flex items-center justify-center">
      <nav class="custom_header_hover flex items-center h-[64px] md:gap-0 gap-[42px] justify-between py-[10px] md:pr-[10px] md:pl-[30px] px-[30px] bg-black rounded-full">
        <div class="shrink-0">
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="Logo" class="object-cover">
          </NuxtLink>
        </div>
        <div class="custom_hover_block hidden">
          <ul class="flex items-center gap-[10px]">
            <li v-for="(nav, index) in headerData.nav" :key="index" :class="isActiveMenuItem(nav.link) ? 'active' : ''" class="custom_hover_active relative">
              <div v-if="isActiveMenuItem(nav.link)" class="absolute right-2 w-[6px] h-[6px] bg-secondary rounded-full"></div>
              <NuxtLink :to="nav.link">
                {{ nav.text }}
              </NuxtLink>
            </li>
            <div>
              <NuxtLink :to="headerData.booking.url" class="custom-btn">
                <span class="whitespace-nowrap">
                  {{ headerData.booking.text }}
                </span>
                <img src="/images/arrow-right-bg-black.png" alt="">
              </NuxtLink>
            </div>
          </ul>
        </div>
        <div class="custom_hover_hidden md:block hidden pr-[20px]">
          <img src="/images/arrow-right-bg-white.png" alt="">
        </div>
        <div class="md:hidden block">
          <img src="/images/icon-menu.png" alt="" class="mx-auto cursor-pointer" @click="isOpen = true">
        </div>
      </nav>
      <div class="lg:hidden block">
        <USlideover v-model="isOpen" class="nav-mobile">
          <div class="p-4 flex-1 relative">
            <div class="absolute top-3 right-3">
              <UIcon name="i-ri-close-line" class="w-[40px] h-[40px] cursor-pointer text-secondary" @click="isOpen = false" />
            </div>
            <div>
              <NuxtLink to="/">
                <img src="/images/logo.png" alt="Logo" class="object-cover">
              </NuxtLink>
            </div>
            <nav class="py-10">
              <ul class="flex flex-col">
                <li v-for="(nav, index) in headerData.nav" :key="index">
                  <NuxtLink
                    class="block"
                    :to="nav.link"
                  >
                    {{ nav.text }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </USlideover>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import headerData from '@/data/header.json';

const isOpen = ref(false)
const route = useRoute();

watch(() => route.fullPath, () => {
  isOpen.value = false
})
const isActiveMenuItem = (link:any) => {
  return route.path === link;
};
</script>

<style lang="scss" scoped>
header.header {
  nav {
    li {
      padding: 12px 27px 13px 28px;
      a {
        white-space: nowrap;
        font-size: 20px;
        color: #fff;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
    .custom_hover_active{
      &:hover {
        div {
          display: block;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .custom_header_hover {
    overflow: hidden;
    transition-property:width;
    transition-duration: 1s;
    // transition-delay: 100ms;
    width: 220px;
    &:hover {
      width: 100%;
      .custom_hover_hidden {
        display: none;
      }
      .custom_hover_block {
        display: flex;
      }
    }
  }
  }

}
</style>

<style lang="scss">
.nav-mobile {
  z-index: 99999;
  & > div {
    &:last-child {
      background: #000;
      max-width: 70%;
    }
  }
  ul {
    li {
      padding: 12px 5px;
      a {
        color: #FFF;
        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
  }
}
</style>
