<template>
  <Swiper>
    <Swiper-item v-for="(itme, index) in banner" :key="index">
      <a :href="itme.link">
        <img :src="itme.image" alt="" @load="navload">
      </a>
    </Swiper-item>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  props:{
    banner:{
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isemit:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    navload() {
      // 只让发送一次加载完成信息出去，因为要知道图片高度，只要一张即可，其余的都一样的
      if(!this.isemit) {
        this.$emit('navload')
        this.isemit = true
      }
      
    }
  },
}
</script>
<style scoped>

</style>