<template>
  <div class="home">
    <TopHeader></TopHeader>
    <div id="main">
      <!-- 左侧菜单 -->
      <BodyLeft></BodyLeft>
      <BodyRight></BodyRight>
    </div>
    <MusicList></MusicList>   
    <BottomFooter></BottomFooter>
  </div>
</template>

<script>
// @ is an alias to /src

import MenuTab from '@/components/MenuTab'

export default {
  name: 'Home',
  components:{
    
  },
  mounted(){
    this.$refs.scrollMenuRef.wrap.addEventListener("scroll", throttle(this.isScrollFunc,100,true));
  },
  updated(){
    // console.log(this.toggle)
  },
  data() {
      return {
        
        
        // 是否滚动了
        
        // toggle:this.$store.state.toggle,
        //tab栏名称
        
        // 是否显示tab栏
        
        
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
  },
  methods:{
    
    async getUrl(index){
      console.log("我被双击了",this.$store.state.ids[index].id);
      this.currentMusicUrl = this.$store.state.urls[this.$store.state.currentIndex].url;
      this.$store.commit('getCurrentIndex',index);
      this.$store.commit('playCurrentMusic',this.currentMusicUrl);
    },
    
  },
  watch:{
    $router:{

    }
  }
}
</script>
<style scoped>



/* 
*/
</style>