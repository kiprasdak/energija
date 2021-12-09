import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Types from "@/views/Types.vue";
import Relayers from "@/views/Relayers.vue";
import Energija from "@/views/Energija.vue";
import Simuliacija from "@/views/Simuliacija.vue";

const routerHistory = createWebHistory();
const routes = [
  {
    path: "/",
    component: Index,
  },
  { path: "/types", component: Types },
  { path: "/relayers", component: Relayers },
  { path: "/energija", component: Energija },
  { path: "/simuliacija", component: Simuliacija },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
