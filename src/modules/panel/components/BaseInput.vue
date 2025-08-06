<template>
  <div class="flex flex-col w-full">
    <label v-if="props.title" for="" class="text-white text-lg pt-1">{{ props.title }}</label>
    <input :type="props.types" class="p-3 rounded-md w-full text-lg" :placeholder="props.placeholder" id="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
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
})
console.log(props.placeholder)
</script>

<style lang="scss" scoped></style>
