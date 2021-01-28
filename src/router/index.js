import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/home')
const Classfiy = () => import('views/classfiy/classfiy')
const Shopcar = () => import('views/shopcar/shopcar')
const Profile = () => import('views/profile/profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classfiy',
    component: Classfiy
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/peofile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router