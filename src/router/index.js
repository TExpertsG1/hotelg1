import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AcomodacoesPage from "../pages/acomodacoes/AcomodacoesPage.vue";
import ReservasPages from "../pages/reservas/ReservasPages.vue";
import SobrePage from "../pages/sobre/SobrePage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
        path: "/sobre",
        name: "sobre",
        component: SobrePage,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
