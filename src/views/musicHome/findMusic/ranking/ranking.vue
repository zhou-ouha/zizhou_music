<template>
  <div class="rank">
    <!-- 前四榜 -->
    <div class="firstFour">
      <div class="title title1">官方榜</div>
      <div class="itemBox" v-for="(item,index) in firstFour" :key="index">
        <div class="img">
          <img
            :src="item.coverImgUrl"
          ></img>
        </div>
        <div class="firstBox">
          <el-table
          :data="item.tracks"
          stripe
          :show-header="false"
          style="width: 100%">
          <el-table-column
            type="index"
            width="200">
          </el-table-column>
          <el-table-column
            prop="first"
            width="400">
          </el-table-column>
          <el-table-column
            prop="second"
            width="200">
          </el-table-column>
        </el-table>
        <span class="getAll" @click="getAll(item.id)">查看全部 ></span>
        </div>
      </div>
      
    </div>
    <!-- 全球榜单 -->
    <div class="global">
      <div class="title title2">全球榜</div>
      <songList
        :playList="rankingList"
      />
    </div>
  </div>
</template>

<script>
import songList from "@/components/findMusic/songList/songList"
export default {
  components:{songList},
  data(){
    return {
      rankingList:[],
      firstFour:[],
      tracks:[]
    }
  },
  mounted(){
    this.getRanking();
  },
  methods:{
    async getRanking(){
      const {data:res} = await this.$http.getRanking();
      this.firstFour = res.list.splice(0,4);
      console.log(this.firstFour)
      for(let i of this.firstFour){
        this.tracks.push(i.tracks);
      }
      this.rankingList = res.list;
      console.log(this.rankingList)
    },
    getAll(id){
      this.$router.push('/musicHome/MenuDetail/id='+id)
    }
  }
}
</script>

<style scoped>
.itemBox{
  width: 80%;
  margin: 0 auto 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.img{
  margin-right: 3vw;
}
.img img{
  width: 200px;
  height: 200px;
}
.getAll{
  color: #fff;
}
.firstBox{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.getAll:hover{
  cursor: pointer;
}
.title{
  color: #fff;
  font-size: 26px;
  margin: 10px auto;
}
.title1{
  width: 80%;
  
}
.title2{
  width: 95%;
  margin-bottom: 0;
}
</style>