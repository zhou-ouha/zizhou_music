<template>
  <div>
    <!-- 发表评论 -->
    <div class="input">
      <el-input
        type="textarea"
        :rows="3"
        v-model="textarea">
      </el-input>
      <el-button>评论</el-button>
    </div>
    <div class="title">精彩评论</div>
    <div>
      <CommentContent pos="top"/>
    </div>
    <div class="title">其他评论</div>
    <div>
      <CommentContent pos="bottom"/>
    </div>
  </div>
</template>

<script>
import CommentContent from './CommentContent.vue'
export default {
  components:{
    CommentContent
  },
  mounted(){
  },
  data(){
    return {
      textarea:''
    }
  },
  props:["hot","comments"]
}
</script>

<style scoped>
.input{
  width: 80%;
  margin: 20px auto 0;
  overflow: hidden;
}
.el-button{
  margin: 10px 0;
  float: right;
}
.title{
  color: #fff;
  margin-left: 3%;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>