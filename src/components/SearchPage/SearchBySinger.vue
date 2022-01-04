<template>
  <div>
    <div v-if="songAll.songList"  class="searchBySinger">
      <div 
        v-for="(item, index) in songAll.singerList"
        class="singerBox"
        @click="toArtistPage(item.id)"
      >
        <img :src="item.picUrl" alt="" style="width:200px;height:200px;">
        <div>{{item.name}}</div>
        <!-- {{songAll}} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBySinger",
  props:["songAll"],
  data() {
    return {};
  },
  methods: {
    //获取指定页数歌手
    // getSongPage(offset, type) {
    //   this.$emit("get-search", offset, type);
    // },
    //点击歌手跳转界面
    toArtistPage(id) {
      this.$router.push("/musicHome/artistPage/" + id);
    },
  },
  created() {
    this.$bus.$on("get-search",(data)=>{
      this.getSongPage(0, "Singer");
    })
    
  },
};
</script>

<style scoped>
.searchBySinger{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
}
.singerBox{
  width: calc(100% / 5 - 1vw);
  margin: 10px 0;
  text-align: center;
  color: #fff;
}
.singerBox:hover{
  cursor: pointer;
}
.singerBox img{
  border-radius: 10px;
}
</style>
