<!--
 * @Desc: 
 * @Author: leoFan
 * @Date: 2021-10-17 17:21:41
 * @LastEditors: leoFan
 * @LastEditTime: 2021-10-17 22:48:56
 * @FilePath: \vue_visualization\src\views\Home\Home.vue
-->
<template>
  <div class="home">
 111
  </div>
</template>
<script>
  import TopView from './components/TopView'
  import SalesView from './components/SalesView'
  import BottomView from './components/BottomView'
  import MapView from './components/MapView'
  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      BottomView,
      MapView
    },
  }
</script>

<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>