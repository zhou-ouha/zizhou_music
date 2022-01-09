<template>
  <div id="app">
    <!-- 粒子背景 -->
    <!-- <vue-particles
      color="#646775"
      :particleOpacity="0.8"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="2"
      linesColor="#2E3143"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="148"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles> -->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  components:{
    
    }
}
</script>

<style>

#particles-js{
  width: 100%;
  height: 100vh;
  position: absolute;  
  z-index: -1; 
  top: 0;
  left: 0;
}

.lizi {
  background-color: #ffffff;
}
#app{
  position: relative;
}
</style>
