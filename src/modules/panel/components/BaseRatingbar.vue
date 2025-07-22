<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div class="flex flex-col w-full">
    <label v-if="props.title" class="text-white text-lg pt-1">{{ props.title }}</label>
    <div class="flex w-full gap-3 justify-center items-center p-3 h-full text-lg">
      <span
        v-for="index in 5"
        :key="index"
        class="cursor-pointer fa fa-star"
        :class="{ checked: index <= rating }"
        @click="setRating(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const rating = ref(0)

const setRating = (value) => {
  rating.value = value
}
</script>

<style scoped>
.checked {
  color: gold;
}
</style>
