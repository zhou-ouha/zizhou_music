<template>
  <div class="playerimg">
      <img :src="song.pic || song.picUrl" alt="" v-if="song">
      <img src="@/static/imgs/empty.webp" alt="" v-else>
      <div v-if="song">
        {{song.name}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        song:{
          type:Object,
          default:() => {}
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