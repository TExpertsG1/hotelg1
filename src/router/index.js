import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcomodacoesPage from "../pages/acomodacoes/AcomodacoesPage.vue";
import ReservasPages from "../pages/reservas/ReservasPages.vue";
import SobrePage from "../pages/sobre/SobrePage.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/SobrePage",
    name: "SobrePage",
    component: SobrePage,
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: AcomodacoesPage,
  },
  {
    path: "/reservas",
    name: "reservas",
    component: ReservasPages,
  },
  {
    path: "/contato/#contato",
    name: "contato",
    component: () => import("../components/StandardFooter"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
