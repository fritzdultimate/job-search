import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResultView from "@/views/JobResultView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/result",
    name: "JobResults",
    component: JobResultView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
