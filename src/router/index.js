import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/sign-up",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/orders",
      component: () => import("../views/Order.vue"),
    },
  ],
});

export default router;
