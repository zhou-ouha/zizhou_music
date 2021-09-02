<template>
    <div class="plat">
        <!-- 轮播图 -->
        <div>
            <el-carousel :interval="4000" type="card" height="24vh" arrow="never">
                <el-carousel-item v-for="(item,index) in bannerUrl" :key="index">
                <img :src="item.imageUrl" alt="" height="100%" width="auto">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 推荐歌单 -->
        <div>
            <div class="more">推荐歌单<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
            <div class="imgCard commandBox">
                <div v-for="(item,index) in recommandUrl" :key="index">
                    <img :src="item.picUrl" alt="">
                    <span style="font-size:.5em">{{item.name}}</span>
                </div>

            </div>
        </div>
        <!-- 独家放送 -->
        <div>
            <div class="more">独家放送<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
            <div class="onlyImg commandBox">
                <div v-for="(item,index) in onlyUrl" :key="index">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <!-- 最新音乐 -->
        <div>
            <div class="more">最新音乐<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
            <div class="latestMusic commandBox">
                <div v-for="(item,index) in newSong" :key="index">
                    <div>
                        <div class="left">
                            <img :src="item.picUrl" alt=""><div class="playIcon"></div>
                        </div>
                        <div class="right">
                            <div class="musicName">{{item.name}}</div>
                            <!-- <div class="author">{{"作者:" + item.song.artists[0].name}}</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 推荐MV -->
        <div>
            <div class="more">推荐MV<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
            <div class="MV commandBox">
                <div v-for="(item,index) in 4">
                    <img :src="url" alt="">
                    <span>{{"推荐MV" + index}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            url:'https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg',
            recommandUrl:[],
            bannerUrl:[],
            onlyUrl:[],
            newSong:[]
        }
    },
    mounted(){
        this.$http.getBanner().then(res=>{
            this.bannerUrl = res.data.banners
            console.log(this.bannerUrl)
        },err=>{

        })
        this.$http.getRecommandMenu().then(res=>{
            this.recommandUrl = res.data.result
            console.log(this.recommandUrl)
        },err=>{

        })

        this.$http.getOnly().then(res=>{
            this.onlyUrl = res.data.result
            console.log(this.onlyUrl)
        },err=>{

        })

        this.$http.getNewSong().then(res=>{
            this.newSong = res.data.result
            console.log(this.newSong)
        },err=>{

        })
    }
}
</script>
<style scoped>
.plat{
    padding: 0.5vh 6vw 0;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.more{
    color: #fff;
}
.commandBox{
    padding: 2vh 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fff;
}
.imgCard div{
    width: calc(100% / 5 - 1vw);
    height: auto;
    margin: 1.5vh .5vw;
    text-align: center;
}
.imgCard img{
    width: 100%;
    height: auto;
}
.onlyImg div{
    width: calc(100% / 3 - 2vw);
    height: auto;
    margin: 0 1vw;
    font-size: .5em;
    /* text-align: center; */
}
.onlyImg img{
    width: 100%;
    height: auto;
}
.latestMusic{
    width: 100%;
}
.latestMusic > div{
    width: calc(100% / 3);
    height: calc(100% / 4 - 2vw);
}
.latestMusic > div:hover{
    background-color: #99a9bf;
}
.latestMusic .left{
    float: left;
    width: calc(100% / 2 - 2vw);
    height: calc(100% / 4);
}
.latestMusic .right{
    float: left;
    width: calc(100% / 2 - 2vw);
    height: calc(100% / 4);
}
.latestMusic img{
    width: 5vw;
}
.MV div{
    width: calc(100% / 4 - 2vw);
    height: auto;
    margin: 0 1vw;
    text-align: center;
}
.MV img{
    width: 100%;
    height: auto;
}
</style>