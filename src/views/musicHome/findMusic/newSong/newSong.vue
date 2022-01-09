<template>
  <div>
    <div>
      <!-- 选择框 -->
      <div class="switchTab">
        <div 
          :class="{switchItem:isActive == 1,noActive:isActive == 2}" 
          style="margin-right: 8px;"
          @click="toggleTab(1)"
        >新歌速递</div>
        <div 
          :class="{switchItem:isActive == 2,noActive:isActive == 1}" 
          @click="toggleTab(2)"
        >新碟上架</div>
      </div>
      
      <div class="tagTab">
        <!-- 标签 -->
        <div class="tags">
          <span 
            v-for="(item,index) in tags" :key="index"
            @click="selectTag(index)"
            :class="{tagActive:tagIndex == index}"
          >{{item.tag}}</span>
        </div>
        <!-- 播放全部 -->
        <el-button>播放全部</el-button>
      </div>

      <div class="songList">
        <el-table
          :data="newSong"
          stripe
          :show-header="false"
          style="width: 100%">
          <el-table-column
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="picUrl"
            width="180"
            height="180">
            <template slot-scope="scope">
              <img :src="scope.row.picUrl" alt="" style="width:100px;height:100px;">
            </template>
          </el-table-column>
          <el-table-column
            prop="name">
          </el-table-column>
          <el-table-column
            prop="singerName">
          </el-table-column>
          <el-table-column
            prop="albumName">
          </el-table-column>
          <el-table-column
            prop="duration">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {initNewSong} from "@/components/findMusic/newSong/initNewSong.js"

export default {
  data(){
    return {
      tags:[{tag:"全部",type:0},{tag:"华语",type:7},{tag:"欧美",type:96},{tag:"日本",type:8},{tag:"韩国",type:16}],
      newSong:[],
      isActive:1,
      tagIndex:0
    }
  },
  mounted(){
    this.getNewSong(0);
    this.getNewDisc();
  },
  methods:{
    async getNewSong(type){
      let temp = [];
      const {data:res} = await this.$http.getNewSong(type);
      console.log(res);
      for(let item of res.data){
        let song = new initNewSong(item);
        temp.push(song);
      }
      console.log(temp[0])
      if(this.newSong.length == 0) this.newSong = temp;
      else this.newSong.splice(0,this.newSong.length,...temp);
    },
    async getNewDisc(){
      const {data:res} = await this.$http.getNewDisc();
      console.log(res);
    },
    toggleTab(index){
      this.isActive = index;
    },
    selectTag(index){
      this.tagIndex = index;
      this.getNewSong(this.tags[index].type);
    }
  }
}
</script>

<style scoped>
.switchTab{
  width: 20%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  background-color: rgba(66, 62, 55, 0.329);
  border-radius: 14px;
}
.switchTab:hover{
  cursor: pointer;
}
.switchItem{
  width: 55%;
  text-align: center;
  background-color: #ec4141;
  border-radius: 14px;
}
.noActive{
  width: 45%;
  text-align: center;
}
.tagTab{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: #fff;
}
.tags{
  margin-right: 500px;
}
.tags span{
  padding: 4px 8px;
  margin: 0 10px;
}
.tags:hover{
  cursor: pointer;
}
.tagActive{
  background-color: #ec4141;
  border-radius: 10px;
}
.songList{
  width: 95%;
  margin: 0 auto;
}
</style>