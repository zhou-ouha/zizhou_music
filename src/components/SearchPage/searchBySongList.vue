<template>
  <div>
    <div class="menuList">
        <el-table
          :data="songAll.menuList"
          stripe
          :show-header="false"
          style="width: 100%">
          <el-table-column
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="coverImgUrl"
            width="180"
            height="180">
            <template slot-scope="scope">
              <img :src="scope.row.coverImgUrl" alt="" style="width:100px;height:100px;">
            </template>
          </el-table-column>
          <el-table-column
            prop="name">
          </el-table-column>
          <el-table-column
            prop="trackCount">
          </el-table-column>
          <el-table-column
            prop="creator.nickname">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["songAll"]
}
</script>

<style scoped>
.menuList{
  width: 90%;
  margin: 0 auto;
}
</style>