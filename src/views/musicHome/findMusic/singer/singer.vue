<template>
  <div>
    <div>
      <singerTag
        @getSinger="getSinger"
        @clearSingerInfo="clearSingerInfo"
      />
      <singerList
        :singerList="singerList"
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
      singerList:[]
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
          offset:page * 12
        }
      });
      
      this.singerList.push(...res.artists);
      console.log(this.singerList);
    },
    clearSingerInfo(){
      this.singerList.splice(0);
    }
  }
}
</script>

<style>

</style>