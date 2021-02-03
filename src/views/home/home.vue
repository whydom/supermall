<template>
  <div class="home">
    <navbar id="navbar"><div slot="center">购物街</div></navbar>
    
    <scroll class="content" ref="scroll" :probeType='istrue' @scroll='contentscroll'>
      <mainnav :banner='banner' class="banner"></mainnav>
      <recommd :recommd1='recommd'></recommd>
      <feature></feature>
      <tabcontrol :title="['流行','新款','精选']" class="tabcontrol"></tabcontrol>
      <ul>
        <li>模拟数据1</li>
        <li>模拟数据2</li>
        <li>模拟数据3</li>
        <li>模拟数据4</li>
        <li>模拟数据5</li>
        <li>模拟数据6</li>
        <li>模拟数据7</li>
        <li>模拟数据8</li>
        <li>模拟数据9</li>
        <li>模拟数据10</li>
        <li>模拟数据11</li>
        <li>模拟数据12</li>
        <li>模拟数据13</li>
        <li>模拟数据14</li>
        <li>模拟数据15</li>
        <li>模拟数据16</li>
        <li>模拟数据17</li>
        <li>模拟数据18</li>
        <li>模拟数据19</li>
        <li>模拟数据20</li>
        <li>模拟数据21</li>
        <li>模拟数据22</li>
        <li>模拟数据23</li>
        <li>模拟数据24</li>
        <li>模拟数据25</li>
        <li>模拟数据26</li>
        <li>模拟数据27</li>
        <li>模拟数据28</li>
        <li>模拟数据29</li>
        <li>模拟数据30</li>
        <li>模拟数据31</li>
        <li>模拟数据32</li>
        <li>模拟数据33</li>
        <li>模拟数据34</li>
        <li>模拟数据35</li>
        <li>模拟数据36</li>
        <li>模拟数据37</li>
        <li>模拟数据38</li>
        <li>模拟数据39</li>
        <li>模拟数据40</li>
        <li>模拟数据41</li>
        <li>模拟数据42</li>
        <li>模拟数据43</li>
        <li>模拟数据44</li>
        <li>模拟数据45</li>
        <li>模拟数据46</li>
        <li>模拟数据47</li>
        <li>模拟数据48</li>
        <li>模拟数据49</li>
        <li>模拟数据50</li>
        <li>模拟数据51</li>
        <li>模拟数据52</li>
        <li>模拟数据53</li>
        <li>模拟数据54</li>
        <li>模拟数据55</li>
        <li>模拟数据56</li>
        <li>模拟数据57</li>
        <li>模拟数据58</li>
        <li>模拟数据59</li>
        <li>模拟数据60</li>
        <li>模拟数据61</li>
        <li>模拟数据62</li>
        <li>模拟数据63</li>
        <li>模拟数据64</li>
        <li>模拟数据65</li>
        <li>模拟数据66</li>
        <li>模拟数据67</li>
        <li>模拟数据68</li>
        <li>模拟数据69</li>
        <li>模拟数据70</li>
        <li>模拟数据71</li>
        <li>模拟数据72</li>
        <li>模拟数据73</li>
        <li>模拟数据74</li>
        <li>模拟数据75</li>
        <li>模拟数据76</li>
        <li>模拟数据77</li>
        <li>模拟数据78</li>
        <li>模拟数据79</li>
        <li>模拟数据80</li>
        <li>模拟数据81</li>
        <li>模拟数据82</li>
        <li>模拟数据83</li>
        <li>模拟数据84</li>
        <li>模拟数据85</li>
        <li>模拟数据86</li>
        <li>模拟数据87</li>
        <li>模拟数据88</li>
        <li>模拟数据89</li>
        <li>模拟数据90</li>
        <li>模拟数据91</li>
        <li>模拟数据92</li>
        <li>模拟数据93</li>
        <li>模拟数据94</li>
        <li>模拟数据95</li>
        <li>模拟数据96</li>
        <li>模拟数据97</li>
        <li>模拟数据98</li>
        <li>模拟数据99</li>
        <li>模拟数据100</li>
      </ul>
    </scroll>
    <backtop class="backtop" @click.native="backtopclick" v-show="isshow"></backtop>
    
    

  </div>
  
</template>

<script>
// 引入组件
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import scroll from 'components/common/scroll/scroll'
import backtop from 'components/common/backtop/backtop'

import mainnav from './childcompoents/mainnav'
import recommd from './childcompoents/homerecommnd'
import feature from './childcompoents/feature'

// 引入request
import {getmultidata} from 'network/home'
export default {
  data() {
    return {
      banner:[],
      recommd:[],
      isshow: false,
      istrue: true
    }
  },
  components:{
    navbar,
    mainnav,
    recommd,
    feature,
    tabcontrol,
    scroll,
    backtop
  },
  created() {
    getmultidata().then(res => {
      this.banner = res.data.data.banner.list
      this.recommd = res.data.data.recommend.list
    })
  },
  methods: {
    backtopclick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentscroll(position) {
      this.isshow = -position.y > 1000?true:false
    }
  },
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
  #navbar {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
  }
  .tabcontrol {
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    
  }
  .backtop {
    position: absolute;
    left: 80vw;
    right: 0;
    bottom: 70px;
  }
</style>