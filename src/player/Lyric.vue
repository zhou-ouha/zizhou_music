<template>
  <div class="lyric" ref="card">
    
      <el-card class="box-card">
        <el-scrollbar style="height:10vh" ref="scroll">
        <div 
          class="text" :key="index"
          v-for="(line, index) in lyricArray" 
          v-show="lyricArray.length > 0"
          
        >
          <span
            class="content"
            :class="[index === lyricIndex ? 'active' : ' ']"
            ref="lists"
          >{{line[1]}}</span>
        </div>
        <div v-show="lyricArray.length === 0" class="text">还没播放歌曲</div>
        </el-scrollbar>
      </el-card>
    
  </div>
</template>

<script>
import {drag} from "@/util/tool/drag"
import {parseLyric} from "@/util/tool/parse-lyric"
export default {
  name:"Lyric",
  props:["lyric","currentTime"],
  data(){
    return {
      lyricArray:[],
      lyricIndex:-1,
      midIndex:0,
      length:0,
      isDrag:false,
      middle:false,
      scrollNum:5,
    }
  },
  mounted(){
    drag(this.$refs.card)
    console.log(parseLyric(this.lyric))
  },
  methods:{
    refresh(){
      this.$refs.scroll.refresh();
    }
  },
  watch:{
    lyric(){
      this.lyricArray = parseLyric(this.lyric);
      // this.$refs.scroll.wrap.scrollTop = 10;
    },
    currentTime(currentTime) {
      for (let i = 0; i < this.lyricArray.length; i++) {
        const line = this.lyricArray[i];
        const nextLine = this.lyricArray[i + 1];
        if (currentTime >= line[0] &&(!nextLine || currentTime < nextLine[0])) {
          this.lyricIndex = i;
          this.$refs.scroll.wrap.scrollTop = (i - 1) * 26.4;
        }
      }
    },
  }
}
</script>

<style scoped>
.lyric{
  position: absolute;
  top: -80px;
  left: 20vw;
}

.text {
  height: 26.4px;
  overflow: hidden;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}
.content{
  opacity: 0.15;
}
.box-card {
  width: 35vw;
  height: 13vh;
  overflow: hidden;
}
.active{
  color: #FE3C32;
  opacity: 1;
  /* font-size: 30px; */
}
</style>
</style>