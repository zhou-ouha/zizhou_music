<template>
  <div>
    <!-- <div>name:{{list[0]}}</div> -->
    <el-table
        :header-cell-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :row-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :show-header="showHeader"
        :data="list"
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
        label="操作"
        width="120">
          <template slot-scope="scope">
            <span class="iconfont" @click="handleEdit(scope.$index, scope.row)" style="margin-right:20%" v-show="true">&#xe83f;</span>
            <span class="iconfont" @click="handleEdit(scope.$index, scope.row)" style="margin-right:20%" v-show="false">&#xe602;</span>
            <span class="iconfont" @click="handleDelete(scope.$index, scope.row)">&#xe730;</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="name"
        label="歌曲"
        width="500">
        </el-table-column>
        <el-table-column
        prop="artist"
        label="歌手"
        >
        </el-table-column>
        <el-table-column
        prop="album"
        label="专辑"
        width="300">
        </el-table-column>
        <el-table-column
        prop="time"
        label="时间">
        </el-table-column>
    </el-table>      
  </div>
</template>

<script>
import { playMusic } from "../../../mixin/play/playMusic";
export default {
    name:"DetailList",
    props:{
      list:{
        type:Array,
        default:[]
      },
      player: {
        type: Boolean,
        default: false,
      },
      showHeader:{
        type:Boolean,
        default:true
      }
    },
    mixins:[playMusic],
    data(){
        return {
            musicList:[],
            currentIndex:null,
        }
    },
    mounted(){
      this.musicList = this.list
      console.log(this.list)
      this.$bus.$on('musicList',this.getHandler);
    },
    methods:{
      tableRowClassName({row,rowIndex}){
        row.index = rowIndex;
      },
      handleDbclick(row,column,cell){
        // if(this.player){
        //   this.$bus.$emit("PlayMusicListItem", row.index);
        //   return;
        // }
        this.currentIndex = row.index;
        this.playMusic(row.index);
      },
      async getUrl(data){
        const {data:res} = await this.$http.getMusicDetail(data);
        this.musicList = res.songs;
      },
      getHandler(data){
        let ids = data.map((item) => item.id)
        let single = ids.join();
        this.getUrl(single);
      }
    }
}
</script>

<style>

</style>