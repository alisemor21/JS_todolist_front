import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/spisok-del',
    name: 'Список дел',
    meta: {
      title: 'Список дел'
    },
    component: () => import('@/Pages/HomePage.vue')
  },
  {
    path: '/info',
    name: 'Информация',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/Pages/InfoPage.vue')
  },
  {
    path: '/new',
    name: 'NEW',
    meta: {
      title: 'kdkdkdk'
    },
    component: () => import('@/Pages/NewPage.vue')
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router