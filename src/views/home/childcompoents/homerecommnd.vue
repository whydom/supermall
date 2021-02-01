<template>
  <div id="recommd">
    <div class="recommd-item" v-for="(itme, index) in recommd1" :key="index">
      <a :href="itme.link">
        <img :src="itme.image" alt="">
        <p>{{itme.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    recommd1: {
      type: Array,
      default: []
    }
  }
}
</script>
<style scoped>
  #recommd {
    display: flex;
    text-align: center;
    padding: 15px 0 30px;
    border-bottom: 9px solid #eee;
  }
  .recommd-item {
    flex: 1;
  }
  .recommd-item img {
    width: 70px;
    height: 70px;
  }
</style>