import ProjectsView from "./views/ProjectView.vue";
import CreateProjectView from "./views/CreateProjectView.vue";

export default [
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projects/create',
    name: 'projects.create',
    component: CreateProjectView,
  },
]
