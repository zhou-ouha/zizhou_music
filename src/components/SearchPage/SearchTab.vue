<template>
  <div class="Tab">
    <div class="tabBar" ref="tabBar">
        <div v-for="(name,index) in tabName" :class="{bigSize:index === currentTabIndex}" @click="toggleTab(name,index)">
        {{name}}<span :class="{tabLine:index === currentTabIndex}"></span>
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
    },
    tabPath:{
        type:Array,
        required:true,
        default:[]
    },
  },
  data(){
    return {
      currentTabIndex:0
    }
  },
  methods:{
    toggleTab(name,index){
      this.currentTabIndex = index;
      this.$router.replace(this.tabPath[index]);
    }
  }
}
</script>

<style scoped>
.Tab{
  color: #fff;
  background-color: rgba(4, 4, 4, 0);
  padding-bottom: 1vh;
}
.tabBar{
  display: flex;
  justify-content: center;
  margin-left: 1vw;
  font-size: 18px;
}
.tabBar div{
  padding: 4vh 2vw 0;
  text-align: center;
}
.tabBar .tabLine{
  display: block;
  width: 200%;
  height: 2px;
  margin-left: -50%;
  margin-top: 4px;
  background-color: rgb(255, 118, 118);
  
}
.bigSize{
  font-size: 18px;
}
</style>