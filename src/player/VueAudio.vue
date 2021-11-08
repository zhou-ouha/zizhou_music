<template>
  <div id="audioBody">
    <div class="detail">
      <!-- 向封面组件传递整体数据，歌曲切换与封面切换准确性更高 -->
    <PlayerImg :song="playList[currentIndex]"></PlayerImg>
    </div>
    <audio ref="audio"
            autoplay
            @pause="onPause"
            @play="onPlay"
            @ended="musicEnded"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
            :src="getSrc"></audio>
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
    <div class="volume">
      <div class="volIcon">
        <span class="iconfont" @click="toggleVolume" v-show="isVolume">&#xe794;</span>
        <span class="iconfont" @click="toggleVolume" v-show="!isVolume">&#xe62d;</span>
      </div>
      <div class="vol">
        <el-slider
          v-model="sliderVol" 
          :show-tooltip="false" 
          @change="changeCurrentVol" 
          class="volSlider" ></el-slider>
      </div>
    </div>
    <!-- 工具 -->
    <div class="playerTool">
      <div class="playerSchema" @click="toggleSchema">
        <a href="#" title="列表循环" v-show="schemaIndex === 0"><i class="iconfont">&#xe66c;</i></a>
        <a href="#" title="随机播放" v-show="schemaIndex === 1"><i class="iconfont">&#xe611;</i></a>
        <a href="#" title="单曲循环" v-show="schemaIndex === 2"><i class="iconfont">&#xe66d;</i></a>
      </div>
      <div class="lyric" @click="toggleLyric">
        <a href="#" title="歌词"><i class="iconfont">&#xe603;</i></a>
      </div>
      <div class="list" @click="toggleList">
        <a href="#" title="播放列表"><i class="iconfont">&#xe6a7;</i></a>
      </div>
    </div>
    <!-- 列表 -->
    <CurrentList 
      :musicList="list"
      :showList="showList"
      :currentIndex="currentIndex"
    />
    <!-- 歌词 -->
    <lyric
      :lyric="lyric"
      :currentTime="audio.currentTime"
      v-show="showLyric"
    />
  </div>
</template>

<script>
import http from '@/network/http'
import realFormatSecond from '@/util/tool/realFormatSecond.js'
import PlayerImg from '@/player/PlayerImg'
import CurrentList from '@/player/CurrentList'
import Lyric from './Lyric.vue'
export default {
  components:{
      PlayerImg,
      CurrentList,
      Lyric
  },
  computed:{
    getSrc(){
      return ((this.playList[this.currentIndex] && this.playList[this.currentIndex].sec) || "")
    }
  },
  data () {
    return {
      playList:[],
      id:null,
      musicList:[],
      currentIndex:0,
      isVolume:false,
      preVolume:0,
      schemaIndex:0,
      sliderTime:0,
      sliderVol:100,
      audio: {
          // 该字段是音频是否处于播放状态的属性
          playing: false,
          // 音频当前播放时长
          currentTime: 0,
          // 音频最大播放时长
          maxTime: 0
      },
      showList:false,
      list:[],
      lyric:null,//歌词
      showLyric:false,
    }
  },
  mounted(){
    // this.getTotalMenu();
    this.$bus.$on("playMusic",(playList,index,musicList,id)=>{
      this.id = id;
      this.musicList = musicList;
      this.list = musicList;
      this.playList = playList;
      let transferList = [];
      console.log(playList)
      transferList = playList.filter(item => {
        return item.sec;
      })
      transferList = transferList.sort((a,b)=>a.index - b.index);
      this.playList = transferList;
      this.setCurrentIndex(index);
      console.log("配置完成")
    });
    this.$bus.$on("PlayMusicListItem",index=>{
      this.setCurrentIndex(index);
    })
    // this.play();
  },
  methods: {
      /**上下切换音乐 */
      // 上一首
      forwardMusic(){
        if(this.currentIndex <= 0) this.currentIndex = this.playList.length - 1;
        else this.currentIndex --;
        this.$refs.audio.src = this.playList[this.currentIndex].src;
      },
      // 下一首
      nextMusic(){
        if(this.currentIndex >= this.playList.length - 1) this.currentIndex = 0;
        else this.currentIndex ++;
        this.$refs.audio.src = this.playList[this.currentIndex].src;
      },
      // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
      changeCurrentTime(index) {
          this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
      },
      // 音量进度条参数必须是0到1之间的数值
      changeCurrentVol(index) {
        //index和this.sliderVol相同
        this.$refs.audio.volume = this.sliderVol / 100
      },
      /**切换音乐禁音与解除静音 */
      toggleVolume(){
        this.isVolume = !this.isVolume
        if(this.isVolume){//改成静音时，即isVolume由false变成true时
          // 保存之前的音量
          this.preVolume = this.sliderVol
          // 当前音量清0
          this.$refs.audio.volume = 0.0
          this.sliderVol = 0
        }else{//切换成有音量时
          this.$refs.audio.volume = this.preVolume / 100
          this.sliderVol = this.preVolume
        }
      },
      toggleSchema(){
        if(this.schemaIndex >= 2) this.schemaIndex = 0;
        else this.schemaIndex ++;
      },
      /**音乐的播放暂停 */
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
          this.audio.playing = true;
          this.$http.getLyric(this.playList[this.currentIndex].id).then((res)=>{
            this.lyric = (res.data.lrc && res.data.lrc.lyric) || '暂无歌词';
            // console.log(this.lyric);
          })
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
      /**监听音乐播放结束后的操作 */
      // 判断播放结束后是哪种播放模式
      musicEnded(){
        console.log("ended:",this.schemaIndex)
        switch(this.schemaIndex){
          case 0:
            this.currentIndex >= this.playList.length - 1
            ? 0
            : this.currentIndex ++;
            break;
          case 1:
            this.currentIndex = Math.floor(Math.random ()* this.playList.length);
            console.log(this.currentIndex)
            break;
          case 2:
            // 直接设置当前index不变，会因为computed缓存，导致不播放
            this.currentIndex = this.currentIndex;
            this.changeCurrentTime(0);
            this.play();
            break;
        }
      },
      toggleLyric(){
        this.showLyric = !this.showLyric;
      },
      /**设置当前要播放的音乐 */
      setCurrentIndex(index){
        for(let i in this.playList){
          if(this.playList[i].index == index){
            this.currentIndex = i;
            break;
          }
        }
      },
      toggleList(){
        this.$bus.$emit("showList",{
          showList:true,
          playList:this.playList
        });
      }
      
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
  justify-content: space-around;
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
  width: 50vw;
  display: inline-block;
  margin-left: 2vw;
}
.volume{
  width: 150px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.vol{
  flex: 1;
  padding-left: 15px;
}

.playerTool{
  width: 200px;
  height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 10px;
}
.playerTool .playerSchema{
  width: calc(33%);
  height: 16px;
}
.playerTool .lyric{
  width: calc(33%);
  height: 16px;
}
.playerTool .list{
  width: calc(33%);
  height: 16px;
}
</style>
