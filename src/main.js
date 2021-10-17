/*
 * @Desc: 
 * @Author: leoFan
 * @Date: 2021-10-17 17:21:41
 * @LastEditors: leoFan
 * @LastEditTime: 2021-10-17 17:52:53
 * @FilePath: \vue_visualization\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
