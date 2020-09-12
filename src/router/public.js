import PublicUserLogin from '@/components/public/login.vue'
import register from '@/components/public/register.vue'




export default [{
    path: '/public/user/login',
    name: '登录页面',
    component: PublicUserLogin
  },
  {
    path: '/public/user/register',
    name: '登录页面',
    component: register
  },
]
