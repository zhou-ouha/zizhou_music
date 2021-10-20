<template>
    <div>
        <div>
            <div><i class="iconfont" style="font-size:12px ">&#xe605;</i></div>
        </div>
        <div class="header"><DetailHeader></DetailHeader></div>
        <div class="main">
            <MenuTab :tabName="tabName" :tabPath="tabPath"></MenuTab>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>    
<script>
import MenuTab from '@/components/common/MenuTab'
import DetailHeader from '@/components/content/Detail/DetailHeader'
export default {
    components:{
        DetailHeader, 
        MenuTab
    },
    data(){
        return {
            tabName:["歌曲列表","评论","收藏者"],
            tabPath:['/MenuDetail','/DetailCommand','/DetailCollector']
        }
    },
    mounted:{
    },
    methods:{
        async getMusicDetail(){
            // const {data:res} = await this.$http.getMusicDetail({ids:this.musicMenuIds});
      },
    }
}
</script>
<style scoped>
.header{
    display: flex;
    justify-content: start;
    align-content: center;
    margin-left: 2vw;
}
.main{
    margin-top: 2vh;
}
</style>