<template>
  <div class="flex flex-col w-full" v-bind="$attrs">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <Field :validate-on-input="true" :name="name" :type="types" class="p-3 rounded-md w-full text-lg"
      :placeholder="placeholder" />
    <ErrorMessage :name="name" class="text-red-400 font-bold text-xs pt-2" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';

defineProps({
  label: {
    type: String,
    default: '',
  },
  types: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  labelColor: {
    type: String,
    default: 'text-slate-900'
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
