<template>
  <div class="artistDesc">
    <div>
      <p
       class="desBox"
      >个人简介</p>
      <p
        v-for="(item, index) in textFormat(artistDesc.briefDesc)"
        :key="index"
        class="desItem"
      >
        {{ item }}
      </p>
    </div>
    <div v-for="(item, index) in artistDesc.introduction" :key="index">
      <p style="font-weight: 600; font-size: 20px; cursor: pointer">{{ item.ti }}</p>
      <p
        v-for="(item, index) in textFormat(item.txt)"
        :key="index"
        style="opacity: 0.7; text-indent: 30px; letter-spacing: 1px; line-height: 40px"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "artistDesc",
  props: {
    artistDesc: Object,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    textFormat(text) {
      console.log(text.split());
      let newText = text.split("\n");
      return newText;
    },
  },
};
</script>

<style scoped>
.artistDesc{
  width: 90%;
  margin: 0 auto;
  color: #fff;
}
.desBox{
  font-weight: 600; 
  font-size: 20px; 
  cursor: pointer;
  color: #fff;
}
.desItem{
  opacity: 0.7; 
  text-indent: 30px; 
  letter-spacing: 1px; 
  line-height: 40px;
  color: #fff;
}
</style>
