import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/spisok-del',
    name: 'Список дел',
    meta: {
      title: 'Список дел',
      layout:'main-layout'
    },
    component: () => import('@/pages/SpisokDelPage.vue')
  },
  {
    path: '/info',
    name: 'Информация',
    meta: {
      title: 'Информация',
      layout:'main-layout'
    },
    component: () => import('@/pages/InfoPage.vue')
  },
  
  {
    path: '/',
    name: 'Main',
    meta: {
      title: 'MainPage',
      layout:'main-layout'
    },
    component: () => import('@/pages/MainPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Вход',
      layout:'auth-layout'
    },
    component: () => import('@/pages/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'Регистрация',
      layout:'auth-layout'
    },
    component: () => import('@/pages/RegistrationPage.vue')
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router