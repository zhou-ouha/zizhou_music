<template>
  <div class="menuTab">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" @click="changeActive('1')">专辑</el-menu-item>
      <el-menu-item index="2" @click="changeActive('2')">MV({{ mvCount }})</el-menu-item>
      <el-menu-item index="3" @click="changeActive('3')">歌手详情</el-menu-item>
      <el-menu-item index="4" @click="changeActive('4')">相似歌手</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "menuTab",
  components: {},
  props: {
    // mv总数
    mvCount: Number,
  },
  data() {
    return {
      // 高亮菜单
      activeIndex: "1",
    };
  },
  methods: {
    changeActive(index) {
      this.activeIndex = index;
      this.$bus.$emit("changeActive", index);
    },
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
    font-size: 16px;
    font-weight: bolder;
}
/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
} 
/* 去除hover效果 */
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: #fff;
}
</style>
