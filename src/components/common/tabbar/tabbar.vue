<template>
<div id="tabbar">
   <slot></slot>
</div>
</template>

<script>

export default {

}
</script>
<style scoped>
  #tabbar {
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    background-color: #f6f6f6;
    box-shadow: 0 1px 1px rgba(100,100 ,100 ,.8 );
  }
</style>