<template>
    <div id="right">
      <el-scrollbar ref="scrollMenuRef" style="height:100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
</template>

<script>
import throttle from '@/util/tool/throttle.js'
export default {
  mounted(){
    this.$bus.$on("scroll",()=>{
      this.$refs.scrollMenuRef.wrap.scrollTop = 0;
    })
    this.$refs.scrollMenuRef.wrap.addEventListener("scroll", throttle(this.isScrollFunc,100,true));
  },
  data(){
    return {
    }
  },
  methods:{
    isScrollFunc(){
      if(this.$refs.scrollMenuRef.wrap.scrollTop > 0){
        this.isScroll = true;
      }else{
        this.isScroll = false;
      }
    }
  }
}
</script>

<style scoped>
#right{
  width: 88%;
  height: calc(100vh - 19vh);
  background-color: rgba(10, 10, 10, 0.726);
  overflow: hidden;
}
</style>