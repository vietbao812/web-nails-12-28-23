<template>
  <section :id="block.id" :style="{ marginTop: `-${marginTop}px` }" class="pt-[218px] pb-[134px] text-white bg-main h-full relative" :data-cms-bind="dataBinding">
    <div class="container">
      <div>
        <div v-for="(service, index) in listService" :key="index" class="list_service flex flex-col items-center justify-center">
          <div class="heading-1 text-center py-[44px] cursor-pointer relative group service_name inline" @click="handleService(service)">
            <span class="z-[2] relative text-custom">
              {{ service.name }}
            </span>
            <div class="absolute ease-in duration-300 w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white z-0">
              {{ service.name }}
            </div>
            <img :src="service.banner" :alt="service.banner_alt" class="aspect-[1/1] w-[150px] object-cover absolute origin-center group-hover:scale-100 scale-0 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full z-[1]">
          </div>
        </div>
      </div>
    </div>
    <ServiceItem ref="serviceItem" />
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

const props = defineProps<Props>()
const serviceItem = ref()
const listService = ref(props.block.service.map((item: any) => {
  return {
    ...item,
    active: false
  }
}))

const marginTop = ref<number>(218)
onMounted(() => {
  marginTop.value = document.querySelector('.header')?.clientHeight || marginTop.value
})

const handleService = (service: any) => {
  listService.value.forEach((item: any) => {
    item.active = false
  })
  service.active = true
  serviceItem.value?.show(service)
}

</script>

<style lang="scss" scoped>

.list_service {
  .service_name {
    &:hover {
      .text-custom {
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
      }
      img {
        opacity: 1;
      }
    }
    .text-custom {
      transition: all 0.3s ease;
    }
    & > div {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
    }
    img {
      opacity: 0;
      transition: all 0.5s ease;
    }
  }
}

</style>

<style lang="scss">

// .section-our-staff {
// }

</style>
