<template>
    <div class="plat">
        <!-- 轮播图 -->
        <div>
            <el-carousel :interval="4000" type="card" height="24vh" arrow="never">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 推荐歌单 -->
        <div>
            <div class="">推荐歌单<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
            <div class="imgCard">
                <div v-for="i in 10">
                    <img :src="url" alt="">
                    <span>{{"图片" + i}}</span>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            url:'https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg'
        }
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
.imgCard{
    padding: 2vh 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
</style>