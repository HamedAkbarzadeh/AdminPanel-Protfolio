<template>
  <Form :validation-schema="schema" class="grid grid-cols-2 gap-4 bg-slate-100 rounded-md p-10 w-full"
    @submit="onSubmit">
    <slot />
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { SkillReq } from '../skills/types/skill.type';

defineProps<{ schema: object }>()

const emit = defineEmits<{
  (e: 'submit', values: object): void
}>()

function onSubmit(values: SkillReq) {
  emit('submit', values)
}
</script>

<style lang="scss" scoped></style>
