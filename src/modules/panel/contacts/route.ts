import ContentsView from "./views/ContactsView.vue";
import CreateSkillView from "./views/CreateContactsView.vue";

export default [
  {
    path: '/contacts',
    name: 'contacts',
    component: ContentsView,
  },
  {
    path: '/contacts/create',
    name: 'contacts.create',
    component: CreateSkillView,
  },


]
