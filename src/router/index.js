import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/awards",
    name: "Награды",
    meta: {
      title: "Награды",
      layout: "main-layout",
    },
    component: () => import("@/pages/AwardsPage.vue"),
  },
  {
    path: "/achievements",
    name: "Достижения",
    meta: {
      title: "Достижения",
      layout: "main-layout",
    },
    component: () => import("@/pages/AchievementsPage.vue"),
  },
  {
    path: "/info",
    name: "Информация",
    meta: {
      title: "Информация",
      layout: "main-layout",
    },
    component: () => import("@/pages/InfoPage.vue"),
  },

  {
    path: "/",
    name: "Main",
    meta: {
      title: "MainPage",
      layout: "main-layout",
    },
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Вход",
      layout: "auth-layout",
    },
    component: () => import("@/pages/LoginPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {
      title: "Регистрация",
      layout: "auth-layout",
    },
    component: () => import("@/pages/RegistrationPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage;
  if (accessToken || to.name === "login" || to.name === "registration") {
    next();
  } else {
    next("/login");
  }
});

export default router;
