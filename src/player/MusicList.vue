<template>
    <div class="menuList" v-show="this.$store.state.toggle">
        <el-scrollbar style="height:100%">
            <el-card class="box-card" style="height:100%">
            <!-- <div v-for="(name,index) in this.$store.state.details" :key="name" class="text item">
                <div @dblclick="getUrl(index)" class="name">{{ name }}</div>
                <hr>
            </div> -->
            </el-card> 
        </el-scrollbar> 
    </div>  
</template>

<script>
export default {

}
</script>

<style scoped>
.menuList{
  width:20vw;
  height:70vh;
  position:absolute;
  bottom: 15vh;
  right: 10.4%;
  /* border: 1px solid #333; */
  background-color: rgba(126, 126, 126, 0.205);
  z-index: 999;
}
.el-card{
  background-color: rgb(3,3,3,0.76);
  box-shadow: none !important;
  color: #fff;
  font-size: 12px;
}
.el-card__header{
  position: sticky;
}
.box-card .name{
  cursor:default;
}
</style>