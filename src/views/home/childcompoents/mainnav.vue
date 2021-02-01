<template>
  <Swiper>
    <Swiper-item v-for="(itme, index) in banner" :key="index">
      <a :href="itme.link">
        <img :src="itme.image" alt="">
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
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>

</style>