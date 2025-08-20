import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from 'src/modules/panel/my-dashboard/router'
import projectRoutes from 'src/modules/panel/projects/route'
import contactsRoutes from 'src/modules/panel/contacts/route'
import skillsRoutes from 'src/modules/panel/skills/route'
import DashboardView from 'src/modules/panel/my-dashboard/views/DashboardView.vue'
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
