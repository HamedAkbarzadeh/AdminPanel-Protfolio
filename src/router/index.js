import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import adminPanelRoutes from '@/modules/Dashboard/router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminPanelRoutes,
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
