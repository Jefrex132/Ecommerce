import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

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
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  /*
  {
    path: '/producto/:codigo/:localidad',
    name: 'Product',
    component: Product,
    meta: {
      libre: true
    }
  },
  {
    path: '/categoria-producto/:type/:brandName',
    name: '',
    component: Product,
    meta: {
      libre: true
    }
  }
  */
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
