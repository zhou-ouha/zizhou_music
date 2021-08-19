<template>
    <div id="footer">
        <VueAudio :musicUrl="musicUrl"></VueAudio>
    </div>
</template>
<script>
import VueAudio from '@/components/VueAudio'
import http from '@/network/http'
export default {
    data(){
        return {
            musicUrl:''
        }
    },
    components:{
        VueAudio
    },
    mounted(){
        // http.getMusic().then(res=>{
        //         console.log(res)
        //         this.musicUrl = res.data.data[0].url;
        //     },err=>{
        //         console.log(err)
        //     })
    },
    methods: {
        
    },
}
</script>
<style scoped>
#footer{
    width: 100%;
    height: 9vh;
    background-color: rgba(0, 0, 0, 0.486);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
</style>