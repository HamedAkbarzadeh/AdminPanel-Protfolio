<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <textarea class="p-3 rounded-md w-full text-lg" :placeholder="placeholder">{{ modelValue }}</textarea>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ label?: string, placeholder?: string, modelValue?: string, rows?: string, cols?: string }>(), {
  label: '',
  modelValue: '',
  placeholder: '',
  rows: '3',
  cols: '20'
})
</script>

<style lang="scss" scoped></style>
