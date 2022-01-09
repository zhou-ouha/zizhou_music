<template>
  <div>
      <div id="headTab">
        <headTab></headTab>
      </div>
      <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import headTab from '@/components/findMusic/headTab/headTab.vue'
export default {
  components:{
    headTab
  }
}
</script>

<style scoped>
#headTab {
  /* width: 100%; */
  width: 450px;
  height: 70px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>