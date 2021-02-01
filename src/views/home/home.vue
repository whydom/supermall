<template>
  <div class="home">
    <navbar id="navbar"><div slot="center">购物街</div></navbar>
    <mainnav :banner='banner' class="banner"></mainnav>
    <recommd :recommd1='recommd'></recommd>
    <feature></feature>
    <tabcontrol :title="['流行','新款','精选']"></tabcontrol>

    <ul>
      <li>数据1</li>
      <li>数据2</li>
      <li>数据3</li>
      <li>数据4</li>
      <li>数据5</li>
      <li>数据6</li>
      <li>数据7</li>
      <li>数据8</li>
      <li>数据9</li>
      <li>数据10</li>
    </ul>
  </div>
  
</template>

<script>
// 引入组件
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'

import mainnav from './childcompoents/mainnav'
import recommd from './childcompoents/homerecommnd'
import feature from './childcompoents/feature'

// 引入request
import {getmultidata} from 'network/home'
export default {
  data() {
    return {
      banner:[],
      recommd:[]
    }
  },
  components:{
    navbar,
    mainnav,
    recommd,
    feature,
    tabcontrol
  },
  created() {
    getmultidata().then(res => {
      this.banner = res.data.data.banner.list
      this.recommd = res.data.data.recommend.list
      console.log(res);
    })
  },
}
</script>
<style scoped>
  #navbar {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
  }
  .banner {
    margin-top: 44px;
  }
</style>