<template>
  <div id="app">
    <router-view></router-view>
    <maintababr></maintababr>
  </div>
</template>

<script>
import maintababr from './components/content/maintabbar/maintabbar'

export default {
  
  name: 'App',
  components: {
    maintababr
  },
  created() {
    
  },
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
