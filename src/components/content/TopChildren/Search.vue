<template>
  <div class="left">
    <span class="iconfont icon" @click="back">&#xe605;</span>
    <span class="iconfont icon" @click="forward">&#xe633;</span>
    <div class="search">
      <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        v-model="keywords"
        size="mini"
        class="mr-left"
      >
      </el-input>
      <HotRecommand :isSearch="isSearch" :keywords="keywords"></HotRecommand>
    </div>
    
  </div>
</template>

<script>
import HotRecommand from '@/components/content/TopChildren/HotRecommand'
export default {
  components:{
    HotRecommand
  },
  data(){
    return {
      keywords:'',
      isSearch:false
    }
  },
  methods:{
    back(){
      console.log("back")
      this.$router.back();
    },
    forward(){
      console.log("forward")
      this.$router.forward();
    },
  },
  watch:{
    keywords(){
      if(this.keywords != "" && !this.isSearch){
        this.isSearch = true;
      }
      if(this.keywords == "" && this.isSearch){
        this.isSearch = false
      }
    }
  }
}
</script>

<style scoped>
.left{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.icon{
    margin: 16px;
    line-height: 18px;
    border-radius: 20px;
    background-color: rgb(190, 187, 187);
}
.icon:hover{
    cursor: pointer;
}
/* .mr-left{
    margin-left: 66px;
} */
.search{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>