import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
//import About from '../views/About.vue'
import { auth } from './../services/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/coronavirus',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/vacinacao',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/telefones',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/decretos',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/login',
  //   name: 'About',
  // },
  // {
  //   path: '/admin',
  //   name: 'About',
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Router Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
