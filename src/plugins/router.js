import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home Page",
      metaTags: [
        {
          name: "description",
          content: "Home page of Vue+Vite+Router.",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutPage.vue"),
    meta: {
      title: "About Page",
      metaTags: [
        {
          name: "description",
          content: "About page of Vue+Vite+Router.",
        },
      ],
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "Vue+Vite+Router";
  next();
});

export default router;
