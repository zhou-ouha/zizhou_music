<template>
  <div>
    <div class="videoPart">
      <!-- 左侧 -->
      <div class="leftMain">
        <div class="videoBody">
          <h3 style="margin-right:13px;">MV详情</h3>
          <video :src="videoUrl" controls autoplay></video>
        </div>
        <div class="detail">
          <el-image :src="videoDetail.cover" class="mvImg"></el-image>
          <span v-if="type == 'mv'">
            <span 
              v-for="(item,index) in videoDetail.artists"
              class="authorName"
            >
              <span>{{item.name}}</span>
              {{ index + 1 === videoDetail.artists.length ? '' : "/"}}
            </span>
          </span>
          <div 
            class="videoName" 
            @click="toggleIntroduce"
          >{{videoDetail.name}}
          <i 
            class="iconfont" 
            style="font-weight:bolder;margin-left:10px;"
          >&#xe677;</i></div>
          <div class="count"><span>发布：{{videoDetail.publishTime}}</span><span>播放：{{videoDetail.playCount}}</span></div>
          <div class="introduce" v-show="showIntroduce">{{videoDetail.desc}}</div>
          <el-button><i class="iconfont">&#xe64d;</i>收藏({{videoDetail.subCount}})</el-button>
          <el-button><i class="iconfont">&#xe601;</i>分享({{videoDetail.shareCount}})</el-button>
          <div class="comments">
            <div class="commentTitle">评论({{videoDetail.commentCount}})</div>
            <div class="commentsContent">
              <div class="input">
                <el-input
                  type="textarea"
                  :rows="3"
                  v-model="textarea">
                </el-input>
                <el-button class="commentsBtn">评论</el-button>
              </div>
              <div class="title">精彩评论</div>
              <CommentContent pos="top" :type="type" :id="videoId"/>
              <div class="title">其他评论</div>
              <CommentContent pos="bottom" :type="type" :id="videoId"/>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="rightRecommand">
        <h3>相关推荐</h3>
        <div v-for="(item,index) in sameVideo" :key="index" class="sameBox">
          <el-image :src="item.coverUrl" class="sameImg"></el-image>
          <div class="sameIntroduce">
            <div class="sameTitle">{{item.title}}</div>
            <div class="sameAuthor">
              <span 
                v-for="(item,index) in item.creator"
                class="authorName"
              >
                by <span>{{item.userName}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentContent from "@/components/content/Detail/CommentContent.vue"
export default {
  components:{CommentContent},
  data(){
    return {
      // 视频url
      videoUrl:"",
      // 视频id
      videoId:this.$route.params.id,
      // 类型
      type:"mv",
      // 视频详情
      videoDetail:{},
      // 评论
      comments:{},
      // 相关视频
      sameVideo:[],
      // 介绍展示与否
      showIntroduce:false,
      textarea:''
    }
  },
  mounted(){
    this.$bus.$emit("send-data");
    if (isNaN(this.videoId)) {
      this.type = "video";
    } else {
      this.type = "mv";
    }
    this.getVideoDetail();
    this.getVideoUrl();
    this.getSameVideo();
  },
  methods:{
    async getVideoDetail(){
      if(this.type == "video"){
        const {data:res} = await this.$http.getVideoDetail(this.videoId);
        console.log(res);
        this.videoDetail = res.data;
      }else {
        const {data:res} = await this.$http.getMvDetail(this.videoId);
        console.log(res);
        this.videoDetail = res.data;
      }
    },
    async getVideoUrl(){
      if(this.type == "video"){
        const {data:res} = await this.$http.getVideoUrl(this.videoId);
        this.videoUrl = res.data.url;
      }else {
        const {data:res} = await this.$http.getMvUrl(this.videoId);
        this.videoUrl = res.data.url;
      }
    },
    async getSameVideo(){
      const {data:res} = await this.$http.getSameVideo(this.videoId);
      this.sameVideo = res.data;
      console.log(res);
    },
    toggleIntroduce(){
      this.showIntroduce = !this.showIntroduce;
    }
  },
  watch: {
    $route: function(newVal,oldVal){
      this.videoId = newVal.params.id;
      if(newVal.params.id != oldVal.params.id){
        if(isNaN(this.videoId)){
          this.type = "video";
        }else{
          this.type = "mv";
        }
        this.getVideoDetail();
      }
    }
  },
}
</script>

<style scoped>
.videoPart{
  display: flex;
}
.videoBody,.detail{
  transform: translateX(10%);
}
h3{
  color: #fff;
  margin-bottom: 30px;
}
.leftMain{
  width: 70%;
  height: 900px;
}
video{
  width: 80%;
  height: auto;
}
.detail{
  margin-top: 20px;
}
.mvImg{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  vertical-align: middle;
}
.authorName{
  color: #fff;
  margin-left: 10px;
}
.authorName:hover{
  color: rgb(156, 156, 156);
  cursor: pointer;
}
.videoName,.count{
  color: #fff;
  font-size: 32px;
  margin-top: 10px;
}
.videoName:hover{
  cursor: pointer;
}
.count{
  font-size: 16px;
  margin-bottom: 20px;
}
.introduce{
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(131, 131, 131);
}
.commentTitle{
  color:#fff;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
}
.commentsContent{
  width: 80%;
}
.commentsContent .title{
  color: #fff;
  margin-left: 3%;
  margin-top: 40px;
  margin-bottom: 5px;
}
.commentsBtn{
  float: right;
  margin: 10px auto;
}
.rightRecommand{
  width: 30%;
  height: 300px;
  float: right;
  margin-right: 10px;
}
.sameBox{
  display: flex;
  margin-bottom: 20px;
  color:#fff;
}
.sameBox:hover{
  cursor: pointer;
}
.sameImg{
  width: 55%;
}
.sameIntroduce{
  width: 45%;
}
.sameTitle{
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; 
}
.sameAuthor{
  margin-top: 40px;
}
</style>