<template>
  <div class="lyric" ref="card">
    <el-scrollbar style="height:60vh" ref="scroll">
      <div v-for="(item,index) in 6" class="text" :key="index+'item1'"></div>
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
      <div v-for="(item,index) in 6" class="text" :key="index+'item2'"></div>
    </el-scrollbar>
  </div>
</template>

<script>
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
    // drag(this.$refs.card)
    // console.log(parseLyric(this.lyric))
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
}

.text {
  height: 26.4px;
  overflow: hidden;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}
.content{
  color: #000;
  letter-spacing: 5px;
  opacity: 0.3;
}
.box-card {
  width: 100%;
}
.active{
  color: #00eaff;
  text-shadow: 1px 1px rgb(0, 140, 255);
  opacity: 1;
}
</style>