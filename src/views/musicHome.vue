<template>
  <div>
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