<template>
  <section :id="block.id" class="section-our-staff pt-[86px] pb-[92px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid grid-cols-[1fr_544px] gap-[96px]">
        <div>
          <div class="section_label mb-[20px]">
            {{ block.section_label }}
          </div>
          <!-- eslint-disable -->
          <div class="heading-2" v-html="block.title" />
          <div class="section_title_line my-[20px] ml-[32px]" />
          <!-- eslint-enable -->
          <div class="relative">
            <TransitionGroup name="list" tag="div">
              <div v-for="(staff, index) in block.staffs" v-show="staffActive === index" :key="index">
                <h3 class="heading-3 mb-[20px]">
                  {{ staff.name }}
                </h3>
                <div class="flex flex-wrap gap-[10px] items-center">
                  <div v-for="(service, indexService) in staff.services" :key="indexService" class="rounded-[6px] text-center px-[10px] min-w-[163px] py-[9px] border border-main">
                    {{ service.text }}
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
        <div>
          <img :src="block.staff" :alt="block.banner_alt">
          <swiper
            :modules="modules"
            :navigation="true"
            :slides-per-view="1.5"
            :space-between="15"
            :speed="1000"
            @slide-change="onSlideChange"
          >
            <swiper-slide v-for="(staff, index) in block.staffs" :key="index">
              <div>
                <img :src="staff.image" :alt="staff.image_alt" class="w-full h-full">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>()

const modules = [Navigation];
const staffActive = ref(0);
const onSlideChange = (swiper: any) => {
  staffActive.value = swiper.activeIndex;
};
</script>

<style lang="scss" scoped>
.list-enter-active {
  transition: all 1s ease-out;
  position: absolute;
}

.list-leave-active {
  transition: all 1s ease;
  position: absolute;
  transform: translateY(0px);
}

.list-enter-from,
.list-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

</style>

<style lang="scss">
// .section-our-staff {
//   &.service {
//
//   }
// }
</style>
