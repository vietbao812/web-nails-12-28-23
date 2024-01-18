<template>
  <section :id="block.id" :style="{ background: block.background, color: block.text_color }" class=" pt-[45px]" :data-cms-bind="dataBinding">
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
      <div class="text-secondary grid sm:grid-cols-2 grid-cols-1 gap-8 h-full">
        <div class="flex flex-col gap-[16px]">
          <h4 class="sm:hidden block font-medium text-xl mb-2 uppercase">
            {{ block.booking.title_mobile }}
          </h4>
          <div class="w-full sm:flex-row flex flex-col gap-[12px] sm:gap-[16px] h-[60px]">
            <div class="sm:w-1/2 w-full h-full">
              <UPopover :popper="{ placement: 'bottom-start' }" class="custom_date overflow-hidden">
                <UButton icon="i-heroicons-calendar-days-20-solid" :label="label" />
                <template #panel="{ closeDatePicker }">
                  <LazyDatePicker v-model="date" @close="closeDatePicker" />
                </template>
              </UPopover>
            </div>
            <USelectMenu
              v-model="staff"
              :options="staffChecked"
              value-attribute="label"
              option-attribute="label"
              placeholder="Select staff ( Optional )"
              class="custom_form sm:w-1/2 w-full"
            />
          </div>
          <div class="w-full h-[60px] sm:mt-0 mt-[60px]">
            <USelectMenu
              v-model="service"
              :options="services"
              value-attribute="label"
              option-attribute="label"
              placeholder="Organic Lemongrass + Green Tea ($100)"
              class="custom_form h-full"
            />
          </div>
          <div
            class="flex gap-[16px] py-[18px] px-[25px] cursor-pointer"
            @click="openModalAdd = true"
          >
            <img src="/images/add-circle.png" alt="" class="object-cover">
            <span>{{ block.booking.add_service }}</span>
            <div class="lg:hidden block">
              <UModal
                v-model="openModalAdd"
                prevent-close
                class="h-full"
              >
                <UCard
                  :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800 ',
                  }"
                >
                  <div class="flex items-center justify-end">
                    <UButton
                      color="gray"
                      variant="ghost"
                      icon="i-heroicons-x-mark-20-solid"
                      class="-my-1"
                      @click="openModalAdd = false"
                    />
                  </div>
                  <div
                    class="flex flex-col gap-4 justify-center items-center pb-10"
                  >
                    <h2 class="text-anchor uppercase text-2xl">
                      {{ block.booking.add_service }}
                    </h2>
                    <form class="w-full" @submit.prevent="submitForm">
                      <div class="w-full flex flex-col gap-[12px] sm:gap-[16px] py-10">
                        <UPopover :popper="{ placement: 'bottom-start' }" class="custom_date_modal">
                          <UButton icon="i-heroicons-calendar-days-20-solid" :label="labelModal" />
                          <template #panel="{ closeDatePicker }">
                            <LazyDatePicker v-model="dateModal" @close="closeDatePicker" />
                          </template>
                        </UPopover>
                        <USelectMenu
                          v-model="staffModal"
                          :options="staffs"
                          value-attribute="label"
                          option-attribute="label"
                          placeholder="Select staff ( Optional )"
                          class="w-full text-anchor"
                        />
                        <USelectMenu
                          v-model="serviceModal"
                          :options="services"
                          value-attribute="label"
                          option-attribute="label"
                          placeholder="Organic Lemongrass + Green Tea ($100)"
                          class="h-full"
                        />
                      </div>
                      <div class="flex flex-col justify-center items-center w-full">
                        <button
                          class="cursor-pointer transition hover:opacity-90 hover:transition-all bg-anchor text-white text-center lg:w-1/3 w-full p-4 rounded-full"
                          @click="submitForm"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </UCard>
              </UModal>
            </div>
          </div>
          <div class="flex flex-col gap-[12px]">
            <div class="flex gap-[20px] justify-start items-center">
              <h4 class="text-[24px] py-2">
                {{ block.booking.label_time.morning }}
              </h4>
              <div class="h-px w-20 bg-secondary" />
            </div>
            <div class="flex gap-[8px]">
              <button
                v-for="(item, index) in block.booking.list_time_morning"
                :key="index"
                :class="{ 'active-button': activeTime === item.time }"
                class="transition hover:opacity-80 hover:bg-secondary hover:text-anchor hover:transition-all h-full border-[0.5px] text-secondary rounded-md p-[11px]"
                @click="handleButtonClick(item.time)"
              >
                {{ item.time }}
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-[12px]">
            <div class="flex gap-[20px] justify-start items-center">
              <h4 class="text-[24px] py-2">
                {{ block.booking.label_time.afternoon }}
              </h4>
              <div class="h-px w-20 bg-secondary" />
            </div>
            <div class="grid grid-cols-4 gap-[8px]">
              <button
                v-for="(item, index) in block.booking.list_time_afternoon"
                :key="index"
                :class="{ 'active-button': activeTime === item.time }"
                class="transition hover:opacity-80 hover:bg-secondary hover:text-anchor hover:transition-all h-full border-[0.5px] text-secondary rounded-md p-[11px]"
                @click="handleButtonClick(item.time)"
              >
                {{ item.time }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="loading" class="loading-dots pt-10">
          <div class="loading-dots--dot custom_dot" />
          <div class="loading-dots--dot custom_dot" />
          <div class="loading-dots--dot custom_dot" />
        </div>
        <div v-else class="flex flex-col gap-[20px]">
          <h4 class="sm:hidden block font-medium text-xl mb-2 uppercase">
            {{ block.appointment.title_mobile }}
          </h4>
          <div class="flex flex-col gap-[19px]">
            <div class="flex flex-col gap-[19px]">
              <div class="sm:flex-row flex flex-col gap-[12px]">
                <div class="rounded-full sm:bg-secondary bg-primary border-secondary border-[1px] py-[15px] px-[50px] h-[60px] sm:w-2/3 w-full">
                  <p v-if="date" class="sm:text-anchor text-secondary text-[24px] h-full whitespace-nowrap overflow-hidden flex justify-center items-center">
                    {{ label }}
                  </p>
                </div>
                <div v-if="activeTime" class="rounded-full bg-secondary p-[10px] h-full w-1/3">
                  <p class="text-anchor text-[24px] h-full whitespace-nowrap overflow-hidden flex justify-center items-center">
                    {{ activeTime }}
                  </p>
                </div>
              </div>
              <div class="w-full">
                <p
                  v-if="selectedStaff"
                  class="text-secondary text-[24px] h-full"
                >
                  {{ selectedStaff.label }}
                </p>
              </div>
              <div class="w-full">
                <p v-if="selectedService" class="text-secondary text-[20px] h-full">
                  {{ selectedService.label }}
                </p>
              </div>
              <div class="w-full">
                <div class="relative flex justify-center w-1/4 text-center transition hover:opacity-80 hover:transition-all border-[0.5px] text-secondary rounded-full sm:py-[19px] py-[10px] text-[24px]" @click="openModalListAdd = true">
                  <div class="absolute w-[40px] h-[30px] bg-secondary top-[-8px] right-0 rounded-full text-anchor flex justify-center items-center text-[24px]">
                    +{{ selectedServices?.length || 0 }}
                  </div>
                  Service
                </div>
                <div class="lg:hidden block">
                  <UModal
                    v-model="openModalListAdd"
                    prevent-close
                    class="h-full"
                  >
                    <UCard
                      :ui="{
                        ring: '',
                        divide: 'divide-y divide-gray-100 dark:divide-gray-800 ',
                      }"
                    >
                      <div class="flex items-center justify-end">
                        <UButton
                          color="gray"
                          variant="ghost"
                          icon="i-heroicons-x-mark-20-solid"
                          class="-my-1"
                          @click="openModalListAdd = false"
                        />
                      </div>
                      <div
                        class="flex flex-col gap-4 justify-center items-center pb-10"
                      >
                        <h2 class="text-anchor uppercase text-2xl">
                          List selected services
                        </h2>
                        <div class="w-full flex flex-col gap-6">
                          <div v-for="(selectedData, index) in selectedServices" :key="index" class="flex gap-6 justify-between items-center w-full">
                            <div class="flex flex-col gap-2 w-full">
                              <p class="font-light text-[16px]">
                                <span class="font-medium text-[18px]">Date:</span>
                                {{ selectedData?.date }}
                              </p>
                              <p class="font-light text-[16px]">
                                <span class="font-medium text-[18px]">Staff:</span>
                                {{ selectedData.staff }}
                              </p>
                              <p class="font-light text-[16px]">
                                <span class="font-medium text-[18px]">Service:</span>
                                {{ selectedData.service }}
                              </p>
                            </div>
                            <div>
                              <img src="/images/del.png" alt="" class="object-cover w-[30px] h-[30px] cursor-pointer" @click="removeSelectedService(index)">
                            </div>
                          </div>
                        </div>
                      </div>
                    </UCard>
                  </UModal>
                </div>
              </div>
            </div>
            <div class="flex flex-col h-full w-full gap-[19px] text-xs">
              <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup name="name">
                  <UInput v-model="state.name" variant="none" placeholder="Your Name ( Required )" class="custom_input rounded-full" />
                </UFormGroup>
                <UFormGroup name="phone">
                  <UInput v-model="state.phone" variant="none" type="phone" placeholder="Your Phone ( Required )" class="custom_input rounded-full" />
                </UFormGroup>
                <UFormGroup name="note">
                  <UTextarea v-model="state.note" variant="none" type="note" placeholder="Note ( Optional ) (Max length 200 character)" class="custom_input rounded-[30px]" />
                </UFormGroup>
                <UButton type="submit" class="flex justify-center w-full text-center transition hover:opacity-80 hover:bg-secondary hover:text-anchor hover:transition-all border-[0.5px] text-secondary rounded-full sm:py-[19px] py-[10px]">
                  {{ block.appointment.button }}
                </UButton>
              </UForm>
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
const openModalAdd = ref(false);
const openModalListAdd = ref(false);

const date = ref(new Date());

const label = computed(() => date.value.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }));

// const closeDatePicker = (selectedDate:any) => {
//   date.value = selectedDate;
// };

const staffs = [{
  id: 1,
  label: 'Emily Martinez'
}, {
  id: 2,
  label: 'Stephanie Williams'
}, {
  id: 3,
  label: 'Jack Harris'
}]

const staff = ref();
const staffChecked = ref(
  staffs.map((e: any) => {
    return { ...e, active: false };
  })
);
const selectedStaff = computed(() => {
  return staffChecked.value.find((item: any) => item.label === staff.value);
});

const services = [{
  id: 1,
  label: 'Organic Lemongrass + Green Tea ($200)'
}, {
  id: 2,
  label: 'Organic Lemongrass + Green Tea ($300)'
}, {
  id: 3,
  label: 'Organic Lemongrass + Green Tea ($400)'
}, {
  id: 4,
  label: 'Organic Lemongrass + Green Tea ($400)'
}]

const service = ref();

const serviceChecked = ref(
  services.map((e: any) => {
    return { ...e, active: false };
  })
);
const selectedService = computed(() => {
  return serviceChecked.value.find((item: any) => item.label === service.value);
});

const activeTime = ref();
const handleButtonClick = (selectedTime:AnalyserNode) => {
  activeTime.value = selectedTime;
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
const a = ref()
function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  a.value = event
}

const dateModal = ref(new Date());
const labelModal = computed(() => dateModal.value?.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }));
const staffModal = ref();
const serviceModal = ref();
const isDateSelected = ref(false);
const isStaffSelected = ref(false);
const isServiceSelected = ref(false);

const selectedServices: any = ref([]);

const submitForm = () => {
  isDateSelected.value = !!dateModal.value;
  isStaffSelected.value = !!staffModal.value;
  isServiceSelected.value = !!serviceModal.value;

  const allConditionsMet = isDateSelected.value && isStaffSelected.value && isServiceSelected.value;

  if (allConditionsMet) {
    const newSelectedData = {
      date: dateModal.value,
      staff: staffModal.value,
      service: serviceModal.value
    };
    selectedServices.value.push(newSelectedData);
    openModalAdd.value = false;
    dateModal.value = new Date();
    staffModal.value = '';
    serviceModal.value = '';
    isDateSelected.value = false;
    isStaffSelected.value = false;
    isServiceSelected.value = false;
  }
};

const removeSelectedService = (index:any) => {
  selectedServices.value.splice(index, 1);
};
const loading = ref(false);

watch([selectedService, serviceChecked, selectedStaff, staffChecked, label, activeTime], async () => {
  loading.value = true;

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});

</script>

<style lang="scss">
.custom_form {
  .inline-flex{
    color: #fff;
    background: rgba(255, 255, 255, 0.10);
    border-radius: 100px;
    height: 100%;
    .truncate {
      margin: 10px 0;
      margin-left: 11.5px;
    }
    .pointer-events-none {
      margin-right: 11.5px;
    }
  }

}
.custom_date_modal {
  .inline-flex{
    color: #000 !important;
    width: 100%;
    border-radius: 0.375rem;
  }
}
</style>

<style lang="scss" scoped>
// .button-bottom {
//   &::after,
//   &::before {
//     background-color: var(--color-anchor);
//   }
// }
.custom_dot {
  background-color: var(--color-secondary);
}
.custom_input {
    color: rgba(0, 0, 0, 0.20);
    background: #FFF;
    padding: 10px 11.5px;
  }
.custom_date{
    color: #fff;
    background: rgba(255, 255, 255, 0.10);
    padding: 10px 11.5px;
    border-radius: 100px;
    border: 1px solid #fff;
}
.active-button {
  background-color: white;
  color: #000;
}
@media screen and (min-width: 640px) {
  .custom_input {
    color: rgba(255, 255, 255, 0.20);
    background: rgba(255, 255, 255, 0.10);
  }
}
</style>
