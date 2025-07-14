import ProjectView from "../projects/views/ProjectView.vue";
import DashboardView from "./views/DashboardView.vue";

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView,
  },
]
