<template>
    <div>
        <div class="more">推荐歌单<i class="iconfont" style="font-size:12px ">&#xe633;</i></div>
        <div>
            <div class="imgCard commonBox">
                <div 
                  v-for="(item,index) in recommandUrl" 
                  :key="index"
                  @click="getDetail(item.id)"
                >
                    <el-skeleton style="width: 100%" :loading="false" animated>
                        <template slot="template">
                            <el-skeleton-item
                            variant="image"
                            style="width: 200px; height: 200px;"
                            />
                            <div style="padding: 0;">
                                <!-- <el-skeleton-item variant="h3" style="width: 100%;" /> -->
                            </div>
                        </template>
                        <template>
                            <!-- 歌单封面 -->
                            <img :src="item.picUrl" alt="">
                            <!-- 播放数量 -->
                            <div class="playCount">
                                
                                <div>
                                    <i class="el-icon-headset" style="margin-right:4px;"></i>{{
                                        item.playCount >= 10000
                                        ? (item.playCount / 10000).toFixed(0) + "万"
                                        : item.playCount
                                    }}
                                </div>
                                
                            </div>
                            <!-- 歌单描述 -->
                            <span class="menuName" style="font-size:.5em;">{{item.name}}</span>
                        </template> 
                    </el-skeleton>
                    
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
            // 加载状态
            loading:true
        }
    },
    methods:{
        getDetail(id){
            this.$router.push('/musicHome/MenuDetail/id='+id)
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
    position: relative;
}
.imgCard div:hover{
    cursor: pointer;
}
.imgCard img{
    width: 100%;
    height: auto;
    border-radius: 4px;
}
.imgCard img+.playCount{
    display: none;
}
.imgCard div:hover .playCount{
    display: block;
    width: 100%;
    position: absolute;
    top: -3vh;
    left: -1vw;
    transition: all 1.2s;
}
/* .imgCard .playCount{
    width: 100%;
    position: absolute;
    top: -3vh;
    left: -1vw;
} */
.playCount div{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.287);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.menuName{
    display: inline-block;
    text-align: start;
}

</style>