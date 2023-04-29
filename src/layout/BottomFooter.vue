<template>
    <div id="footer">
        <VueAudio></VueAudio>
    </div>
</template>
<script>
import VueAudio from '../player/VueAudio.vue'
export default {
    components:{
        VueAudio
    },
}
</script>
<style scoped>
#footer{
    width: 100%;
    height: 10vh;
    background-color: rgb(26, 26, 34);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 99999;
    bottom: 0;
    color: #fff;
    box-shadow: -1px 0 1px #fff;
}
</style>