import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import ClubeLista from "../views/ClubeLista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/classificacao",
    name: "ClubeLista",
    component: ClubeLista,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
