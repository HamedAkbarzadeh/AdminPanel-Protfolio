<template>
  <div :class="['text-[#686868] cursor-pointer flex items-center w-[85%] h-14 rounded-full hover:bg-[#E6EEFF] hover:text-blue-600 ',
    ui.isSidebarOpen() ? '' : 'w-auto'
  ]">

    <div class="ml-10 mr-10">
      <slot />
    </div>

    <p class=" text-sm font-semibold">
      <slot name="name" />
    </p>

  </div>
</template>

<script setup>

import { useUiStore } from '@/stores/ui/ui-store';

const ui = useUiStore();
</script>

<style lang="scss" scoped></style>ase
