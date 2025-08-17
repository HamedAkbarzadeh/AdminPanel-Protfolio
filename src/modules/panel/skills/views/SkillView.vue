<template>
  <MainContentLayout back-path="/dashboard" create-path="/skills/create">
    <BaseTable :rows="skillList" :columns="['name', 'rait', 'status', 'setting']">
      <template #row-template="{ row }">
        <BaseTd>{{ row.name }}</BaseTd>
        <BaseTd>
          <BaseRating :can-change="false" v-model="row.rait" />
        </BaseTd>
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
import { SkillServiceApi } from 'src/repository/api/skill/skill.service';
import { SkillDto } from '../types/skill.type';
import BaseStatus from '../../components/BaseStatus.vue';
import BaseSettingOperation from '../../components/BaseSettingOperation.vue';
import BaseTd from '../../components/BaseTd.vue';
import BaseRating from '../../components/BaseRating.vue';

const skillList = reactive<Array<SkillDto>>([])

const fetchData = async () => {
  const [err, resp] = await SkillServiceApi.get()

  if (err) {
    console.error("error : ", err.message);
    return;
  }

  resp.data.forEach((item: SkillDto) => {
    skillList.push({
      name: item.name,
      rait: item.rait,
      status: item.status
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
