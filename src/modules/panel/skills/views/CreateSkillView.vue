<template>
  <MainContentLayout back-path="/skills">
    <BaseForm @submit="onSubmit">
      <div class="col-span-1">
        <BaseInput label="skill" type="text" placeholder="your skill..." bind="name" />
      </div>
      <div class="col-span-1">
        <BaseRating label="skill rait" v-model="rating" />
      </div>

      <div class="col-span-2">
        <BaseButton title="Submit" class="text-center" />
      </div>
    </BaseForm>
  </MainContentLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../../components/BaseButton.vue'
import BaseForm from '../../components/BaseForm.vue'
import BaseInput from '../../components/BaseInput.vue'
import BaseRating from '../../components/BaseRating.vue'
import BaseRatingbar from '../../components/BaseRatingbar.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'

const rating = ref<number>(0)

function onSubmit() {

}
</script>

<style lang="scss" scoped></style>
