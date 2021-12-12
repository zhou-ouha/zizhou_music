<template>
    <div>
        <div class="more">最新音乐<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
        <div class="latestMusic commonBox">
            <div v-for="(item,index) in newSong" :key="index"  class="newSongBox">
                    <div class="left">
                        <img :src="item.picUrl" alt=""><div class="playIcon"></div>
                    </div>
                    <div class="right">
                        <div class="musicName">{{item.name}}</div>
                        <div class="author">{{item.song.artists[0].name}}</div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['newSong']
}
</script>

<style scoped>
.latestMusic{
    width: 100%;
    justify-content: space-around;
    margin-left: 1vw;
}
.latestMusic:hover{
    cursor: default;
}
.latestMusic > div{
    width: calc(100% / 3 - 1vw);
    height: calc(100% / 4);
    font-size: 12px;
    margin-right: .5vw;
}

.latestMusic .left{
    width: calc(100% / 5);
    float: left;
}
.latestMusic .left img{
    width: 100%;
    border-radius: 4px;
}
.latestMusic .right{
    width: 75%;
    float: right;
}
.latestMusic .right .author{
    margin-top: 2vh;
}
</style>