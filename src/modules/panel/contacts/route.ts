import ContactView from "./views/ContactView.vue";
import CreateContactView from "./views/CreateContactView.vue";

export default [
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView,
  },
  {
    path: '/contacts/create',
    name: 'contacts.create',
    component: CreateContactView,
  },


]
