<template>
  <transition name="service">
    <div v-if="isVisible" class="z-[3] pt-[70px] pb-[50px] text-white bg-anchor absolute top-[134px] left-0 h-[calc(100%-134px)] w-full">
      <div class="container">
        <div class="mb-[18px]">
          <span class="inline-flex items-center gap-[10px] cursor-pointer" @click="hide">
            <img src="/images/arrow-left-white.png" alt="icon">
            BACK
          </span>
        </div>
        <div class="grid grid-cols-[1fr_544px] gap-[96px]">
          <div>
            <div class="mb-[20px]">
              <span class="section_label !text-black !bg-secondary">
                {{ serviceItem.name }}
              </span>
            </div>
            <div class="heading-2">
              {{ serviceItem.name }}
            </div>
            <div class="section_title_line !bg-secondary ml-[32px] my-[20px]" />
            <div>
              <span class="heading-3 mb-[20px] inline-block">Service</span>
              <div class="space-y-[10px]">
                <div v-for="(service_detail, index) in serviceItem.service_detail" :key="index" class="flex items-center justify-between">
                  <span>
                    {{ service_detail.service_name }}
                  </span>
                  <span>
                    {{ service_detail.price }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="section-our-staff service">
            <swiper
              :modules="modules"
              :navigation="true"
              :slides-per-view="1.5"
              :space-between="15"
              :speed="1500"
            >
              <swiper-slide v-for="(service_detail, index) in serviceItem.service_detail" :key="index">
                <div>
                  <img :src="service_detail.image" :alt="service_detail.image_alt" class="w-full h-full">
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation];
const isVisible = ref(false)
const serviceItem = ref<any>()
const show = (service: any) => {
  isVisible.value = true
  serviceItem.value = service
}
const hide = () => {
  isVisible.value = false
}

defineExpose({ show })
</script>

<style lang="scss" scoped>
.service-enter-active {
  transition: all 0.5s ease-out;
  position: absolute;
}

.service-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  transform: translateY(0px);
}

.service-enter-from,
.service-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

</style>

<style lang="scss">
.section-our-staff {
  &.service {
    .swiper-wrapper {
      .swiper-slide {
        & > div {
          &::after {
            background-color: rgba(#000, 0.5);
          }
        }
        &.swiper-slide-active {
          & > div {
            &::after {
              background-color: transparent;
            }
          }
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        background: url('/images/arrow-right-bg-white-circle.png') no-repeat center center;
      }
    }
  }
}
</style>
