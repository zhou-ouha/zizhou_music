<template>
  <div class="home">
    <Header></Header>
    <div id="main">
      <!-- 左侧菜单 -->
      <div id="left">
        <el-scrollbar style="height:100%">
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">发现音乐</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">播客</div></el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">视频</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">朋友</div></el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">直播</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">私人FM</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="myMusic">我的音乐</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe603;</i>本地音乐</div></el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe730;</i>下载管理</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe6d7;</i>最近播放</div></el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe61a;</i>我的音乐云盘</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe612;</i>我的收藏</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="myMusic myMenu" @click="toggleMyMenu">创建的歌单<i class="iconfont menuIcon"></i></div>
            <div class="grid-content mydetailMnu" v-show="myMenu">
              <span>歌单一</span> 
              <span>歌单二</span> 
              <span>歌单三</span> 
            </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="myMusic getMenu" @click="toggleGetMenu">收藏的歌单<i class="iconfont menuIcon"></i></div>
            <div class="grid-content getDetailMenu" v-show="getMenu">
              <span>歌单一</span>
              <span>歌单二</span>
              <span>歌单三</span>
            </div>
            </el-col>
          </el-row>
        </el-scrollbar>
      </div>
      <div id="right">
        <el-scrollbar style="height:100%">
          <div class="homeTab">
            <menu-tab :tabName="tabName"></menu-tab>
          </div>
          <div>
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuTab from '@/components/MenuTab'
export default {
  name: 'Home',
  components:{
    Header,
    Footer,
    MenuTab
  },
  data() {
      return {
        myMenu:false,
        getMenu:false,
        //tab栏名称
        tabName:["个性音乐","专属定制","歌单","排行榜","歌手","最新音乐"],
        //当前选中的tab
        currentTabIndex:0,
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
  },
  methods:{
    toggleMyMenu(){
      this.myMenu = !this.myMenu
    },
    toggleGetMenu(){
      this.getMenu = !this.getMenu
    },
    handleClick(tab,event){
      console.log(tab.index,event)
    }
  }
}
</script>
<style scoped>
.home{
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}
#main{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
#left{
  width: 12%;
  height: 70vh;
  background-color: rgba(5, 5, 5, 0.308);
  overflow: hidden;
}
#right{
  width: 88%;
  height: 70vh;
  background-color: rgba(4, 4, 4, 0.726);
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
  /* width: 10vw; */
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
.grid-content {
  min-height: 36px;
  color: #fff;
  background: rgba(5, 5, 5, 0.308);
  text-indent: 1vw;
  line-height: 36px;
}
.el-col:hover .grid-content{
  cursor: pointer;
  background-color: rgba(93, 93, 93, 0.24);
  font-weight: bold;
  transition: all .3s;
}
.myMusic{
  font-size: 12px;
  min-height: 36px;
  color: #fff;
  background: rgba(5, 5, 5, 0.308);
  text-indent: 1vw;
  line-height: 36px;
}
.mydetailMnu{
  font-size: 14px;
}
.icon{
  margin-right: 5px;
}
.myMenu, .getMenu:hover{
  cursor: pointer;
}
</style>