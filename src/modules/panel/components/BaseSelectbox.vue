<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <select name="" id="" class="p-3 rounded-md w-full text-lg">
      <slot name="option" />
    </select>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  label?: string,
  labelColor?: string
}>(), {
  label: '',
  labelColor: 'text-slate-900'
})
</script>

<style lang="scss" scoped></style>
