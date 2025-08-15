<template>
  <Form class="grid grid-cols-2 gap-4 bg-slate-100 rounded-md p-10 w-full" @submit.prevent="handleSubmit">
    <slot />
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';

const emit = defineEmits<{
  (e: 'submit'): void
}>()

function handleSubmit() {
  emit('submit')
}
</script>

<style lang="scss" scoped></style>
