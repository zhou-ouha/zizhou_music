<template>
  <div class="home">
    <Header></Header>
    <div id="main">
      <div id="left">left</div>
      <div id="right">right</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components:{
    Header,
    Footer
  }
}
</script>
<style scoped>
.home{
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
#main{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
#left{
  width: 20%;
  height: 70vh;
  background-color: rgba(5, 5, 5, 0.308);
}
#right{
  width: 80%;
  height: 70vh;
  background-color: rgba(4, 4, 4, 0.726);
}
</style>