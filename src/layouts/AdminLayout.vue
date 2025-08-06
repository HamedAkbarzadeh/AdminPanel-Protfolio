<template>
  <div class="flex">
    <SideBar />
    <div class="flex flex-col w-full">
      <HeaderComponent />
      <div class="bg-gray-50 h-full w-full flex justify-center items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import SideBar from '@/components/side-bar/SideBar.vue';
</script>

<style lang="scss" scoped></style>
