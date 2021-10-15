<template>
  <div class="playerimg">
      <img src="@/static/imgs/empty.webp" alt="" v-if="!src">
      <img :src="src" v-else>
      <div>
        {{musicName}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            require:true,
            default:''
        },
        musicName:{
            type:String,
            require:true,
            default:''
        }
    }
}
</script>

<style scoped>
.playerimg img{
  width: 60px;
  height: auto;
}
.playerimg div{
  width: 10vw;
  position: absolute;
  top: 0;
  left: 66px;
  font-size: 12px;
  color: #333;
}
</style>