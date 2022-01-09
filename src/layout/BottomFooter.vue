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
    background-color: rgba(0, 0, 0, 0.308);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 99999;
    bottom: 0;
}
</style>