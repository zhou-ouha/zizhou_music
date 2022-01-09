<template>
  <div class="playerimg">
      <img :src="song.pic || song.picUrl" alt="" v-if="song" @click="showPure">
      <img src="@/static/imgs/empty.webp" alt="" v-else>
      <div v-if="song" class="title">
        <span class="one">{{song.name}}</span><span class="two">{{song.name}}</span>
      </div>
      <div v-if="song" class="artist">{{song.artist}}</div>
  </div>
</template>

<script>
export default {
    props:{
        song:{
          type:Object,
          default:() => {}
        }
    },
    methods:{
      showPure(){
        this.$bus.$emit("toggle-pure",this.song);
      }
    },
    created(){
      console.log(this.song)
    },
    watch:{
      song:function(newVal,oldVal){
        this.$bus.$emit("change-song",newVal);
      }
    }
}
</script>

<style scoped>
.playerimg{
  color: #fff;
}
.playerimg img{
  width: 60px;
  height: auto;
}
.playerimg img:hover{
  cursor: pointer;
}
.playerimg div{
  width: 10vw;
  height: 2vh;
  position: absolute;
  top: 0;
  left: 66px;
  font-size: 12px;
  
}
.title{
  position: relative;
  font-size: 26px;
  font-family: cursive;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title .one,.two{
  position: absolute;
}
.title .one{
  animation: moveOne 7s linear infinite;
}
.title .two{
  animation: moveTwo 7s linear infinite;
}
@keyframes moveOne {
    0% {
        left: 0;
    }
    100% {
        left: -120%;
    }
}

@keyframes moveTwo {
    0% {
        left: 120%;
    }
    100% {
        left: 0;
    }
}
.artist{
  margin-top: 2.5vh;
}
</style>