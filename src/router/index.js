import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Foods from "../views/Foods.vue";
import FoodDetails from "../views/FoodDetails.vue";
import Keranjang from "../views/Keranjang.vue";
import PesananSukses from "../views/PesananSukses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "FoodsView",
    component: Foods,
  },
  {
    path: "/foods/:id",
    name: "FoodDetails",
    component: FoodDetails,
  },
  {
    path: "/keranjang",
    name: "KeranjangView",
    component: Keranjang,
  },
  {
    path: "/pesanan-sukses",
    name: "PesananSukses",
    component: PesananSukses,
  },
];

const router = new VueRouter({
  base: "/kuliner/",
  routes,
});

export default router;
