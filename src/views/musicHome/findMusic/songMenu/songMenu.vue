<template>
  <div>
    <div class="tag">
      <!-- 当前标签 -->
      <div class="curTag" @click="isAllTags = !isAllTags">{{tagKind}}</div>
      <allTags
        v-show="isAllTags"
        :tagKind="tagKind"
        @changeTag="selectTag"
        :allTags="allTags"
        />
      <!-- 热门标签 -->
      <div class="hotTags">
        <span 
          v-for="(item, index) in hotTags" 
          :key="index"
          @click="selectTag(item.name)"
          :class="{actHotTag:tagKind === item.name,hotTag:tagKind !== item.name}"
          >
        {{item.name}}
        </span>
      </div>
    </div>
    <div class="menuList">
      <songList
        :playList="playList"
      />
      <pagination
        :count="count"
        :tagKind="tagKind"
        @getSongListPage="getMenuByTag"
        ref="pagination"
      />
    </div>
  </div>
</template>

<script>
import allTags from '@/components/findMusic/songList/allTags'
import songList from '@/components/findMusic/songList/songList'
import pagination from "@/components/findMusic/songList/pagination"
export default {
  components:{allTags,songList,pagination},
  data(){
    return {
      // 热门标签
      hotTags:[],
      // 选择的歌单种类
      tagKind:this.$route.query.tag ? this.$route.query.tag : "全部歌单",
      // 歌单
      playList:[],
      // 当前歌单类型总数
      count:0,
      isAllTags:false,
      // 所有歌单
      allTags:{
        // 标签风格分类
        categories:{},
        // 对应的icon
        icon:{
          "0": "el-icon-collection",
          "1": "el-icon-dessert",
          "2": "el-icon-coffee-cup",
          "3": "el-icon-orange",
          "4": "el-icon-table-lamp",
        },
        // 风格对应的标签
        sub:[[],[],[],[],[]]
      }
    }
  },
  mounted(){
    this.getHotTags();
    this.getAllTags();
    this.getMenuByTag(this.tagKind,0);
  },
  methods:{
    // 获取热门标签
    async getHotTags(){
      const res = await this.$http.getHotTags();
      this.hotTags = res.data.tags;
      console.log(res);
    },
    // 获取所有标签信息
    async getAllTags(){
      const res = await this.$http.getAllTags();
      this.categories = res.data.categories;
      for(let tag of res.data.sub){
        switch(tag.category){
          case 0:
            this.allTags.sub[0].push(tag);break;
          case 1:
            this.allTags.sub[1].push(tag);break;
          case 2:
            this.allTags.sub[2].push(tag);break;
          case 3:
            this.allTags.sub[3].push(tag);break;
          case 4:
            this.allTags.sub[4].push(tag);break;
        }
      }
    },
    // 获取标签对应的歌单
    async getMenuByTag(tag,page){
      const {data:res} = await this.$http.getMenuByTag({
        params:{cat:tag,offset:page*50}
      });
      console.log(res)
      if(this.playList.length == 0) this.playList = res.playlists;
      else this.playList.splice(0,50,...res.playlists)
      this.count = res.total;
    },
    //选择标签
    selectTag(tag){
      console.log(this.tagKind)
      console.log(tag)
      if(tag !== this.tagKind){
        this.tagKind = tag;
        this.getMenuByTag(tag,0);
        this.isAllTags = false;
      }
    } 
  }
}
</script>

<style scoped>
/* 当前标签 */
.curTag{
  position: absolute;
  top: 10px;
  width: 120px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  margin-left: 5vw;
}
/* 热门标签 */
.hotTags {
  height: 35px;
  line-height: 40px;
  position: absolute;
  right: 5%;
}
.hotTag {
  margin-left: 12px;
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 8px;
  text-align: center;
}
.hotTag:hover {
  opacity: 1;
}
/* 标签被选中时 */
.actHotTag {
  color: #ff2525;
  font-weight: 800;
  margin-left: 12px;
  padding: 5px;
  font-size: 13px;
  border-radius: 10px;
  cursor: pointer;
  background: #fcf4f4;
}
.tag {
  width: 100%;
  height: 40px;
  position: relative;
}
</style>