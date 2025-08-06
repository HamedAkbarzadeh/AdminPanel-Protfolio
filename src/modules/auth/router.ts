import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";

export default [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
]
