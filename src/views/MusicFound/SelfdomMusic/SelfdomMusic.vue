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
import swiper from '@/views/MusicFound/SelfdomMusic/childComps/swiper'
import privateLive from '@/views/MusicFound/SelfdomMusic/childComps/privateLive'
import newSongs from '@/views/MusicFound/SelfdomMusic/childComps/newSongs'
import recommandMV from '@/views/MusicFound/SelfdomMusic/childComps/recommandMV'
import RecommandMenu from '@/views/MusicFound/SelfdomMusic/childComps/RecommandMenu'
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
            url:'https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg',
            recommandUrl:[],
            bannerUrl:[],
            onlyUrl:[],
            newSong:[],
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
            console.log("------",res)//这里有封面相关信息，无需获取歌单详情
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