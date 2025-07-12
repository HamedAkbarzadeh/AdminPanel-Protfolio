import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore('ui', () => {
  const isSideBarOpen = ref(true);

  function toggleSideBar() {
    isSideBarOpen.value = !isSideBarOpen.value;
  }
  function closeSideBar() {
    isSideBarOpen.value = false;
  }
  function openSideBar() {
    isSideBarOpen.value = true;
  }
  function isSidebarOpen() {
    console.log("HI");

    return isSideBarOpen.value
  }
  return { toggleSideBar, closeSideBar, openSideBar, isSidebarOpen }
})
