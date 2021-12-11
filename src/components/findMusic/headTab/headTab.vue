<template>
  <div class="headTab">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/musicHome/findMusic/personRecom">个性推荐</el-menu-item>
      <el-menu-item index="/musicHome/findMusic/songMenu">歌单</el-menu-item>
      <el-menu-item index="/musicHome/findMusic/ranking">排行榜</el-menu-item>
      <el-menu-item index="/musicHome/findMusic/singer">歌手</el-menu-item>
      <el-menu-item index="/musicHome/findMusic/newSong">最新音乐</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "headTab",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 点击出来的下划线进行修改 */
.el-menu {
    
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: transparent;
}
.el-menu-item{
  color: #fff;
  font-weight: bold;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #ec4141;
    color: #fff;
    font-size: 20px;
    font-weight: bolder;
}/* 
.el-menu-item.is-active {
  border-color: #ec4141;
  font-size: 20px;
  font-weight: 400;
  
}
*/
/* 整体的下划线进行隐藏 */

.el-menu.el-menu--horizontal {
  border-bottom: none;
} 
</style>
