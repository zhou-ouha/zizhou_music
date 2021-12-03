<template>
  <div id="app">
    <vue-particles
      color="#646775"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="2"
      linesColor="#2E3143"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="148"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
    <div class="home">
      <!-- 头部 -->
      <TopHeader></TopHeader>
      <div id="main">
        <!-- 左侧菜单 -->
        <BodyLeft></BodyLeft>
        <!-- 右侧主体部分 -->
        <BodyRight></BodyRight>
      </div>
      <!-- 底部播放器 -->
      <BottomFooter></BottomFooter>
    </div>
  </div>
</template>
<script>
import TopHeader from '@/layout/TopHeader'
import BottomFooter from '@/layout/BottomFooter'
import BodyLeft from '@/layout/BodyLeft'
import BodyRight from '@/layout/BodyRight'
export default {
  components:{
    TopHeader,
    BottomFooter,
    BodyLeft,
    BodyRight}
}
</script>

<style>

#particles-js{
  width: 100%;
  height: 100%;
  position: absolute;  
  z-index: -1; 
  top: 0;
  left: 0;
}

.lizi {
  background-color: #ffffff;
}
.home{
  width: 100%;
  height: 100vh;
}
#main{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
::-webkit-scrollbar{
  display:none;
}
</style>
