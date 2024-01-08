<template>
  <section :id="block.id" :style="{ background: block.background, color: block.text_color }" class="pt-[45px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid sm:grid-cols-2 gap-[32px] pb-[45px]">
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
        <div class="hidden sm:flex items-center gap-[30px]">
          <h3 class="text-[32px] font-semibold leading-[38px]">
            {{ block.appointment }}
          </h3>
          <div class="w-[160px] h-[1px] bg-white" />
        </div>
      </div>
      <div>
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
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

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) { errors.push({ path: 'email', message: 'Required' }) }
  if (!state.password) { errors.push({ path: 'password', message: 'Required' }) }
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
</style>
