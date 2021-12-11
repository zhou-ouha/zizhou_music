<template>
  <div class="searchBySinger">
    <div>
      <div><img src="" alt=""></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBySinger",
  data() {
    return {};
  },
  methods: {
    //获取指定页数歌手
    getSongPage(offset, type) {
      this.$emit("get-search", offset, type);
    },
    //点击歌手跳转界面
    toArtistPage(id) {
      // this.$router.push("/musicHome/artistPage/" + id);
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
/* 当搜索不到时页面展示 */
.noSearch {
  display: grid;
  align-content: center;
  justify-content: center;
  width: 70vw;
  height: 60vh;
}
/* 每行歌曲样式 */

.songMesSin {
  position: relative;
  width: 100%;
  height: 150px;
  line-height: 150px;
  padding: 15px;
  /* opacity: 0.8; */
  cursor: pointer;
}

.songMesDou {
  position: relative;
  width: 100%;
  height: 150px;
  line-height: 150px;
  padding: 15px;
  /* opacity: 0.8; */
  background: #f9f9f9;
  cursor: pointer;
}

.songMesSin:hover,
.songMesDou:hover {
  background: #f4f4f4;
}
/* 歌手名 */
.singerName {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 30px;
  font-weight: 400;
}
</style>
