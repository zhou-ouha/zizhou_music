<template>
  <div>
    <div class="box" v-for="(item,index) in data = (pos == 'top' ? hot : comments)" :key="index">
    <!-- 头像 -->
      <img :src="item.user.avatarUrl" alt="">
      <!-- 评论内容 -->
      <div class="detail">
        <!-- 用户 -->
        <p class="info"><span class="user">{{item.user.nickname}}</span>：{{item.content}}</p>
        <!-- 发布时间 -->
        <p class="time">{{item.timeStr}}</p>
        <div class="report">举报</div>
      </div>
      <!-- 点赞 -->
      <div class="good">
        <i class="iconfont">&#xe606;</i>
        <i style="font-size:12px;">{{item.likedCount}}</i>
      </div>
      
    </div>
    
  </div>
  
</template>

<script>
export default {
  props:["pos","type","id"],
  data(){
    return {
      hot:[],
      comments:[]
    }
  },
  mounted(){
    console.log("mounted");
    this.$bus.$on("send-data",(data)=>{
      console.log("收到数据");
      console.log(data);
      if(data){
        this.hot = data.hot
        this.comments = data.comments
      }else{
        this.getComments();
      }
    });
  },
  methods:{
    async getComments(){
      if(this.type == "video"){
        const {data:res} = await this.$http.getVideoComments(this.id);
        this.comments = res.comments;
        this.hot = res.hotComments;
        console.log(res);
      }else{
        const {data:res} = await this.$http.getMvComments(this.id);
        console.log(res);
        this.comments = res.comments;
        this.hot = res.hotComments;
      }
    }
  }
}
</script>

<style scoped>
.box{
  width:92%;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  color: #fff;
}
.line{
  width: 92%;
  margin: 4px auto 0;
  height: 1px;
  background-color: rgb(128, 128, 128);
}
.report {
  display: none;
  float: right;
  margin-top: -25px;
  margin-right: 20px;
}
.box:hover .report{
  display: block;
}
img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.box .detail{
  width: 90%;
  height: 50px;
  margin: 5px 10px;
  font-size: 14px;
}
.box .detail p{
  margin: 0;
  margin-bottom: 12px;
}
.box .detail .info{
  overflow: hidden;
}
.user,.time{
  color: rgb(47, 231, 255);
}

.good{
  margin-top: 20px;
}
</style>
