<template>
  <div class="menuHead">
      <div class="left"><img :src="list.coverImgUrl"></div>
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
                {{list.name}}
            </div>
          </div>
          <!-- 歌单作者 -->
          <div class="margin_b_4 author">
            <span>创建者：{{list.creator.nickname}}</span>
            <span></span>
          </div>
          <!-- 封面按钮 -->
          <div class="margin_b_4">
            <el-button class="btn" autofocus type="danger" round size="mini"><i class="iconfont icon_margin" style="font-size:16px ">&#xe610;</i>播放全部</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe64d;</i>已收藏{{}}</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe601;</i>分享{{}}</el-button>
            <el-button class="btn" autofocus round size="mini"><i class="iconfont icon_margin" style="font-size:18px ">&#xe61a;</i>下载全部</el-button>
          </div>
          <!-- 标签、详情、简介 -->
          <div class="headerGroup">
            <div class="margin_b_4">标签：<el-tag v-for="(item, index) in list.tags" color="transparent" type="info" size="small">{{item}}</el-tag></div>
            <div class="margin_b_4"><span>歌曲:{{list.trackCount}}</span><span>播放:{{list.playCount}}</span></div>
            <div class="margin_b_4 des" v-show="list.description !== ''">简介:{{list.description}}</div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object,
            required:true,
            default:{}
        }
    },
    mounted(){
        console.log(this.list)
    }
}
</script>

<style scoped>
.menuHead{
    display: flex;
    justify-content: left;
    align-items: flex-start;
    color: #fff;
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
</style>