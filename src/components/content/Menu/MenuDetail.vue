<template>
    <div>
        <DetailHeader :info="baseInfo"/>
        <MenuTab :tabName="tabName" @getIndex="toggleTab" />
        
        <detail-list 
          v-show="currentIndex === 0"
          :list="musicList"
        />
        <!-- 评论 -->
        <comment 
          v-show="currentIndex === 1"
          :hot="hot"
          :comments="comments"
        />
        <!-- 收藏 -->
    </div>
</template>    
<script>
import MenuTab from '@/components/common/MenuTab'
import DetailHeader from '@/components/content/Detail/DetailHeader'
import {baseInfo,songDetail} from "@/network/detail"
import DetailList from '../Detail/DetailList.vue'
import Comment from '../Detail/Comment.vue'
export default {
    name:"MenuDetail",
    components:{
        DetailHeader, 
        MenuTab,
        DetailList,
        Comment
    },
    data(){
        return {
            tabName:["歌曲列表","评论"],
            id:null,
            limit:30,
            list:[],
            baseInfo:{},
            musicList:[],
            length:null,
            currentIndex:0,
            hot:[],
            comments:[]
        }
    },
    created(){
        this.getMenuDetail();
        this.getComments();
    },
    methods:{
        init(){
            this.limit = 20;
            this.list = [];
            this.baseInfo = {};
            this.musicList = [];
            this.isShow = "music"; //控制显示歌单、评论、收藏者
        },
        async getMenuDetail(){
            this.id = this.$route.params.id;
            if(!this.id) return ;
            this.init();
            // 歌单基础信息
            const {data:res} = await this.$http.getMusicMenuDetail(this.id);
            // 头部信息
            this.baseInfo = new baseInfo(res && res.playlist)
            // 获取tracksid
            const tracksid = res.playlist.trackIds;
            // 获取列表长度
            this.length = tracksid.length;
            for(let i = 0,length = this.length;i < length;i ++){
                this.$http.getMusicDetail(tracksid[i].id).then(res=>{
                    // console.log("send successfully",res.data.songs)
                    let song = new songDetail(res.data.songs);
                    this.musicList.push(song);
                })
            }
            // 获取歌单评论
            // 获取歌单收藏者
            console.log(this.baseInfo)
        },
        // 获取歌单评论
        async getComments(){
            this.id = this.$route.params.id;
            const {data:res} = await this.$http.getComments(this.id);
            this.hot = res.hotComments;
            this.comments = res.comments
            this.$bus.$emit("send-data",{
                hot:this.hot,
                comments:this.comments
            });
            console.log(res);
        },
        toggleTab(index){
            this.currentIndex = index;
        }
    }
}
</script>

<style scoped>

</style>