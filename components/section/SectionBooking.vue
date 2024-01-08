<template>
  <section :id="block.id" :style="{ background: block.background, color: block.text_color }" class="pt-[45px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="hidden sm:grid sm:grid-cols-2 gap-[32px] pb-[45px]">
        <div class="flex items-center gap-[30px]">
          <div>
            <h2 class="text-[32px] font-semibold leading-[38px]">
              {{ block.booking.title }}
            </h2>
            <p class="italic font-normal">
              {{ block.booking.subtitle }}
            </p>
          </div>
          <div class="w-[160px] h-[1px] bg-white" />
        </div>
        <div class="flex items-center gap-[30px]">
          <h3 class="text-[32px] font-semibold leading-[38px]">
            {{ block.appointment.title }}
          </h3>
          <div class="w-[160px] h-[1px] bg-white" />
        </div>
      </div>
      <div>
        <div class="text-secondary grid sm:grid-cols-2 grid-cols-1 gap-8 h-full">
          <div class="flex flex-col gap-2">
            <h4 class="sm:hidden block font-medium text-xl mb-2 uppercase">{{ block.booking.title_mobile }}</h4>
            <div class="flex gap-2">
              <input type="date" class="custom-input border-none p-2 text-secondary bg-[#0E0E0E] rounded"/>
              <USelect v-model="country" :options="countries" id="custom-select"/>
            </div>
            <div class="w-full">
              <USelect v-model="country" :options="countries" id="custom-select"/>
            </div>
            <div class="flex flex-col gap-2 text-xs">
              <div class="flex gap-4 justify-start items-center">
                <h4>{{ block.booking.label_time.morning }}</h4>
                <div class="h-px w-20 bg-secondary"></div>
              </div>
              <div class="flex gap-4">
                <button v-for="(item, index) in listTimeMorning" :key="index" class="transition hover:opacity-80 hover:bg-main hover:transition-all h-full border-[0.5px] text-secondary rounded p-2">{{ item }}</button>
              </div>
            </div>
            <div class="flex flex-col gap-2 text-xs">
              <div class="flex gap-4 justify-start items-center">
                <h4>{{ block.booking.label_time.afternoon }}</h4>
                <div class="h-px w-20 bg-secondary"></div>
              </div>
              <div class="grid grid-cols-4 gap-2">
                <button v-for="(item, index) in listTimeAfternoon" :key="index" class="transition hover:opacity-80 hover:bg-main hover:transition-all h-full border-[0.5px] text-secondary rounded p-2">{{ item }}</button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <h4 class="sm:hidden block font-medium text-xl mb-2 uppercase">{{ block.appointment.title_mobile }}</h4>
            <div class="flex flex-col gap-[19px]">
              <div class="flex flex-col gap-[19px]">
                <div class="rounded-full bg-secondary py-[15px] px-[50px] h-[60px] w-2/3">
                  <p class="text-anchor text-[24px] h-full">Thursday 10-26-2023</p>
                </div>
                <div class="w-full">
                  <p class="text-secondary text-[24px] h-full">Any person</p>
                </div>
                <div class="w-full">
                  <p class="text-secondary text-[20px] h-full">Organic Lemongrass + Green Tea ($100)</p>
                </div>
              </div>
              <div class="flex flex-col h-full w-full gap-[19px] text-xs">
                <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                  <UFormGroup name="name">
                    <UInput v-model="state.name" variant="none" placeholder="Your Name ( Required )" class="custom_input rounded-full"/>
                  </UFormGroup>
                  <UFormGroup name="phone">
                    <UInput v-model="state.phone" variant="none" type="phone" placeholder="Your Phone ( Required )" class="custom_input rounded-full"/>
                  </UFormGroup>
                  <UFormGroup name="note">
                    <UTextarea v-model="state.note" variant="none" type="note" placeholder="Note ( Optional ) (Max length 200 character)" class="custom_input rounded-[30px]"/>
                  </UFormGroup>
                  <UButton type="submit" class="flex justify-center w-full text-center transition hover:opacity-80 hover:bg-main hover:transition-all border-[0.5px] text-secondary rounded-full sm:py-[19px] py-[10px]">
                    {{block.appointment.button}}
                  </UButton>
                </UForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>()

const countries = ['Eyelash + Full Body Waxing', 'Waxing + Full Body Waxing ($100)', 'Nail Art + Full Body Waxing ($100)'];
const country = ref(countries[0]);

const listTimeMorning: string[] = [];
for (let i = 1; i < 5; i++) {
  listTimeMorning.push(`09:${i}0 am`);
}

const listTimeAfternoon: string[] = [];
for (let i = 12; i < 20; i++) {
  listTimeAfternoon.push(`${i}:00 am`);
}

const state = reactive({
  name: undefined,
  phone: undefined,
  note: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) { errors.push({ path: 'name', message: 'Required' }) }
  if (!state.phone) { errors.push({ path: 'phone', message: 'Required' }) }
  if (!state.note) { errors.push({ path: 'note', message: 'Required' }) }
  return errors
}

function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

</script>

<style lang="scss" scoped>
// .button-bottom {
//   &::after,
//   &::before {
//     background-color: var(--color-anchor);
//   }
// }
.custom_input {
    color: rgba(0, 0, 0, 0.20);
    background: #FFF;
    padding: 10px 11.5px;

  }


@media screen and (min-width: 640px) {
  .custom_input {
    color: rgba(255, 255, 255, 0.20);
    background: rgba(255, 255, 255, 0.10);
  }
}
</style>
