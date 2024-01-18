<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const props = defineProps({
  modelValue: {
    type: Date,
    default: null
  }
})

const emit = defineEmits(['update:model-value', 'close'])

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:model-value', value)
    emit('close')
  }
})

const attrs = [{
  key: 'today',
  highlight: {
    color: 'black',
    class: '!bg-black dark:!bg-black'
  },
  dates: new Date()
}]
</script>

<template>
  <VCalendarDatePicker
    v-model="date"
    :attributes="attrs"
    :is-dark="isDark"
    title-position="left"
    trim-weeks
    :first-day-of-week="2"
  />
</template>

<style lang="scss" scoped>
// h1 {
//   color: red;
// }
</style>
