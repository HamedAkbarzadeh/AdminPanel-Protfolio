<template>
  <MainContentLayout back-path="/dashboard" create-path="/contacts/create">
    <BaseTable />
  </MainContentLayout>
</template>

<script setup>
import BaseTable from '../../components/BaseTable.vue'
import MainContentLayout from '../../layouts/main-content.layout.vue'
</script>

<style lang="scss" scoped></style>
