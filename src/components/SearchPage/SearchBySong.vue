<template>
  <div>
    <detail-list 
      :list="songAll.songList"
    />
  </div>
</template>

<script>
import DetailList from '../content/Detail/DetailList.vue'

export default {
  components:{
    DetailList
  },
  props:["songAll","getSongPage"],
  created(){
    this.$bus.$on("wy",(data)=>{
      console.log("-----"+data);
    })
    console.log(this.songAll);
    
  },
  methods:{
    search(offset,type){
      this.$emit("getSongPage",offset,type)
    }
  },
  data(){
    return {
      searchInfo:this.$store.state.searchInfo,
    }
  },
  created(){
    this.search(0,"Song")
  }
}
</script>

<style>

</style>