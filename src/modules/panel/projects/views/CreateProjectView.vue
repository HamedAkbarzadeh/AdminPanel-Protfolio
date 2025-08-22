<template>
  <MainContentLayout back-path="/projects">
    <BaseForm :schema="simpleSchema" @submit="onSubmit" :init-value="{ status: 'ACTIVE' }">
      <div class="col-span-1">
        <BaseInput name="title" label="title" type="text" placeholder="your title..." />
      </div>

      <div class="col-span-1">
        <BaseInputFile name="image" label="image" />
      </div>

      <div class="col-span-2">
        <BaseTextarea name="description" label="description" placeholder="enter the description" />
      </div>

      <div class="col-span-1">
        <BaseInput name="link" label="link" type="text" placeholder="your link..." />
      </div>

      <div class="col-span-1">
        <BaseSelectbox name="status" label="status">
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
import BaseButton from '../../components/BaseButton.vue'
import BaseForm from '../../components/BaseForm.vue'
import BaseInput from '../../components/BaseInput.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
import * as yup from 'yup';
import { useRouter } from 'vue-router'
import { ContactsServiceApi } from 'src/repository/api/content/content.service'
import BaseTextarea from '../../components/BaseTextarea.vue'
import BaseInputFile from '../../components/BaseInputFile.vue'
import BaseSelectbox from '../../components/BaseSelectbox.vue'
import { ProjectsReq } from '../types/project.type';
import { ProjectsServiceApi } from 'src/repository/api/project/project.service';
import { UploadsServiceApi } from 'src/repository/api/uploads/upload.service';

const simpleSchema = yup.object({
  title: yup.string().required().min(2),
  image: yup.mixed().required(),
  description: yup.string().required().min(5),
  link: yup.string().url().required(),
  status: yup.string().oneOf(['ACTIVE', 'INACTIVE']).required()
})

const router = useRouter()

const onSubmit = async (values: ProjectsReq) => {
  // Adjust the payload as needed for your API
  console.log("test", { file: values.image });
  const formData = new FormData();
  formData.append('file', values.image)
  var [err, resp] = await UploadsServiceApi.image(formData)
  if (err) return

  if (!resp?.data.success) {
    //error notif
    return
  }
  const imagePath = resp.data.url

  var [err, resp] = await ProjectsServiceApi.post({
    title: values.title,
    description: values.description,
    image: imagePath,
    link: values.link,
    status: values.status
  })
  if (err) {
    //delete image
    
    //error notif

    return
  }

  //success notif
  router.push({
    name: 'projects'
  })
}
</script>

<style lang="scss" scoped></style>
