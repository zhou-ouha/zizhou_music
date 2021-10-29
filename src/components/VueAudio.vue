<template>
  <div id="audioBody">
    <div class="detail">
      <PlayerImg :src="imgUrl" :musicName="musicName"></PlayerImg>
    </div>
    <audio ref="audio"
            @pause="onPause"
            @play="onPlay"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
            :src="this.$store.state.currentMusicUrl"></audio>
    <!-- 音频播放控件 -->
    <div id="controls">
      <!-- 播放，上一首，下一首 -->
      <div class="playControls">
        <span class="iconfont forward" @click="forwardMusic">&#xeb06;</span>
        <span class="iconfont play" @click="startPlayOrPause" v-show="audio.playing == false">&#xe610;</span>
        <span class="iconfont play" @click="startPlayOrPause" v-show="audio.playing == true">&#xeb18;</span>
        <span class="iconfont next" @click="nextMusic">&#xeb07;</span>
      </div>
      <!-- 时间进度条 -->
      <div class="timeProgress">
        <span class="time">{{ audio.currentTime | formatSecond }}/{{ audio.maxTime | formatSecond }}</span>
        <el-slider 
        v-model="sliderTime" 
        :show-tooltip="false" 
        @change="changeCurrentTime" 
        class="slider"></el-slider>
      </div>
    </div>
    <!-- 音量 -->
    <div>
      <span class="iconfont" @click="getLyric">&#xe617;</span>
      <span class="iconfont menuList">&#xe6a7;</span>
      <span class="iconfont volIcon">&#xe62d;</span>
      <div class="vol">
        <el-slider vertical 
          v-model="sliderVol" 
          :show-tooltip="false" 
          @change="changeCurrentVol" 
          class="volSlider" ></el-slider>
      </div>
    </div>
    <!-- 音乐列表 -->
    <div>
      
    </div>
  </div>
</template>

<script>
// import http from '@/network/http'
import realFormatSecond from '@/util/tool/realFormatSecond.js'
import PlayerImg from '@/player/PlayerImg'
export default {
  components:{
      PlayerImg
  },
  data () {
    return {
      detail:'',
      // trackIds
      musicMenuIds:[],
      musicMenu:[],
      // music urls in the menu
      musicUrls:[],
      // current music index
      musicIndex:0,
      // current music index
      musicUrl:'',
      // img urls
      imgUrls:[],
      // current img url
      imgUrl:'',
      // music names
      names:[],
      // current music name
      musicName:'',
      // toggle the menuList
      menuShow:false,
      sliderTime:0,
      sliderVol:50,
      audio: {
          // 该字段是音频是否处于播放状态的属性
          playing: false,
          // 音频当前播放时长
          currentTime: 0,
          // 音频最大播放时长
          maxTime: 0
      },
    }
  },
  mounted(){
    // this.getTotalMenu();
  },
  methods: {
      // 上一首
      forwardMusic(){
        this.audio.playing = false
        if(this.$store.state.currentIndex > 0){
          // this.musicIndex --
          this.$store.commit('changeCurrentIndex','-');
        }else{
          // console.log("我是0号位置")
          this.musicIndex = this.musicUrls.length - 1;
          // console.log(this.musicUrls.length,this.$store.state.currentIndex)
        }
        this.imgUrl = this.imgUrls[this.$store.state.currentIndex];
        this.musicName = this.names[this.$store.state.currentIndex]
        // .slice(0,this.names[this.$store.state.currentIndex].indexOf("("))
        this.$refs.audio.src =  this.$store.state.urls[this.$store.state.currentIndex].url;
        this.$refs.audio.autoplay = true;
      },
      // 下一首
      nextMusic(){
        console.log(this.musicMenu)
        this.audio.playing = false
        // this.musicIndex ++
        this.$store.commit('changeCurrentIndex','+');
        console.log(this.$store.state.currentIndex)
        this.imgUrl = this.imgUrls[this.$store.state.currentIndex]
        // .slice(0,this.names[this.$store.state.currentIndex].indexOf("("))
        this.musicName = this.names[this.$store.state.currentIndex]
        this.$refs.audio.src =  this.$store.state.urls[this.$store.state.currentIndex].url
        console.log(this.$store.state.urls)
        this.$refs.audio.autoplay = true
      },
      // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
      changeCurrentTime(index) {
          this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
      },
      // 音量进度条参数必须是0到1之间的数值
      changeCurrentVol(index) {
          this.$refs.audio.volume = this.sliderVol / 100
      },
      // 控制音频的播放与暂停
      startPlayOrPause () {
          return this.audio.playing ? this.pause() : this.play()
      },
      // 播放音频
      play () {
          this.$refs.audio.play()
      },
      // 暂停音频
      pause () {
          this.$refs.audio.pause()
      },
      // 当音频播放
      onPlay () {
          this.audio.playing = true
      },
      // 当音频暂停
      onPause () {
          this.audio.playing = false
      },
      // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
      onTimeupdate(res) {
          // console.log('timeupdate')
          this.audio.currentTime = res.target.currentTime
          this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
      },
      // 当加载语音流元数据完成后，会触发该事件的回调函数
      // 语音元数据主要是语音的长度之类的数据
      onLoadedmetadata(res) {
          console.log('loadedmetadata')
          console.log(res)
          this.audio.maxTime = parseInt(res.target.duration)
      },
      async getLyric(){
        const {data:res} = await this.$http.getLyric(this.$store.state.ids[this.$store.state.currentIndex].id);
        console.log(res.lrc.lyric);
        let regx = /\[.........\]/g;
        let result = res.lrc.lyric.match(regx);
        console.log(result);
        console.log("maxTime------"+this.audio.maxTime)
      },
      
  },
  filters: {
      // 使用组件过滤器来动态改变按钮的显示
      transPlayPause(value) {
          return value ? '暂停' : '播放'
      },
      // 将整数转化成时分秒
      formatSecond(second = 0) {
          return realFormatSecond(second)
      }
  }
}
</script>
    
<style scoped>
#audioBody{
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
#controls{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box-card {
    width: 480px;
}
.detail{
  /* width: 10px;
  height: 10px; */
  position: relative;
  top: 2px;
  left: -12%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.playControls{
  margin-top: 1vh;
}
.timeProgress{
  position: relative;
  margin-top: -1vh;
}
.forward,.next{
  font-size: 30px;
  cursor: pointer;
  /* color: #fff; */
}
.play{
  font-size: 35px;
  margin: 2vw;
  cursor: pointer;
  /* color: #fff; */
}
.time{
  font-size: 12px;
  color: aliceblue;
  position: absolute;
  top: 10px;
  left: -60px;
}
.slider{
  width: 32vw;
  display: inline-block;
  margin-left: 2vw;
}
.vol{
  position: absolute!important;
  top: -90%;
  left: 100%;
  display: none;
  border: 1px solid #333;
  background-color: #333;
  border-radius: 10px;
  padding: 1vh 0;
}
.volIcon{
  position: absolute!important;
  top: 45%;
  left: 101%;
  font-size: 18px;
  cursor: pointer;
}
.volIcon:hover+.vol{
  display: block;
}
.vol:hover{
  display: block;
}
.volSlider{
  height: 10vh;
}
.menuList{
  position: absolute;
  top: 45%;
  left: 105%;
}
.menuList:hover{
  cursor: pointer;
  font-size: 16px;
}
/* .el-card{
  position: absolute;
  top: -65%;
  right: -12.5%;
} */
</style>
