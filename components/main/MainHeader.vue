<template>
  <header class="header relative z-[9999] py-[33px]">
    <div class="container flex items-center justify-center">
      <nav class="flex items-center w-full justify-between gap-[50px] py-[10px] pr-[10px] pl-[30px] bg-black rounded-full">
        <div>
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="Logo">
          </NuxtLink>
        </div>
        <ul class="flex items-center gap-[10px]">
          <li v-for="(nav, index) in headerData.nav" :key="index">
            <NuxtLink :to="nav.link">
              {{ nav.text }}
            </NuxtLink>
          </li>
          <div>
            <NuxtLink :to="headerData.booking.url" class="custom-btn">
              <span>
                {{ headerData.booking.text }}
              </span>
              <img src="/images/arrow-right-bg-black.png" alt="">
            </NuxtLink>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import headerData from '@/data/header.json';

</script>

<style lang="scss" scoped>
header.header {
  nav {
    li {
      padding: 12px 27px 13px 28px;
      a {
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
</style>
