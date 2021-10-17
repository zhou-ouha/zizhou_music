<template>
    <div>
        <div>
            <div><i class="iconfont" style="font-size:12px ">&#xe605;</i></div>
        </div>
        
        <div><DetailHeader></DetailHeader></div>
        
        <div>评论组件</div>
        <div>收藏者组件</div>
    </div>
</template>    
<script>
import DetailHeader from '@/components/content/DetailHeader'
export default {
    components:{
        DetailHeader
    },
    data(){
        return {
            
        }
    },
    mounted:{
    },
    methods:{
        async getMusicDetail(){
            const {data:res} = await this.$http.getMusicDetail({ids:this.musicMenuIds});
      },
    }
}
</script>
<style scoped>
</style>