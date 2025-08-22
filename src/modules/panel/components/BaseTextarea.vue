<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <Field as="textarea" :validate-on-input="true" :rows="rows" :cols="cols" :name="name"
      class="p-3 rounded-md w-full text-lg" :placeholder="placeholder" />
    <ErrorMessage :name="name" class="text-red-400 font-bold text-xs pt-2" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';

const props = withDefaults(defineProps<{ labelColor?: string, name: string, label?: string, placeholder?: string, modelValue?: string, rows?: string, cols?: string }>(), {
  label: '',
  modelValue: '',
  placeholder: '',
  rows: '3',
  cols: '20',
  labelColor: 'text-slate-900'
})
</script>

<style lang="scss" scoped></style>
