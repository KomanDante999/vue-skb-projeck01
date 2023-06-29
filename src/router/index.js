import Vue from "vue";
import VueRouter from "vue-router";
import MinePage from "@/pages/MinePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import OrderPage from "@/pages/OrderPage";


Vue.use(VueRouter);

const routes = [
  {name: 'main', component: MinePage, path: '/'},
  {name: 'product', component: ProductPage, path: '/product/:id'},
  {name: 'cart', component: CartPage, path: '/cart/'},
  {name: 'order', component: OrderPage, path: '/order/'},
  {name: 'notFound', component: NotFoundPage, path: '*'},
]
const router = new VueRouter({routes});

export default router;