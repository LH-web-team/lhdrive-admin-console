import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/Index"),
      children: [
        {
          name: "Dashboard",
          path: "/",
          component: () => import("@/views/Dashboard"),
        },
        {
          name: "UserManager",
          path: "/UserManager",
          component: () => import("@/views/UserManager"),
        },
      ],
    },
  ],
});
