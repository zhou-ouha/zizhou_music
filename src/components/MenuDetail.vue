<template>
    <div>
        <DetailHeader :info="baseInfo"/>
        <MenuTab :tabName="tabName" :getIndex="getIndex"/>
        <div>
            <DetailList 
              v-show="isShow === 'music'"
              :list="musicList"
            />
            <!-- 评论 -->
            <!-- 收藏 -->
        </div>
    </div>
</template>    
<script>
import MenuTab from '@/components/common/MenuTab'
import DetailHeader from '@/components/content/Detail/DetailHeader'
import DetailList from '@/components/content/Detail/DetailList'
import {baseInfo,songDetail} from "@/network/detail"
export default {
    components:{
        DetailHeader, 
        MenuTab,
        DetailList
    },
    data(){
        return {
            tabName:["歌曲列表","评论","收藏者"],
            id:null,
            limit:30,
            list:[],
            baseInfo:{},
            musicList:[],
            length:null,
            isShow:"music",
        }
    },
    created(){
        this.getMenuDetail();
    },
    methods:{
        getIndex(index){
            switch(index){
                case 0:
                    this.isShow = "music";
                    break;
                case 0:
                    this.isShow = "recommand";
                break;
                case 0:
                    this.isShow = "sub";
                break;
            }
        },
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
    }
}
</script>
<style scoped>
</style>