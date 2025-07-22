<template>
  <aside
    :class="[
      'py-4 bg-white h-screen custom flex flex-col items-center z-50',
      ui.isSidebarOpen() ? 'sidebar--open' : 'sidebar--closed',
    ]"
  >
    <HeaderSideBar />
    <UserInfoSideBar v-if="ui.isSidebarOpen()" />
    <div class="h-full w-full mt-5 flex flex-col gap-4 items-center">
      <ItemSideBar
        link="/dashboard"
        @click="handelActive(0)"
        :class="{ 'bg-[#E6EEFF] text-blue-600': activeSelect[0].value }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <template #name v-if="ui.isSidebarOpen()"> Dashboard </template>
      </ItemSideBar>

      <ItemSideBar
        link="/projects"
        @click="handelActive(1)"
        :class="{ 'bg-[#E6EEFF] text-blue-600': activeSelect[1].value }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>

        <template #name v-if="ui.isSidebarOpen()"> Project </template>
      </ItemSideBar>

      <ItemSideBar
        link="/contacts"
        @click="handelActive(2)"
        :class="{ 'bg-[#E6EEFF] text-blue-600': activeSelect[2].value }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>

        <template #name v-if="ui.isSidebarOpen()"> Contacts </template>
      </ItemSideBar>

      <ItemSideBar
        link="/skills"
        @click="handelActive(3)"
        :class="{ 'bg-[#E6EEFF] text-blue-600': activeSelect[3].value }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>

        <template #name v-if="ui.isSidebarOpen()"> Skills </template>
      </ItemSideBar>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import HeaderSideBar from './HeaderSideBar.vue'
import ItemSideBar from './ItemSideBar.vue'
import UserInfoSideBar from './UserInfoSideBar.vue'

import { useUiStore } from '@/stores/ui/ui-store'

const ui = useUiStore()
const activeSelect = Array.from({ length: 4 }, () => ref(false))

const handelActive = (index) => {
  activeSelect[index].value = !activeSelect[index].value

  for (let i = 0; i <= 4; i++) {
    console.log(i)

    if (i == index) {
      continue
    }
    activeSelect[i].value = false
  }
}
</script>

<style scoped>
.sidebar--open {
  transition: 0.5s ease;
  width: 20rem;
}

.sidebar--closed {
  transition: 0.5s ease;
  width: 4rem;
}
</style>
