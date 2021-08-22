<template>
    <div>
        <div class="homeTab">
            <div class="tabBar" ref="tabBar">
                <div v-for="(name,index) in tabName" :class="{bigSize:index === currentTabIndex}" @click="toggleTab(name,index)">
                {{name}}<span :class="{tabLine:index === currentTabIndex}"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        tabName:{
            type:Array,
            required:true,
            default:[]
        }
    },
    data(){
        return {
            currentTabIndex:0,
        }
    },
    methods:{
        toggleTab(name,index){
            this.currentTabIndex = index
            this.$router.push(this.$router.options.routes[0].children[index].path)
        }
    }
}
</script>
<style scoped>
.homeTab{
  position: sticky;
  top: 0;
  z-index: 9;
  color: #fff;
  background-color: rgba(4, 4, 4, 0);
  padding-bottom: 1vh;
}
.tabBar{
  display: flex;
  margin-left: 1vw;
}
.tabBar div{
  /* width: 10vw; */
  padding: 2vh 0.5vw 0;
  text-align: center;
}
.tabBar .tabLine{
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 2px;
  background-color: rgb(255, 118, 118);
  
}
.bigSize{
  font-size: 18px;
}
</style>