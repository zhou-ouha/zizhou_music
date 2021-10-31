<template>
    <div id="header">
        <span class="title">@子洲@</span>
        <div class="main">
            <div class="left">
                <span class="iconfont icon" @click="back">&#xe605;</span>
                <span class="iconfont icon" @click="forward">&#xe633;</span>
                <el-input
                  placeholder="搜索"
                  prefix-icon="el-icon-search"
                  v-model="input2"
                  size="mini"
                  class="mr-left"
                >
                </el-input>
            </div>
            <div class="right">
                <span class="iconfont" @click="login" title="login">&#xe613;</span>
                <span class="iconfont" @click="close" title="close">&#xe664;</span>
                <span class="iconfont" @click="all" title="all">&#xe620;</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return {
            input2:''
        }
    },
    methods:{
        back(){
            console.log("back")
            this.$router.back();
        },
        forward(){
            console.log("forward")
            this.$router.forward();
        },
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
#header{
    width: 100%;
    height: 9vh;
    background-color: rgba(124, 124, 124, 0.829);
    margin: 0 auto;
    text-align: center;
    line-height: 8vh;
    color: #fff;
}
#header .title{
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
}
#header .main{
    width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
}
.left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon{
    margin: 16px;
    line-height: 18px;
    border-radius: 20px;
    background-color: rgb(190, 187, 187);
}
.icon:hover{
    cursor: pointer;
}
.mr-left{
    margin-left: 66px;
}
.right span{
    margin: 16px;
    line-height: 18px;
    border-radius: 20px;
}
.right span:hover{
    cursor: pointer;
}
</style>