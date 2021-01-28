<template>
  <div class="tabbar-itme" @click='btnclick'>
    <div v-if="!isshow" class="tabbar-icon">
      <slot name="tabbar-icon"></slot>
    </div>

    <div :style="activestyle" v-else  class="tabbar-icon-active">
      <slot name="tabbar-icon-active"></slot>
    </div>

    <div :style="activestyle" class="tabbar-text">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'orange'
    }
  },
  data() {
    return {
      
    } 
  },
  computed:{
    isshow() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activestyle() {
      return this.isshow?{color: this.activecolor}:{}
    }
  },
  methods: {
    btnclick() {
      this.$router.replace(this.path)
    }
  },
}
</script>
<style scoped>
 .tabbar-itme {
   flex: 1;
   text-align: center;
   padding-top: 5px;
 }
 .tabbar-itme > .tabbar-icon > i, .tabbar-itme > .tabbar-icon-active > i {
   font-size: 20px;
 }
 .tabbar-text {
   font-size: 14px;
 }
</style>