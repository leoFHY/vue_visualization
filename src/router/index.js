/*
 * @Desc: 
 * @Author: leoFan
 * @Date: 2021-10-17 17:21:41
 * @LastEditors: leoFan
 * @LastEditTime: 2021-10-17 17:37:40
 * @FilePath: \vue_visualization\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue')

  },
]

const router = new VueRouter({
  routes
})

export default router
