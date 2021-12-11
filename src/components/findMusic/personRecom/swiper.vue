<template>
    <div>
        <el-carousel :interval="4000" type="card" height="24vh" arrow="never">
            <el-carousel-item v-for="(item,index) in bannerUrl" :key="index">
            <img 
              :src="item.imageUrl" 
              alt="menu" 
              width="100%" 
              height="100%">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    props:['bannerUrl']
}
</script>

<style scoped>
.el-carousel__mask {
    background-color: transparent;
}
</style>