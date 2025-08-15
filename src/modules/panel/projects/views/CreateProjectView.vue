<template>
  <MainContentLayout back-path="/projects">
    <BaseForm>
      <div class="flex w-full gap-3">
        <BaseInput label="title" type="text" placeholder="title..." bind="title" />
        <BaseInput label="name" type="text" placeholder="project name..." bind="name" />
      </div>
      <div class="flex w-full gap-3">
        <BaseInputFile />
        <BaseInput label="link" type="text" placeholder="project link..." bind="link" />
      </div>
      <div class="flex w-full gap-3">
        <BaseTextarea placeholder="project description..." title="description" />
      </div>
      <div class="flex w-full gap-3">
        <BaseButton title="Submit" class="text-center" />
      </div>
    </BaseForm>
  </MainContentLayout>
</template>

<script setup lang="ts">
import BaseButton from '../../components/BaseButton.vue'
import BaseForm from '../../components/BaseForm.vue'
import BaseInput from '../../components/BaseInput.vue'
import BaseInputFile from '../../components/BaseInputFile.vue'
import BaseTextarea from '../../components/BaseTextarea.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
</script>

<style lang="scss" scoped></style>
