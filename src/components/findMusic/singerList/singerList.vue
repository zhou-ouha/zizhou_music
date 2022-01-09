<template>
  <div>
    <div 
      class="singerBox"
    >
    <div 
      class="info" 
      v-for="(item,index) in singerList" :key="index"
    >
      <div>
        <el-image
            :src="item.img1v1Url"
            fit="fill"
            @click="toDetail(item.id)"
          >
            <div slot="placeholder" class="image-slot">
              <i class="el-icon-loading icon"></i>
            </div>
        </el-image>
        <!-- <img :src="item.img1v1Url" alt=""> -->
      </div>
      <div class="singerName">{{item.name}}</div>
    </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name:"singeList",
  props:{
    singerList:Array
  },
  methods:{
    toDetail(id){
      // console.log(id);
      this.$router.push("/musicHome/artistPage/"+id)
    }
  }
}
</script>

<style scoped>
.singerBox{
  width: 95%;
  margin: 0 auto;
}
.singerBox .info{
  width: calc(100% / 6 - 10px);
  float: left;
  margin: 0 10px 20px 0;
}
.singerBox .info div{
  width: 100%;
  height: 100%;
}
.singerBox .info div:hover{
  cursor: pointer;
}
img{
  width: 100%;
  height: auto;
}
.singerBox .singerName{
  width: 100%;
  color: #fff;
  margin-left: 5%;
}
.icon{
  font-size: 180px;
  color: #d03535;
}
</style>