<template>
  <div class="flex flex-col w-full" v-bind="$attrs">
    <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label }}</label>
    <input :type="types" class="p-3 rounded-md w-full text-lg" :placeholder="placeholder" id="" />
  </div>
</template>

<script setup lang="ts">
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
  }
})
console.log(props.placeholder)
</script>

<style lang="scss" scoped></style>
