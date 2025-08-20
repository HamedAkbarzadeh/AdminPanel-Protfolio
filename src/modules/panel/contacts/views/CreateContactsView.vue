<template>
  <MainContentLayout back-path="/skills">
    <BaseForm :schema="simpleSchema" @submit="onSubmit">
      <div class="col-span-1">
        <BaseInput name="title" label="title" type="text" placeholder="your title..." />
      </div>

      <div class="col-span-1">
        <BaseInputFile label="image"></BaseInputFile>
      </div>
      
      <div class="col-span-2">
        <BaseTextarea label="description" />
      </div>

      <div class="col-span-1">
        <BaseInput name="link" label="link" type="text" placeholder="your link..." />
      </div>

      <div class="col-span-1">
        <BaseSelectbox label="status">
          <template #option>
            <option value="ACTIVE">active</option>
            <option value="INACTIVE">in active</option>
          </template>
        </BaseSelectBox>
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
import { ContactsReq } from '../types/contacts.type'
import { useRouter } from 'vue-router'
import { SkillReq } from '../../skills/types/skill.type'
import { ContactsServiceApi } from 'src/repository/api/content/content.service'
import BaseTextarea from '../../components/BaseTextarea.vue'
import BaseInputFile from '../../components/BaseInputFile.vue'
import BaseSelectbox from '../../components/BaseSelectbox.vue'

const simpleSchema = yup.object({
  skill: yup.string().required().min(2)
})


const rating = ref<number>(1)
const router = useRouter()

const onSubmit = async (values: SkillReq) => {
  const [err, resp] = await ContactsServiceApi.post({ name: values.skill, rait: rating.value })
  if (err) return
  router.push({
    name: 'skills'
  })
}
</script>

<style lang="scss" scoped></style>
