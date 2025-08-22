<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <Field :validate-on-input="true" :name="name" :type="types" class="p-3 rounded-md w-full text-lg" />
    <ErrorMessage :name="name" class="text-red-400 font-bold text-xs pt-2" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';

withDefaults(defineProps<{ name: string, types?: string, label?: string, labelColor?: string }>(), {
  label: '',
  labelColor: 'text-slate-900',
  name: 'file',
  types: 'file'
})
</script>

<style lang="scss" scoped></style>
