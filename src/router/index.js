import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/modules/panel/my-dashboard/router'
import projectRoutes from '@/modules/panel/projects/route'
import contactsRoutes from '@/modules/panel/contacts/route'
import skillsRoutes from '@/modules/panel/skills/route'
import DashboardView from '@/modules/panel/my-dashboard/views/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...dashboardRoutes,
    ...projectRoutes,
    ...contactsRoutes,
    ...skillsRoutes,
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
