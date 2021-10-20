<template>
  <div>
    <el-table
        :header-cell-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :row-style="{background:'rgba(10, 10, 10, 0.726)'}"
        :data="tableData"
        stripe
        style="width: 96%;margin:0 auto;">
        <el-table-column
        prop="date"
        label=""
        width="50">
        </el-table-column>
        <el-table-column
        prop="name"
        label="操作"
        width="120">
          <template slot-scope="scope">
            <span class="iconfont" @click="handleEdit(scope.$index, scope.row)" style="margin-right:20%">&#xe83f;</span>
            <span class="iconfont" @click="handleEdit(scope.$index, scope.row)" style="margin-right:20%">&#xe602;</span>
            <span class="iconfont" @click="handleDelete(scope.$index, scope.row)">&#xe730;</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="address"
        label="歌曲"
        width="500">
        </el-table-column>
        <el-table-column
        prop="address"
        label="歌手"
        >
        </el-table-column>
        <el-table-column
        prop="address"
        label="专辑"
        width="300">
        </el-table-column>
        <el-table-column
        prop="address"
        label="时间">
        </el-table-column>
    </el-table>      
  </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[{
              date: '1',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '2',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '1',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '2',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '1',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '2',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '1',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '2',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '1',
              name: '王小虎',
              address: '上海市'
            },
            {
              date: '2',
              name: '王小虎',
              address: '上海市'
            },
            ]
        }
    }
}
</script>

<style>

</style>