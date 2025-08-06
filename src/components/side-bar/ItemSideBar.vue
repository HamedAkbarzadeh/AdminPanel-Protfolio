<template>
  <RouterLink :to="props.link" :class="['text-[#686868] cursor-pointer flex items-center w-[85%] h-14 rounded-full hover:bg-[#E6EEFF] hover:text-blue-600 ',
    ui.isSidebarOpen() ? '' : 'w-auto'
  ]">

    <div class="ml-10 mr-10">
      <slot />
    </div>

    <p class=" text-sm font-semibold">
      <slot name="name" />
    </p>

  </RouterLink>
</template>

<script setup lang="ts">

import { useUiStore } from '@/stores/ui/ui-store';
import { RouterLink } from 'vue-router';

const ui = useUiStore();

const props = defineProps({
  link: {
    type: String,
    default: '/'
  }
})
</script>

<style lang="scss" scoped></style>ase
