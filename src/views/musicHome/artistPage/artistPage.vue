<template>
  <div>
    <!-- 详情 -->
    <div class="info">
      <el-image :src="info.cover"
      style="width:260px;height:260px;border-radius:10px;"
      ></el-image>
      <div class="infoMsg">
        <div 
          style="font-size:28px;font-weight:600;color:#fff;"
        >
          {{info.name}}
        </div>

        <el-button style="margin:10px 0;"><i class="iconfont icon_margin" style="margin-right:5px; ">&#xe64d;</i>收藏</el-button>

        <div>
          <span class="infoItem">单曲数:{{info.musicSize}}</span>
          <span class="infoItem">专辑数:{{info.albumSize}}</span>
          <span class="infoItem"> M V数:{{info.mvSize}}</span>
        </div>

        <div 
         :title="info.briefDesc"
         class="des"
        >
          {{info.briefDesc}}
        </div>
      </div>
    </div>
    <!-- tab -->
    <menuTab :mvCount="info.mvSize"/>
    <div>
      <!-- 专辑 -->
      <album
        v-show="activeIndex == '1'"
        :albums="albums"
      />
      <!-- mv -->
      <mv
        v-show="activeIndex == '2'"
        :mvs="mvs"
        :mvCount="info.mvSize"
      />
      <!-- 歌手描述 -->
      <detail v-show="activeIndex == '3'"
        :artistDesc="artistDesc"
      />
      <!-- 相似歌手 -->
      <similar v-show="activeIndex == '4'"
        :similars="similars"
      />
    </div>
  </div>
</template>

<script>
import menuTab from "@/components/artistPage/menuTab.vue"
import album from "@/components/artistPage/album.vue"
import mv from "@/components/artistPage/mv.vue"
import detail from "@/components/artistPage/detail.vue"
import similar from "@/components/artistPage/similar.vue"
export default {
  components:{
    menuTab,
    album,
    mv,
    detail,
    similar
  },
  data(){
    return {
      info:{},
      activeIndex:'1',
      albums:[],
      mvs:[],
      similars:[],
      artistDesc:{}
    }
  },
  mounted(){
    this.$bus.$on("changeActive",(data)=>{
      this.activeIndex = data;
    })
    this.getSingerDetail();
    this.getSingerAlbum();
    this.getSingerMv();
    this.getSingerSimilar();
    this.getSingerDes();
  },
  methods:{
    async getSingerDetail(){
      const {data:res} = await this.$http.getSingerDetail(this.$route.params.id);
      console.log(res);
      this.info = res.data.artist;
    },
    async getSingerDes(){
      const {data:res} = await this.$http.getSingerDes(this.$route.params.id);
      this.artistDesc = res;
    },
    async getSingerAlbum(){
      const {data:res} = await this.$http.getSingerAlbum(this.$route.params.id);
      this.albums = res.hotAlbums;
      console.log(this.albums);
    },
    async getSingerMv(){
      const {data:res} = await this.$http.getSingerMv(this.$route.params.id);
      this.mvs = res.mvs;
    },
    async getSingerSimilar(){
      const {data:res} = await this.$http.getSingerSimilar(this.$route.params.id);
      this.similars = res.artists;
    },
  },
  watch:{
    $route: function(newVal,oldVal){
      if(newVal.params.id != oldVal.params.id){
        this.getSingerDetail();
        this.getSingerAlbum();
        this.getSingerMv();
        this.getSingerSimilar();
        this.getSingerDes();
      }
    }
  }
}
</script>

<style scoped>
.info{
  margin-top: 2%;
  margin-left: 2%;
  display: flex;
}
.info .infoMsg{
  margin-left: 20px;
  width: 60%;
}
.infoMsg .infoItem{
  color: #fff;
  margin: 0 5px;
}
.infoMsg .des{
  width: 120%;
  margin: 5px 0;
  text-indent: 32px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6; 
  color: rgb(168, 168, 168);
}
</style>