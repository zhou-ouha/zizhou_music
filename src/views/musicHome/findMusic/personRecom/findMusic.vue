<template>
    <div class="plat">
        <!-- 轮播图 -->
        <swiper
          :bannerUrl="bannerUrl"
        />
        <!-- 推荐歌单 -->
        <RecommandMenu :recommandUrl="recommandUrl"></RecommandMenu>
        <!-- 独家放送 -->
        <privateLive
          :onlyUrl="onlyUrl"
        />
        <!-- 最新音乐 -->
        <newSongs
          :newSong="newSong"
        />
        <!-- 推荐MV -->
        <recommandMV
          :recommandMV="recommandMV"
        />
        <!-- 提示 -->
        <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;color:#fff;">
            <div style="margin:8px 0;">暂时还不能改变栏目顺序</div>
            <div style="margin:8px 0;"> ^ - ^ </div>
            <div style="margin:8px 0;"> @ _ @ </div>
        </div>
    </div>
</template>
<script>
import swiper from '@/components/findMusic/personRecom/swiper'
import privateLive from '@/components/findMusic/personRecom/privateLive'
import newSongs from '@/components/findMusic/personRecom/newSongs'
import recommandMV from '@/components/findMusic/personRecom/recommandMV'
import RecommandMenu from '@/components/findMusic/personRecom/RecommandMenu'
export default {
    components:{
        RecommandMenu,
        swiper,
        privateLive,
        newSongs,
        recommandMV
    },
    data(){
        return {
            // 推荐歌单
            recommandUrl:[],
            // 轮播图数据
            bannerUrl:[],
            // 独家放送
            onlyUrl:[],
            // 最新音乐
            newSong:[],
            // 推荐mv
            recommandMV:[],
        }
    },    
    mounted(){
        this.$http.getBanner().then(res=>{
            this.bannerUrl = res.data.banners
        },err=>{
            
        })
        this.$http.getRecommandMenu().then(res=>{
            this.recommandUrl = res.data.result
        },err=>{

        })

        this.$http.getOnly().then(res=>{
            this.onlyUrl = res.data.result
        },err=>{

        })

        this.$http.getNewSong().then(res=>{
            this.newSong = res.data.result
        },err=>{

        })
        this.$http.getRecommandMV().then(res=>{
            console.log(res)
            this.recommandMV = res.data.result;
        },err=>{

        })
    },
    methods:{
        
    }
}
</script>
<style scoped>
.plat{
    padding: 0.5vh 6vw 0;
}
</style>