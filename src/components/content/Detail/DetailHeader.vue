<template>
  <div class="menuHead">
      <div class="left"><img :src="info.img"></div>
      <div class="right">
          <!-- 歌单名称 -->
          <div class="menuName margin_b_4">
            <div>
                <el-tag 
                  type="danger" 
                  effect="plain" 
                  size="small" 
                  color="transparent"
                  style="position:relative;top:-10px;" 
                >歌单</el-tag>
                {{info.name}}
            </div>
          </div>
          <!-- 歌单作者 -->
          <div class="margin_b_4 author">
            <span class="avatar">
                <img :src="info.creatorAvatar" alt="">
            </span>
            
            <a>{{info.creatorName}}-{{createTime}}</a>
            <!-- <i>{{d}}</i> -->
          </div>
          <!-- 封面按钮 -->
          <div class="margin_b_4">
            <el-button class="btn" autofocus type="danger" round size="mini"><i class="iconfont icon_margin" style="font-size:16px ">&#xe610;</i>播放全部</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe64d;</i>收藏({{info.subscribedCount}})</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe601;</i>分享({{info.shareCount}})</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe61a;</i>下载全部</el-button>
          </div>
          <!-- 标签、详情、简介 -->
          <div class="headerGroup">
            <div class="margin_b_4">标签：<el-tag v-for="(item, index) in info.tags" color="transparent" type="info" size="small">{{item}}</el-tag></div>
            <div class="margin_b_4"><span>歌曲:{{info.trackCount}}</span><span>播放:{{info.playCount}}</span></div>
            <div class="margin_b_4 des" v-show="info.title !== ''">简介: {{info.title}}</div>
          </div>
          
      </div>
  </div>
</template>

<script>
import formatTime from "@/util/tool/formatTime.js"
export default {
    props:{
        info:{
            type:Object,
            required:true,
        }
    },
    created(){
        console.log(this.info)
    },
    computed:{
        createTime(){
            return formatTime(this.info.createTime)
        }
    }
}
</script>

<style scoped>
.menuHead{
    display: flex;
    justify-content: left;
    align-items: flex-start;
    color: #fff;
    margin: 2vh 2vw;
}
.left{
    margin-right: 20px;
}
.left img{
    width: 200px;
    height: 200px;
    border-radius: 12px;
}
.icon_margin{
    margin-right: 5px;
}
.menuName{
    width: 100%;
    font-size: 26px;
}
.author{
    font-size: 14px;
    display: flex;
    
}
.el-tag{
    margin: 0.5%;
}
.headerGroup{
    font-size: 12px;
}
.margin_b_4{
    margin-bottom: 10px;
}
.btn{
    font-size: 16px;
}
.des{
    width: 500px;
    height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.avatar img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1vw;
}
.avatar+a{
    color: #fff;
    margin-top: 1vh;
}
</style>