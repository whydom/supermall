<template>
  <div id="classfiy" ref="classfiy">
    <div class="content">
       <ul>
      <button @click=btnclick>按钮</button>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
 data() {
   return {
     bscroll:null
   }
 },
 methods: {
   btnclick() {
     console.log('11111');
   }
 },
 mounted() {
   this.scroll = new Bscroll(this.$refs.classfiy,{
    //  这个是检测是否监听滚动坐标的配置文件
    // 0). 当 probeType 为 0 的时候，不会触发scroll 事件；
    // 1). 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
    // 2). 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
    // 3). 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
     probeType : 0,
    //  这个是下拉更新的配置文件,如果只单纯设置true的话默认stop：40
    // threshold： 可以配置顶部下拉的距离（threshold）决定刷新时机。stop： 回弹停留的距离（stop）
     pullDownRefresh: {
       threshold:90,
       stop: 0
     },
    // 这个是上拉加载更多的配置文件,这个也可以像pullDownRefresh这样设置threshold以及stop属性
    pullUpLoad: true

   })
   this.scroll.on('scroll',(position) => {
     console.log(position);
   })

  // 这个是下拉加载更多的监听事件
   this.scroll.on('pullingDown',() => {
     console.log('下拉加载更多');
    //  这个是检测到已经完成下拉加载任务，这句话不写就只会触发一次'下拉加载更多'，因为系统以为没结束
     this.scroll.finishPullDown()
   })

  //  这个是上拉加载更多的监听事件
  this.scroll.on('pullingUp',() => {
    console.log('上拉加载更多');
    this.scroll.finishPullUp()
  })

  // 这个是方法，滚动指定的距离
  this.scroll.scrollTo(0,0,300)

 },
}
</script>
<style scoped>
  #classfiy {
    height: 150px;
    background-color: #f00;
    overflow: hidden;
  }
</style>