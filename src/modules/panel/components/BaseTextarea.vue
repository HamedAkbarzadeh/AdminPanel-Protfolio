<template>
  <div class="flex flex-col w-full">
    <label v-if="props.title" for="" class="text-white text-lg pt-1">{{ props.title }}</label>
    <textarea class="p-3 rounded-md w-full text-lg" :placeholder="props.placeholder"></textarea>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
console.log(props.placeholder)
</script>

<style lang="scss" scoped></style>
