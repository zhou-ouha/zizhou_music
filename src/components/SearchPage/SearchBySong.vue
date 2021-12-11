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
  props:["songAll"],
  mounted(){
    this.$bus.$on("wy",(data)=>{
      console.log("-----"+data);
    })
    console.log(this.songAll);
    this.search(0,"Song");
  },
  data(){
    return {
      searchInfo:'',
    }
  },
  methods:{
    search(offset,type){
      // this.$emit("search",offset,type)
    }
  }
}
</script>

<style>

</style>