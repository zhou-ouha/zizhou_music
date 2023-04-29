<template>
  <div>
    <div>
      <singerTag
        @getSinger="getSinger"
        @clearSingerInfo="clearSingerInfo"
        ref="singerTag"
      />
      <singerList
        :singerList="singerList"
        infinite-scroll-distance="2px"
        :infinite-scroll-immediate="false"
        v-infinite-scroll="load"
        class="infinite-list-item"
      />
    </div>
  </div>
</template>

<script>
import singerTag from '@/components/findMusic/singerList/singerTag'
import singerList from '@/components/findMusic/singerList/singerList'
export default {
  components:{singerTag,singerList},
  data(){
    return {
      singerList:[],
      more:true,
      page:0
    }
  },
  mounted(){
    this.getSinger();
  },
  methods:{
    async getSinger(type = -1,area = -1,initial = -1,page = 0){
      const {data:res} = await this.$http.getSinger({
        params:{
          type:type,
          area:area,
          initial:initial,
          limit:30,
          offset:page * 30
        }
      });
      
      this.singerList.push(...res.artists);
      console.log(this.singerList);
    },
    clearSingerInfo(){
      this.singerList.splice(0);
    },
    load(){
      if(this.more == false) return;
      this.getSinger(
        this.$refs.singerTag.languageTag,
        this.$refs.singerTag.genderTag,
        this.$refs.singerTag.firTag,
        this.page
      );
      this.page++;
    }
  }
}
</script>

<style>

</style>