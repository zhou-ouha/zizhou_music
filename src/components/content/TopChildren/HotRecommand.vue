<template>
  <div>
    <div class="card" v-show="isSearch">
      <el-card>
        <div class="item" v-show="songs">
          <span>单曲</span>
          <div v-for="(item,index1) in songs" :key="index1+'songs'">
            {{ item.name }}——{{ item.artists[0].name }}
          </div>
        </div>
        <div class="item" v-show="albums">
          <span>专辑</span>
          <div v-for="(item,index2) in albums" :key="index2+'albums'">
            {{ item.name }}——{{ item.artist.name }}
          </div>
        </div>
        <div class="item" v-show="playlists">
          <span>歌单</span>
          <div v-for="(item,index3) in playlists" :key="index3+'playlists'">
            {{ item.name }}
          </div>
        </div>
        <div class="item" v-show="artists">
          <span>歌手</span>
          <div v-for="(item,index4) in artists" :key="index4+'artists'">
            {{ item.name }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import debounce from "@/util/tool/debounce"
export default {
  props:{
    isSearch:{
      type:Boolean,
      default:false
    },
    keywords:{
      type:String
    }
  },
  data(){
    return {
      albums: [], //专辑列表
      artists: [], //歌手列表
      playlists: [], //歌单列表
      songs: [], //单曲列表
      musicList: [], //歌曲列表，单曲播放用
    }
  },
  methods:{
    suggest:debounce(
        async function(){
          let res = await this.$http.search(this.keywords)
          console.log(res)
          const { albums, artists, playlists, songs } = res.data.result;
          this.albums = albums;
          this.artists = artists;
          this.playlists = playlists;
          this.songs = songs;
      },500
    )
  },
  watch:{
    keywords:{
      handler(){
        this.suggest();
      },
      immediate:false
    }
  }
}
</script>

<style scoped>
.el-card{
  overflow: hidden;
}
.card{
  /* background-color: antiquewhite; */
  position: absolute;
  z-index: 999;
  top: 6.2vh;
  left: 0;
  width: 200%;
  /* height: 50vh; */
}
.item{
  /* background-color: blue; */
  text-align: start;
  line-height: 4vh;
  color: rgb(0, 204, 255);
}
.item span{
  background-color: rgb(251, 255, 0);
  border-radius: 35%;
  color: rgb(3, 3, 3);
  font-size: 17px;
}
.item div{
  margin-left: 3vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item div:hover{
  color: red;
  cursor: pointer;
}
</style>