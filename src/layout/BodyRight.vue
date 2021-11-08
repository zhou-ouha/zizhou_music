<template>
    <div id="right">
      <el-scrollbar ref="scrollMenuRef" style="height:100%">
          <div>
            <div class="homeTab">
              <MenuTab :tabName="tabName" :tabPath="tabPath" :isScroll="isScroll"></MenuTab>
            </div>
            <div>
              <router-view></router-view>
            </div>
          </div>
        </el-scrollbar>
    </div>
</template>

<script>
import MenuTab from '@/components/common/MenuTab'
import throttle from '@/util/tool/throttle.js'
export default {
  components:{
    MenuTab
  },
  mounted(){
    this.$refs.scrollMenuRef.wrap.addEventListener("scroll", throttle(this.isScrollFunc,100,true));
  },
  data(){
    return {
      // 当前播放的音乐url
      currentMusicUrl:'',
      isScroll:false,
      showMenuDetail:true,
      //当前选中的tab
      currentTabIndex:0,
      tabName:["个性音乐","专属定制","歌单","排行榜","歌手","最新音乐"],
      tabPath:["/","/PersonalIndividual","/MusicMenu","/LeaderBoard","/Vocalist","/LatestMusic",]
    }
  },
  methods:{
    hideTab(res){
      console.log(res)
    },
    
    handleClick(tab,event){
      console.log(tab.index,event);
    },
    isScrollFunc(){
      if(this.$refs.scrollMenuRef.wrap.scrollTop > 0){
        this.isScroll = true;
      }else{
        this.isScroll = false;
      }
      // console.log("isScroll----"+this.isScroll);
    }
  }
}
</script>

<style scoped>
#right{
  width: 88%;
  height: calc(100vh - 19vh);
  background-color: rgba(10, 10, 10, 0.726);
  overflow: hidden;
}
.homeTab{
  position: sticky;
  top: 0;
  z-index: 9;
  color: #fff;
  background-color: rgba(4, 4, 4, 0);
}
.tabBar{
  display: flex;
  margin-left: 1vw;
}
.tabBar div{
  padding: 2vh 0.5vw 0;
  text-align: center;
}
.tabBar .tabLine{
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 2px;
  background-color: rgb(255, 118, 118);
  
}
.bigSize{
  font-size: 18px;
} 
</style>