<template>
  <div id="scroll" ref="cscroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.cscroll,{
      click: true,
      pullDownRefresh: {
       threshold:90,
       stop: 0
      },
      pullUpLoad:true
    })
    if(this.probeType){
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
    })
    }
    this.scroll.on('pullingDown',() => {
      console.log("下拉更新");
      this.scroll.finishPullDown()
    })
    this.scroll.on('pullingUp',() => {
      console.log('上来加载更多');
      this.scroll.finishPullUp()
    })

    console.log(this.scroll);


    },500)
    
    
  },
}
</script>
<style scoped>

</style>