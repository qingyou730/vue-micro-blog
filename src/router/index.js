import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import personBlog from '../views/personBlog.vue'
import publicRouter from '@/router/public'

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: '首页',
        component: homePage
      },
      {
        path: '/personblog',
        name: '个人博客',
        component: personBlog
      }
].concat(publicRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
