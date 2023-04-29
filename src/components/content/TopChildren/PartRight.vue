<template>
  <div class="right">
    <!--  -->
    <div>
      <span v-if="userInfo != null">
      <el-avatar :src="userInfo.profile.avatarUrl"></el-avatar>
      <span class="nickname">{{userInfo.profile.nickname}}</span>
    </span>
    
    <span class="iconfont" v-else @click="login" title="login">&#xe621; 未登录</span>
    <!-- <el-avatar src="@/static/imgs/empty.webp"></el-avatar> -->
    <span class="iconfont" @click="close" title="close">&#xe664;</span>
    <span class="iconfont" @click="all" title="all">&#xe620;</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo:null
    }
  },
  mounted(){
    let _this = this;
    console.log(this.$store.state.userInfo);
    this.$bus.$on("login",function(data){
      console.log("获得login数据");
      _this.userInfo = data;
    })
  },
  methods:{
    login(){
      console.log("login")
      this.$bus.$emit("show-login",true)
      
    },
    all(){
        document.documentElement.webkitRequestFullScreen();
    },
    close(){
        document.exitFullscreen();
    }
    }
}
</script>

<style scoped>
.right{
  height: 100%;
  line-height: 100%;
  margin-right: 20px;
}
.right span{
  margin-right: 20px;
}
.right span:hover{
    cursor: pointer;
}
.el-avatar{
  vertical-align: middle;
}
.nickname{
  align-items: baseline;
}
</style>