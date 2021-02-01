<template>
  <div id="app">
    <router-view></router-view>
    <maintababr></maintababr>
  </div>
</template>

<script>
import maintababr from './components/content/maintabbar/maintabbar'
// import {getmultidata} from 'network/home'

export default {
  
  name: 'App',
  data() {
    return {
      banner: [],
    }
  },
  components: {
    maintababr
  },
  created() {
    // getmultidata().then(res => {
    //   console.log(res.data.data.banner.list);
    //   this.banner = res.data.data.banner.list
    // })
  },
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
