import { createRouter, createWebHistory } from 'vue-router'
import adminPanelRoutes from '@/modules/panel/my-dashboard/router'
import DashboardView from '@/modules/panel/my-dashboard/views/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminPanelRoutes,
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {
        layout: 'admin'
      }
    },
  ],
})

export default router
