<template>
  <tabbar> 
      <tabbaritme path='/home' activecolor='orange'>
        <i slot="tabbar-icon" class="iconfont icon-home"></i>
        <i slot="tabbar-icon-active" class="iconfont icon-home"></i>
        <div slot="tabbar-text">首页</div>
      </tabbaritme>
      
      <tabbaritme path='/classfiy' activecolor='orange'>
        <i slot="tabbar-icon" class="iconfont icon-fenlei"></i>
        <i slot="tabbar-icon-active" class="iconfont icon-fenlei"></i>
        <div slot="tabbar-text">分类</div>
      </tabbaritme>

      <tabbaritme path='/shopcar' activecolor='orange'>
        <i slot="tabbar-icon" class="iconfont icon-gouwuchezhengpin"></i>
        <i slot="tabbar-icon-active" class="iconfont icon-gouwuchezhengpin"></i>
        <div slot="tabbar-text">购物车</div>
      </tabbaritme>

      <tabbaritme path='profile' activecolor='orange'>
        <i slot="tabbar-icon" class="iconfont icon-My"></i>
        <i slot="tabbar-icon-active" class="iconfont icon-My"></i>
        <div slot="tabbar-text">我的</div>
      </tabbaritme>
      
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbaritme from 'components/common/tabbar/tabbar-itme'
export default {
  components: {
    tabbar,
    tabbaritme
  }
}
</script>
<style scoped>

</style>