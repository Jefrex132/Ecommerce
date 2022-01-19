import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import About from '../views/About.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Account from '../views/Account.vue'
import LostPassword from '../views/LostPassword.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/account/lostPassword',
    name: 'LostPassword',
    component: LostPassword
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
