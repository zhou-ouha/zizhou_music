<template>
    <div id="header">
        <span class="title">@子洲@</span>
        <div class="main">
            <Search></Search>
            <PartRight></PartRight>
        </div>
    </div>
</template>
<script>
import PartRight from '@/components/content/TopChildren/PartRight'
import Search from '@/components/content/TopChildren/Search'
export default {
    name:'Header',
    components:{
        PartRight,Search
    },
}
</script>
<style scoped>
#header{
    width: 100%;
    height: 9vh;
    background-color: rgba(124, 124, 124, 0.829);
    margin: 0 auto;
    text-align: center;
    line-height: 8vh;
    color: #fff;
}
#header .title{
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
}
#header .main{
    width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
}


</style>