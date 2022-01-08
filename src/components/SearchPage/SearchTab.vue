<template>
  <div class="searchHeadTab">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/musicHome/SearchPage/SearchBySong">单曲</el-menu-item>
      <el-menu-item index="/musicHome/searchPage/searchBySinger">歌手</el-menu-item>
      <el-menu-item index="/musicHome/searchPage/searchByAlbum">专辑</el-menu-item>
      <el-menu-item index="/musicHome/searchPage/searchByVideo">视频</el-menu-item>
      <el-menu-item index="/musicHome/searchPage/searchBySongList">歌单</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "searchHeadTab",
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
  font-size: 20px;
  font-weight: bold;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: transparent;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #ec4141;
    color: #fff;
    font-weight: bolder;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: #fff;
}
/* 整体的下划线进行隐藏 */

.el-menu.el-menu--horizontal {
  border-bottom: none;
} 
</style>
