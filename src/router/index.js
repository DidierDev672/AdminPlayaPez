import { createRouter, createWebHistory } from "vue-router";
import DetailOrder from "../components/DetailOrder.vue";
import DetailAskPond from "../views/DetailAskPond.vue";

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
    {
      path: "/products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/pond",
      component: () => import("../views/Pond.vue"),
    },
    {
      path: "/ask-pond",
      component: () => import("../views/PondAsk.vue"),
    },
    {
      path: "/food-pond",
      component: () => import("../views/FoodPond.vue"),
    },
    {
      path: "/entry-product",
      component: () => import("../views/EntryProduct.vue"),
    },
    {
      path: "/query-product",
      component: () => import("../views/QueryProduct.vue"),
    },
    {
      path: "/orders/:code_buy",
      name: "detail-order",
      props: true,
      component: DetailOrder,
    },
    {
      path: "/ask-pond:code_ask",
      name: "detail-ask-pond",
      props: true,
      component: DetailAskPond,
    },
  ],
});

export default router;
