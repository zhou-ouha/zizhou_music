<template>
  <div>
    <div v-if="songAll.songList"  class="searchByVideo">
      <div 
        v-for="(item, index) in songAll.videoList"
        class="videoBox"
        @click="toVideoPage(item.vid)"
      >
        <img :src="item.coverUrl" alt="" style="width:400px;height:225px;">
        <div class="title">{{item.title}}</div>
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
    //点击视频跳转界面
    toVideoPage(id) {
      this.$router.push("/musicHome/videoPage/" + id);
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
.searchByVideo{
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
}
.videoBox{
  width: calc(100% / 3 - 1vw);
  margin: 20px 0;
  text-align: center;
  color: #fff;
}
.videoBox:hover{
  cursor: pointer;
}
.videoBox img{
  border-radius: 10px;
}
.videoBox .title{
  width: 100%;
  text-overflow: ellipsis;
}
</style>
