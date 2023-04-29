<template>
    <div id="left">
        <el-scrollbar style="height:100%">
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">发现音乐</div></el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content">视频</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe6d7;</i>最近播放</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content"><i class="iconfont icon">&#xe612;</i>我的收藏</div></el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="myMusic getMenu" @click="toggleGetMenu">
                收藏的歌单
                <i class="iconfont menuIcon"></i>
              </div>
              <div v-show="getMenu">
                <div class="getDetailMenu" v-for="(item,index) in menu" @click="getMenuDetail(item.id)">
                  <i>{{item.name}}</i>
                </div>
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
            menu:[]
        }
    },
    mounted(){
      let _this = this;
      this.$bus.$on("user-menu",function(data){
        _this.menu = data;
      })
    },
    methods:{
        toggleMyMenu(){
            this.myMenu = !this.myMenu
        },
        toggleGetMenu(){
            this.getMenu = !this.getMenu
        },
        getMenuDetail(id){
          this.$router.push('/musicHome/MenuDetail/id='+id)
        }
    }
}
</script>

<style scoped>
#left{
  width: 12%;
  height: calc(100vh - 19vh);
  background-color: #334;
  overflow: hidden;
  border-right: 1px solid rgb(180, 174, 174);
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
.getDetailMenu{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 30px;
  background-color: rgb(75, 75, 92);
  color: #fff;
  margin-bottom: 3px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 30px;
}
.getDetailMenu:hover{
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