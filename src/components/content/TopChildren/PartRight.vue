<template>
  <div class="right">
    <span class="iconfont" @click="login" title="login">&#xe613;</span>
    <span class="iconfont" @click="close" title="close">&#xe664;</span>
    <span class="iconfont" @click="all" title="all">&#xe620;</span>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
        console.log("login")
    },
    all(){
        document.documentElement.webkitRequestFullScreen();
    },
    close(){
        document.exitFullscreen();
    }
    }
}
</script>

<style scoped>
.right span{
    margin: 16px;
    line-height: 18px;
    border-radius: 20px;
}
.right span:hover{
    cursor: pointer;
}
</style>