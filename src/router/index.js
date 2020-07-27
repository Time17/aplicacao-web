import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Panel from '../views/Panel.vue'
import Consent from '../views/Consent.vue'
import Dicas from '../views/Dicas.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/consent',
    name: 'Consent',
    component: Consent,
    props: true
  },
  {
    path: '/dicas',
    name: 'Dicas',
    component: Dicas
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
