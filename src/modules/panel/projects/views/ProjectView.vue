<template>
  <MainContentLayout back-path="/dashboard" create-path="/projects/create">
    <BaseTable :rows="projectList" :columns="['title', 'description', 'image', 'link', 'status', 'setting']">
      <template #row-template="{ row }">
        <BaseTd>{{ row.title }}</BaseTd>
        <BaseTd>{{ row.description }}</BaseTd>
        <BaseTd>
          <div class="rounded-full size-3 bg-red-500"></div>
        </BaseTd>
        <BaseTd>{{ row.link }}</BaseTd>
        <BaseStatus :isActive="row.status" />
        <BaseSettingOperation />
      </template>
    </BaseTable>
  </MainContentLayout>
</template>

<script setup lang="ts">
import BaseTable from '../../components/BaseTable.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
import { onMounted, reactive } from 'vue';
import { ProjectsDto } from '../types/project.type';
import BaseStatus from '../../components/BaseStatus.vue';
import BaseSettingOperation from '../../components/BaseSettingOperation.vue';
import BaseTd from 'src/modules/panel/components/BaseTd.vue';
import { ProjectsServiceApi } from 'src/repository/api/project/project.service';

const projectList = reactive<Array<ProjectsDto>>([])

const fetchData = async () => {
  const [err, resp] = await ProjectsServiceApi.get()

  if (err) {
    console.error("error : ", err.message);
    return;
  }

  resp.data.forEach((item: ProjectsDto) => {
    projectList.push({
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link,
      status: item.status,
    })
  });


  return {
    count: resp.data.length,
    results: resp.data
  }
}
onMounted(async () => {
  await fetchData()
})


</script>

<style lang="scss" scoped></style>
