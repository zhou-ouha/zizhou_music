<template>
  <div>
    <div class="albumList">
      <el-table
        :data="songAll.albumList"
        stripe
        :show-header="false"
        @row-click="toDetail"
        :row-class-name="tableRowClassName"
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
          prop="artists[0].name">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <i class="iconfont" style="font-size:20px;">&#xe610;</i>
            <!-- <img :src="scope.row.picUrl" alt="" style="width:100px;height:100px;"> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props:["songAll"],
  data(){
    return {

    }
  },
  created(){
    console.log(this.songAll);
  },
  methods:{
    tableRowClassName({row,rowIndex}){
      row.index = rowIndex;
    },
    toDetail(row,column,cell){
      console.log(row.index);
      // this.$router.push("/musicHome/MenuDetail/"+this.songAll.albumList[row.index].id);
    }
  }
}
</script>

<style scoped>
.albumList{
  width: 90%;
  margin: 0 auto;
}
</style>