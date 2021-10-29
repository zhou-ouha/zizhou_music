<template>
  <div>
    <el-table
        :header-cell-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :row-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :data="tableData"
        stripe
        style="width: 96%;margin:0 auto;">
        <el-table-column
        type="index"
        label=""
        width="50">
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
export default {
    props:{
      list:{
        type:Array
      }
    },
    data(){
        return {
            tableData:[]
        }
    },
    mounted(){
      this.tableData = this.list
      console.log(this.list)
      console.log(this.$route.params.id)
      this.$bus.$on('musicList',this.getHandler);
    },
    methods:{
      async getUrl(data){
        const {data:res} = await this.$http.getMusicDetail(data);
        this.tableData = res.songs;
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