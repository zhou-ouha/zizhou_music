<template>
    <div>
        <div class="more">推荐MV<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
        <div class="MV commonBox">
            <div v-for="(item,index) in recommandMV">
                <img :src="item.picUrl" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["recommandMV"]
}
</script>

<style scoped>
.MV div{
    width: calc(100% / 4 - 2vw);
    height: auto;
    margin: 0 1vw;
    text-align: center;
    font-size: 12px;
}
.MV img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.MV div{
    cursor: pointer;
}
</style>