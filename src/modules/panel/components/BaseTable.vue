<template>
  <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Link</th>
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Image</th>
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Setting</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
          <td class="py-4 px-6 border-b border-gray-200 truncate">
            <a href="https://www.google.com" target="_blank">google</a>
          </td>
          <td class="py-4 px-6 border-b border-gray-200">
            <span class="h-10 w-10 rounded-full bg-red-500 flex justify-center items-center">
              <!-- <img src="" alt=""> -->
            </span>
          </td>
          <td class="py-4 px-6 border-b border-gray-200">
            <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
          </td>
          <td class="py-4 px-6 h-16 flex">
            <span class="bg-gray-50 py-1 px-2 rounded-md flex justify-center items-center w-min cursor-pointer"
              @click="showSettingDropDown = !showSettingDropDown">
              <svg v-if="!showSettingDropDown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-4 text-blue-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 text-blue-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>

            </span>
            <div class="w-32 h-full  rounded-md" v-if="showSettingDropDown">
              <ul class="w-full h-full flex justify-center cursor-pointer">
                <li class="w-full h-full hover:bg-red-100 hover:rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 text-red-700">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </li>
                <li class="w-full h-full hover:bg-yellow-100 hover:rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 text-yellow-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </li>
                <li class="w-full h-full hover:bg-blue-100 hover:rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 text-blue-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </li>
              </ul>
            </div>
          </td>
        </tr>
        <!-- Add more rows here -->
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSettingDropDown = ref(false);
</script>

<style lang="scss" scoped></style>
