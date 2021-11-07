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
    component: () => import('@/Pages/SpisokDelPage.vue')
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
    path: '/',
    name: 'Main',
    meta: {
      title: 'MainPage'
    },
    component: () => import('@/Pages/MainPage.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router