<template>
    <div>
        <div class="more">独家放送<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
        <div class="onlyImg commonBox">
            <div v-for="(item,index) in onlyUrl" :key="index">
                <img :src="item.picUrl" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['onlyUrl']
}
</script>

<style scoped>
.onlyImg div{
    width: calc(100% / 3 - 2vw);
    height: auto;
    margin: 0 1vw;
    font-size: .5em;
    /* text-align: center; */
}
.onlyImg div:hover{
    cursor: pointer;
}
.onlyImg img{
    width: 100%;
    height: auto;
    border-radius: 4px;
}
</style>