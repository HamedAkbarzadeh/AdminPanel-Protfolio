import SkillView from "./views/SkillView.vue";
import CreateSkillView from "./views/CreateSkillView.vue";

export default [
  {
    path: '/skills',
    name: 'skills',
    component: SkillView,
  },
  {
    path: '/skills/create',
    name: 'skills.create',
    component: CreateSkillView,
  },


]
