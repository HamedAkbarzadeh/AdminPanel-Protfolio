<template>
  <MainContentLayout back-path="/skills">
    <BaseForm :schema="simpleSchema" @submit="onSubmit">
      <div class="col-span-1">
        <BaseInput name="skill" label="skill" type="text" placeholder="your skill..." />
      </div>
      <div class="col-span-1">
        <BaseRating label="skill rait" v-model="rating" />
      </div>

      <div class="col-span-2">
        <BaseButton type="submit" title="Submit" class="text-center" />
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
import MainContentLayout from '../../layouts/main-content.layout.vue'
import * as yup from 'yup';
import { SkillReq } from '../types/skill.type'
import { SkillServiceApi } from 'src/repository/api/skill/skill.service'
import { useRouter } from 'vue-router'

const simpleSchema = yup.object({
  skill: yup.string().required().min(2)
})


const rating = ref<number>(1)
const router = useRouter()

const onSubmit = async (values: SkillReq) => {
  const [err, resp] = await SkillServiceApi.post({ name: values.skill, rait: rating.value })
  if (err) return
  router.push({
    name: 'skills'
  })
}
</script>

<style lang="scss" scoped></style>
