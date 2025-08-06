<template>
  <MainContentLayout back-path="/contacts">
    <BaseForm>
      <div class="flex w-full gap-3">
        <BaseSelectbox title="Contact" />
        <BaseInput title="link" type="text" placeholder="link..." bind="name" />
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
import BaseSelectbox from '../../components/BaseSelectbox.vue'
import BaseTextarea from '../../components/BaseTextarea.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
</script>

<style lang="scss" scoped></style>
