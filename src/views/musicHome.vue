<template>
  <div>
    <div class="home">
      <!-- 头部 -->
      <TopHeader></TopHeader>
      <div id="main" v-show="showPure == false">
        <!-- 左侧菜单 -->
        <BodyLeft></BodyLeft>
        <!-- 右侧主体部分 -->
        <div id="right">
          <el-scrollbar ref="scrollMenuRef" style="height:100%">
            <router-view></router-view>
          </el-scrollbar>
        </div>
        <!-- <BodyRight></BodyRight> -->
      </div>
      <transition name="pure">
        <div class="pure" v-show="showPure == true">
          <purePage 
            :song="song" 
            :lyric="lyric" 
            :currentTime="currentTime"
          />
        </div>
      </transition>
      </el-scrollbar>
      <!-- 底部播放器 -->
      <BottomFooter></BottomFooter>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/layout/TopHeader'
import BottomFooter from '@/layout/BottomFooter'
import BodyLeft from '@/layout/BodyLeft'
import purePage from '@/components/purePage/purePage.vue'
export default {
  components:{
    TopHeader,
    BottomFooter,
    BodyLeft,
    purePage
  },
  mounted(){
    let _this = this;
    // 展示简洁模式
    this.$bus.$on("toggle-pure",function(data){
      _this.song = data;
      _this.togglePure();
    })
    // 切歌跟随
    this.$bus.$on("change-song",function(data){
      _this.song = data;
    })
    // 获取歌词
    this.$bus.$on("get-lyric",function(lyric){
      _this.lyric = lyric;
    })
    // 获取当前时间
    this.$bus.$on("get-currenttime",function(time){
      _this.currentTime = time;
    })
  },
  data(){
    return {
      showPure:false,
      song:null,
      lyric:null,
      currentTime:0
    }
  },
  methods:{
    togglePure(){
      this.showPure = !this.showPure;
    },
    changeSong(data){
      this.song = data;
    }
  }
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
  opacity: 1;
}
.pure{
  width: 100%;
  height: calc(100vh - 19vh);
  background-color: rgba(124, 124, 124, 0.829);
}
#right{
  width: 88%;
  height: calc(100vh - 19vh);
  background-color: rgba(10, 10, 10, 0.726);
  overflow: hidden;
}
::-webkit-scrollbar{
  display:none;
}
</style>