<template>
  <div>
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layouts/AuthLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import { SkillServiceApi } from './repository/api/skill/skill.service';

const route = useRoute();
const layout = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : AdminLayout;
})


</script>

<style lang="scss" scoped></style>
