<template>
  <div class="menuHead">
      <div class="left"><img src="@/static/imgs/empty.webp"></div>
      <div class="right">
          <!-- 歌单名称 -->
          <div>
              <h2>{{}}</h2>
          </div>
          <!-- 歌单作者 -->
          <div>
            <span></span>
            <span></span>
          </div>
          <!-- 封面按钮 -->
          <div>
                <el-button autofocus="true" type="danger" round size="small"><i class="iconfont icon_margin" style="font-size:18px ">&#xe610;</i>播放全部</el-button>
                <el-button autofocus round size="small"><i class="iconfont icon_margin" style="font-size:18px ">&#xe64d;</i>已收藏{{}}</el-button>
                <el-button autofocus round size="small"><i class="iconfont icon_margin" style="font-size:18px ">&#xe601;</i>分享{{}}</el-button>
                <el-button autofocus round size="small"><i class="iconfont icon_margin" style="font-size:18px ">&#xe61a;</i>下载全部</el-button>
          </div>
          <!-- 标签、详情、简介 -->
          <div>标签：{{}}</div>
          <div><span>歌曲:{{}}</span><span>播放:{{}}</span></div>
          <div>简介:{{}}</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menuHead{
    display: flex;
    justify-content: left;
    align-items: flex-start;
}
.left{
    margin-right: 20px;
}
.left img{
    width: 180px;
    height: 180px;
}
.icon_margin{
    margin-right: 5px;
}
</style>