<template>
  <MainContentLayout back-path="/skills">
    <BaseForm>
      <div class="flex w-full gap-3">
        <BaseInput title="skill" type="text" placeholder="your skill..." bind="name" />
        <BaseRatingbar title="rating" />
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
import BaseRatingbar from '../../components/BaseRatingbar.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
</script>

<style lang="scss" scoped></style>
