<template>
  <div :class="['',
    ui.isSidebarOpen() ? 'flex items-center justify-between px-7 w-full' : 'w-full'
  ]">
    <!-- //logo// -->
    <div v-if="ui.isSidebarOpen()" class="w-32">
      <img src="../../assets/logo.png" alt="">
    </div>
    <!-- //hamber icon// -->
    <div :class="['cursor-pointer ',
      ui.isSidebarOpen() ? '' : 'flex justify-center items-center'
    ]" @click="ui.toggleSideBar()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/ui/ui-store';

const ui = useUiStore();

</script>

<style lang="scss" scoped></style>
