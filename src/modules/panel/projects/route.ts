import CreateProjectView from "./views/CreateProjectView.vue";
import ProjectView from "./views/ProjectView.vue";

export default [
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView,
  },
  {
    path: '/projects/create',
    name: 'projects.create',
    component: CreateProjectView,
  },


]
