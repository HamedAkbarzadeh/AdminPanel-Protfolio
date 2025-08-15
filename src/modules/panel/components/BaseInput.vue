<template>
  <div class="flex flex-col w-full" v-bind="$attrs">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <Field :rules="rule" :name="name" :type="types" class="p-3 rounded-md w-full text-lg" :placeholder="placeholder"
      id="" />
    <ErrorMessage :name="name" class="text-red-400 text-sm" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';

const props = defineProps({
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
  },
  rule: {
    type: String,
    default: ''
  }
})
console.log(props.placeholder)
</script>

<style lang="scss" scoped></style>
