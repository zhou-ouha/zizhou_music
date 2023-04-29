<template>
  <div>
    <div class="card" v-show="isSearch">
      <div class="box">
        <div class="item" v-if="songs">
          <span>单曲 :</span>
          <div v-for="(item,index1) in songs" :key="index1+'songs'">
            {{ item.name }}——{{ item.artists[0].name }}
          </div>
        </div>
        <div class="item" v-if="albums">
          <span>专辑 :</span>
          <div v-for="(item,index2) in albums" :key="index2+'albums'">
            {{ item.name }}——{{ item.artist.name }}
          </div>
        </div>
        <div class="item" v-if="playlists">
          <span>歌单 :</span>
          <div v-for="(item,index3) in playlists" :key="index3+'playlists'">
            {{ item.name }}
          </div>
        </div>
        <div class="item" v-if="artists">
          <span>歌手 :</span>
          <div v-for="(item,index4) in artists" :key="index4+'artists'">
            {{ item.name }}
          </div>
        </div>
      </div>
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
          const { albums = [], artists = [], playlists = [], songs = [] } = res.data.result;
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
  position: absolute;
  z-index: 999;
  top: 6.2vh;
  left: 0;
  width: 200%;
}
.box{
  border: 1px solid rgb(128, 128, 128);
  border-radius: 10px;
  background-color: rgb(128, 128, 128);
}
.item{
  font-weight: bolder;
  text-align: start;
  line-height: 4vh;
  color: #fff;
  margin: 4px 0;
}
.item span{
  border-radius: 35%;
  color: #fff;
  margin-left: 8px;
  font-size: 17px;
  font-weight: normal;
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