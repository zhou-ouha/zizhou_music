<template>
  <div>
    <div class="searchHeader">
      <SearchTab :tabName="tabName" :tabPath="tabPath"/>
    </div>
    <div>
      <keep-alive>
        <router-view 
          id="secondRoute"
          :songAll="songAll"
          @getSongPage="getSongPage"
          ref="songPage"
        ></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SearchTab from '@/components/SearchPage/SearchTab.vue'
import {Song} from "@/components/SearchPage/initSongs"
export default {
  components:{
    SearchTab
  },
  mounted(){
    // this.$bus.$on("get-search",(data)=>{
    //   this.searchInfo = data;
    //   console.log(this.searchInfo);
    //   this.search(0,"Song");
    // })
    console.log("我注册了！");
    this.$bus.$on("searchyixia",(data)=>{
      console.log("收到search的数据！！！");
      console.log(data);
      this.searchInfo = data;
      this.getSongPage(0,"Song");
      this.getSongPage(0,"Singer");
      this.getSongPage(0,"Album");
      this.getSongPage(0,"Video");
      this.getSongPage(0,"menuList");
    })
  },
  data(){
    return {
      tabName:["单曲","歌手","专辑","视频","歌单"],
      tabPath:["SearchBySong","SearchBySinger","searchByAlbum","SearchByVideo","searchBySongList"],
      type:["Song","Singer","Video","menuList"],
      songAll:{
        songList:[],
        artistList:[],
        albumList:[],
        videoList:[],
        menuList:[]
      },
      searchInfo:''
    }
  },
  methods:{
    getData(offset, type){
      this.getSongPage(offset, type);
    },
    getSongPage(offset,type){
      // 数据清空
      this.songAll.songList = [];
      this.songAll.singerList = [];
      this.songAll.albumList = [];
      this.songAll.videoList = [];
      this.songAll.menuList = [];
      switch (type) {
        //请求单曲数据
        case "Song":
          console.log("请求数据")
          this.$http.getSearch({
              params: {
                keywords: this.searchInfo,
                type: 1,
                limit: 20,
                offset: offset * 20,
              },
            }).then(res=>{
              console.log(res);
              let len = res.data.result.songs.length;
              this.songAll.songCount = res.data.result.songCount;
              for(let i = 0;i < len;i ++){
                let song = new Song(res.data.result.songs[i]);
                this.songAll.songList.push(song);
              }
              console.log(this.songAll);
            })
          break;
        //请求歌手数据
        case "Singer":
          this.$http.getSearch({
              params: {
                keywords: this.searchInfo.trim(),
                type: 100,
                limit: 20,
                offset: offset * 20,
              },
            }).then((res) => {
              console.log(res.data.result);
              this.songAll.singerCount = res.data.result.artistCount;
              this.songAll.singerList = res.data.result.artists;
              console.log(this.songAll);
              // this.$store.dispatch("changeIsLoading", false);
            });
          break;
        //请求专辑数据
        case "Album":
          this.$http.getSearch({
              params: {
                keywords: this.searchInfo.trim(),
                type: 10,
                limit: 20,
                offset: offset * 20,
              },
            })
            .then((res) => {
              console.log(res.data.result);
              this.songAll.albumCount = res.data.result.albumCount;
              this.songAll.albumList = res.data.result.albums;
              // this.$store.dispatch("changeIsLoading", false);
            });
          break;
        //请求视频数据
        case "Video":
          this.$http.getSearch({
              params: {
                keywords: this.searchInfo.trim(),
                type: 1014,
                limit: 24,
                offset: offset * 24,
              },
            })
            .then((res) => {
              console.log(res.data.result);
              this.songAll.videoCount = res.data.result.videoCount;
              this.songAll.videoList = res.data.result.videos;
              // this.$store.dispatch("changeIsLoading", false);
            });
          break;
        // 请求歌单数据
        case "menuList":
          this.$http.getSearch({
              params: {
                keywords: this.searchInfo.trim(),
                type: 1000,
                limit: 20,
                offset: offset * 20,
              },
            })
            .then((res) => {
              console.log(res.data.result);
              this.songAll.menuListCount = res.data.result.playlistCount;
              this.songAll.menuList = res.data.result.playlists;
              // this.$store.dispatch("changeIsLoading", false);
            });
          break;
      }
    }
  }
}
</script>

<style scoped>
.searchHeader{
  width: 80%;
  height: 25px;
  margin: 0 auto 10vh;
}
</style>