<template>
  <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase" v-for="col in columns">{{ col }}</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="row in rows">
          <slot name="row-template" :row="row" />
        </tr>
        <!-- Add more rows here -->
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">


const props = defineProps<{ rows: any, columns: Array<string> }>()

</script>

<style lang="scss" scoped></style>
