<template>
    <div class="imgCard commandBox">
        <div 
          v-for="(item,index) in recommandUrl" 
          :key="index"
          @click="getDetail(index)"
          
        >
          <img :src="item.picUrl" alt="">
          <span class="menuName" style="font-size:.5em;">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommandUrl:{
            type:Array,
            required:true,
            default:[]
        }
    },
    data(){

    },
    methods:{
        getDetail(index){
            this.$router.push('/MenuDetail/id='+this.recommandUrl[index].id)
        }
    }
}
</script>

<style scoped>
.commandBox{
    padding: 2vh 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fff;
}
.imgCard div{
    width: calc(100% / 5 - 1vw);
    height: auto;
    margin: 1.5vh .5vw;
    text-align: center;
}
.imgCard div:hover{
    cursor: pointer;
}
.imgCard img{
    width: 100%;
    height: auto;
    border-radius: 4px;
}
.menuName{
    display: inline-block;
    text-align: start;
}

</style>