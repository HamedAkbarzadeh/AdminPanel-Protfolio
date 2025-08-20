<template>
  <MainContentLayout back-path="/dashboard" create-path="/contacts/create">
    <BaseTable :rows="contactList" :columns="['title', 'description', 'image', 'link', 'status', 'setting']">
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
import { ContactsDto } from '../types/contacts.type';
import BaseStatus from '../../components/BaseStatus.vue';
import BaseSettingOperation from '../../components/BaseSettingOperation.vue';
import BaseTd from '../../components/BaseTd.vue';
import { ContactsServiceApi } from 'src/repository/api/content/content.service';

const contactList = reactive<Array<ContactsDto>>([])

const fetchData = async () => {
  const [err, resp] = await ContactsServiceApi.get()

  if (err) {
    console.error("error : ", err.message);
    return;
  }

  resp.data.forEach((item: ContactsDto) => {
    contactList.push({
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
