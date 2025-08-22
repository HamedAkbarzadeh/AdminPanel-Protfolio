<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <Field as="select" :validate-on-input="true" :name="name" class="p-3 rounded-md w-full text-lg">
      <slot name="option" />
    </Field>
    <ErrorMessage :name="name" class="text-red-400 font-bold text-xs pt-2" />
    <!-- <select name="" id="" class="p-3 rounded-md w-full text-lg">
      <slot name="option" />
    </select> -->
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';


const props = withDefaults(defineProps<{
  label?: string,
  labelColor?: string,
  name: string,
}>(), {
  label: '',
  labelColor: 'text-slate-900'
})
</script>

<style lang="scss" scoped></style>
