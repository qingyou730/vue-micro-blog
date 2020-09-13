import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import personBlog from '../views/personBlog.vue'
import publicRouter from '@/router/public'
import blogDetails from '@/views/blogDetails.vue'


Vue.use(VueRouter)

const routes = [
      {
        path: '/home',
        name: '首页',
        component: homePage
      },
      {
        path: '/personblog',
        name: '个人博客',
        component: personBlog
      },
      {
        path: '/blogDetails',
        name: '个人博客',
        component: blogDetails
      }
].concat(publicRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
