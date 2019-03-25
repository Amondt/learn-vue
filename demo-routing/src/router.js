import Vue from "vue";
import Router from "vue-router";
import Bonjour from "./components/Bonjour.vue";
import AuRevoir from "./components/AuRevoir.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/bonjour",
      name: "bonjour",
      component: Bonjour
    },
    {
      path: "/aurevoir",
      name: "aurevoir",
      component: AuRevoir
    }
  ]
});
