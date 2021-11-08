<template>
    <div>
        <div class="more">推荐歌单<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
        <div>
            <div class="imgCard commonBox">
                <div 
                  v-for="(item,index) in recommandUrl" 
                  :key="index"
                  @click="getDetail(index)"
                >
                <img :src="item.picUrl" alt="">
                <span class="menuName" style="font-size:.5em;">{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        recommandUrl:{
            type:Array,
            required:true,
            default:[]
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        getDetail(index){
            this.$router.push('/MenuDetail/id='+this.recommandUrl[index].id)
        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: transparent;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
}

.imgCard div{
    width: calc(100% / 5 - 1vw);
    height: auto;
    margin: 1.5vh .5vw;
    text-align: center;
}
.imgCard div:hover{
    cursor: pointer;
}
.imgCard img{
    width: 100%;
    height: auto;
    border-radius: 4px;
}
.menuName{
    display: inline-block;
    text-align: start;
}

</style>