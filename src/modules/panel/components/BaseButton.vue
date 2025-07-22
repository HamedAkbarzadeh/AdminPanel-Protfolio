<template>
  <button
    :type="props.type"
    class="w-full p-3 bg-slate-900 rounded-md hover:bg-slate-300 hover:text-slate-950 text-white font-medium"
  >
    {{ props.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})
console.log(props.placeholder)
</script>

<style lang="scss" scoped></style>
