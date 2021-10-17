<template>
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
</template>

<script>
export default {
    data(){
        return {
            myMenu:false,
            getMenu:false,
            // 当前播放的音乐url
            currentMusicUrl:'',
            isScroll:false,
            showMenuDetail:true,
        }
    },
    methods:{
        toggleMyMenu(){
            this.myMenu = !this.myMenu
        },
        toggleGetMenu(){
            this.getMenu = !this.getMenu
        },
    }
}
</script>

<style scoped>
#left{
  width: 12%;
  height: calc(100vh - 18vh);
  background-color: rgba(5, 5, 5, 0.308);
  overflow: hidden;
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
.mydetailMnu{
  font-size: 14px;
}
.icon{
  margin-right: 5px;
}
.myMenu, .getMenu:hover{
  cursor: pointer;
}
.myMusic{
  font-size: 12px;
  min-height: 36px;
  color: #fff;
  background: rgba(5, 5, 5, 0.308);
  text-indent: 1vw;
  line-height: 36px;
}
</style>