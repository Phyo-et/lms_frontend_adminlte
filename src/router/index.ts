import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layouts/MainLayout.vue'
import UserListing from '../views/User/UserListing.vue'
import UserProfile from '../views/User/UserProfile.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children:[
      {
        path:'/',
        name:'home',
        component:HomeView
      }, {
        path:'/users',
        name:'users',
        component: UserListing
      },{
        path: '/users/:id',
        name: 'userProfile',
        component: UserProfile,
        props: true
      } ,{
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
