import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";

const Home = () => import("views/home/Home");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Category = () => import("views/category/Category");

Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/catagory",
    component: Category
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
