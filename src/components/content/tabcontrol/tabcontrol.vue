<template>
  <div id="tabcontrol">
    <div v-for="(itme, index) in title" :key="index" class="tabcontrol-item" :class="{active: index == currentindex}" @click="itemclick(index)">
      <span>{{itme}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentindex: 0
    }
  },
  methods: {
    itemclick(index) {
      this.currentindex = index
      this.$emit('itemclick',index)
    }
  },
}
</script>
<style scoped>
  #tabcontrol {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  .tabcontrol-item {
    flex: 1;
  }
  .tabcontrol-item.active {
    color: var(--color-high-text);
  }
  .tabcontrol-item.active > span {
    border-bottom: 1px solid #F00;
    padding: 5px;
  }
</style>