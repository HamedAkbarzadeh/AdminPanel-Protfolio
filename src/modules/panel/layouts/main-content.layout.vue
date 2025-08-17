<template>
  <div class="bg-white rounded-lg w-[95%] h-[95%] flex justify-start gap-20 items-center flex-col">
    <div class="w-full bg-blue-50 bg-gradient-to-l from-white h-14 rounded-lg rounded-b-none flex justify-between">

      <RouterLink v-if="props.backPath" :to="props.backPath"
        class="w-20 bg-blue-500 bg-gradient-to-l from-blue-50 rounded-tl-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </RouterLink>

      <router-link v-if="createPath" :to="props.createPath"
        class="w-24 h-full bg-blue-500 bg-gradient-to-r from-blue-50 flex justify-center items-center rounded-tr-md text-white font-semibold hover:bg-blue-400">
        create
      </router-link>

    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps({
  createPath: {
    type: String,
    default: null
  },
  backPath: {
    type: String,
    default: null
  }
})
</script>

<style lang="scss" scoped></style>
