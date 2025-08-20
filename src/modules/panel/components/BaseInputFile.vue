<template>
  <div class="flex flex-col w-full">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <input type="file" class="w-full rounded-md bg-white p-3" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string, labelColor?: string }>(), {
  label: '',
  labelColor: 'text-slate-900'
})
</script>

<style lang="scss" scoped></style>
