<template>
  <div>
    <el-scrollbar style="height:81vh" ref="scroll">
      <div class="main">
        <div class="back-img">
          <img src="" alt="">
        </div>
        <div class="disc">
          <!-- 转轴 -->
          <div class="bar">
            <span class="dot">·</span>
            <img 
            src="@/static/imgs/play-bar.png" 
            :class="{'activeBar':this.$store.state.isPlay == true,
            'pauseBar':this.$store.state.isPlay == false,}"
            >
          </div>
          <!-- 唱片 -->
          <div class="sing-box">
            <!-- 唱片外壳 -->
            <img 
              src="@/static/imgs/disc.png" 
              class="outter-box"
              :class="{'rotateActive':this.$store.state.isPlay == true}"
            >
            <!-- 唱片图片 -->
            <img 
              :src="song.pic || song.picUrl" 
              class="sing-img" v-if="song"
              :class="{'rotateActive':this.$store.state.isPlay == true}"
            >
          </div>
        </div>
        <div class="lyric">
          <div class="songName">
            <div style="font-weight:bolder;font-size:22px;">{{songDetail.name}}</div>
            <span style="color:#fff; margin-top:'10px'">{{songDetail.artist}}-{{songDetail.name}}</span>
          </div>
          <pureLyric
            :lyric="lyric"
            :currentTime="currentTime"
          />
        </div>
      </div>
      <div class="comments">
        <Comment/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import pureLyric from "./pureLyric.vue"
import Comment from "@/components/content/Detail/Comment.vue"
export default {
  components:{pureLyric,Comment},
  props:{
    song:{
      type:Object,
      default:{}
    },
    lyric:{},
    currentTime:{}
  },
  data(){
    return {
      songDetail:{
        name:" ",
        artist:" "
      },
      hot:[],
      otherComments:[]
    }
  },
  created(){
    console.log("purepage");
  },
  methods:{
    async getLyric(id){
      const {data:res} = await this.$http.getMusicComments(id);
      this.hot.splice(0);
      this.otherComments.splice(0);
      this.hot = res.hotComments;
      this.otherComments = res.comments;
      this.$bus.$emit("send-data",
        {
          hot:this.hot,
          comments:this.otherComments
        }
      )
      console.log(this.hot);
    }
  },
  watch:{
    song:function(newVal,oldVal){
      if(newVal != null || newVal != oldVal){
        this.songDetail = newVal;
        this.getLyric(this.songDetail.id);
      }else{
        this.songDetail.name = ' ';
        this.songDetail.artist = ' ';
      }
    }
  }
}
</script>

<style scoped>
.main{
  display: flex;
  position:relative;
  justify-content: space-around;
}
.disc{
  width: 25%;
  margin-left: 28px;
  position: relative;
}
.disc .bar,.sing-box{
  position: absolute;
}
.bar{
  top: 15px;
  left: 238px;
  z-index: 99;
}
.bar img{
  width:90px;height:auto;
  transform-origin: top left;
  transform: rotate(-18deg);
}
.activeBar{
  /* transform: rotate(12deg) !important; */
  animation: moveBar1 .7s linear;
  animation-fill-mode: forwards;
}
.pauseBar{
  animation: moveBar2 .7s linear;
  animation-fill-mode: forwards;
}
@keyframes moveBar1{
  from {
    transform: rotate(-18deg);
  }
  to{
    transform: rotate(12deg);
  }
}
@keyframes moveBar2{
  from {
    transform: rotate(12deg);
  }
  to{
    transform: rotate(-18deg);
  }
}
.bar .dot{
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 16px;
  font-size: 20px;
  border-radius: 50%;
  top: -3px;
  left: -3px;
  z-index: 100;
  background-color: rgb(255, 255, 255);
}
.sing-box{
  top: 100px;
  left: 60px;
}
.sing-box .outter-box{
  width: 320px;
  height: 320px;
  position: absolute;
}
.rotateActive{
  animation-play-state: running; 
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotatePause{
  animation-play-state: paused; 
} 
.sing-box .sing-img{
    width: 175px;
    height: 175px;
    border-radius: 50%;
    position: absolute;
    top: 72px;
    left: 74px;
}
.lyric{
  width: 50%;
  height: 300px;
  margin-right: 100px;
}
.songName{
  text-align: center;
  margin-bottom: 10px;
}

.comments{
  /* background-color: rgba(124, 124, 124, 0.829); */
  margin-top: 500px;
}

</style>