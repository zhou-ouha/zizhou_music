<template>
  <div>
    <el-drawer
      title="当前播放列表"
      :visible.sync="drawer"
      :direction="direction"
      :show-close="false"
      :before-close="handleClose"
    >
      <el-table
        :header-cell-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :row-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :data="musicList"
        stripe
        :row-class-name="tableRowClassName"
        @row-dblclick="handleDbclick"
        style="width: 96%;margin:0 auto;">
        <el-table-column
        label=""
        width="50">
          <template slot-scope="scope">
            <span 
              class="iconfont" 
              style="color:#fe3c32;"
              v-show="scope.$index === currentIndex"
            >&#xe62d;</span>
            <span 
              v-show="scope.$index !== currentIndex"
            >{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="歌曲"
          width="200">
          </el-table-column>
          <el-table-column
          prop="time"
          label="时间">
          </el-table-column>
      </el-table>  
    </el-drawer> 
  </div>
</template>

<script>
import {playMusic} from "@/mixin/listPlay/playMusic"
export default {
  props:["musicList","currentIndex"],
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  mixins:[playMusic],
  mounted(){
    let that = this;
    this.$bus.$on("showList",function(value){
      that.drawer = value.showList;
      that.playList = value.playList;
    });
    // this.$bus.$on('musicList',this.getHandler);
  },
  methods: {
    handleClose(done) {
      done();
    },
    tableRowClassName({row,rowIndex}){
      row.index = rowIndex;
    },
    handleDbclick(row,column,cell){
      // if(this.player){
      //   this.$bus.$emit("PlayMusicListItem", row.index);
      //   return;
      // }
      this.playMusic(row.index);
    },
  },
  watch:{
    currentIndex(currentIndex){
      this.currentIndex = currentIndex;
    }
  }
}
</script>

<style scoped>

</style>