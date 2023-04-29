<template>
  <div class="login">
    <div class="header">
      <!-- <img src="@/static/imgs/empty.webp" alt=""> -->
      <i class="iconfont cancel" @click="cancelLogin">&#xe629;</i>
    </div>
    <div class="longinInfo">
      <div class="qrInfo">
        <vue-qr :text="info" :size="50" :margin="0"></vue-qr>
      </div>
      <!-- <el-form
        label-width="0px"
        class="logForm"
        :model="login_form"
        :rules="loginFromRules"
        ref="loginFormRef"
        @keyup.enter.native="login()"
      >
        <el-form-item prop="phone">
          <el-input
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
            v-model="login_form.phone"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="login_form.captcha"
            show-password
          />
          <el-button type="success" round @click="getCode()">发送</el-button>
        </el-form-item>
      </el-form> -->
      <div class="btn">
        <el-button type="danger" round @click="login()">登陆</el-button>
        <el-button type="primary" round @click="cancelLogin()">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  data(){
    return {
      timer:'',
      info:'',
      keyCode:'',
      //登录时的表单绑定
      login_form: {
        phone: "",
        captcha: "",
      },
      //登录的表单验证规则
      loginFromRules: {
        //验证账号
        phone: [
          // {
          //   required: true,
          //   message: "请输入手机号",
          //   trigger: "blur",
          // },
          // {  pattern:/^1[3456789]\d{9}$/, message: '手机格式不正确'}
        ],
        //验证密码
        password: [
          // {
          //   required: true,
          //   message: "请输入密码",
          //   trigger: "blur",
          // },
        ],
      },
      // 用户id
      uid:''
    }
  },
  components:{
    VueQr
  },
  mounted(){
    this.createQr();
  },
  methods:{
    async createQr() {
      const {data: key} = await this.$http.getQrKey();
      console.log("key",key.data.unikey);
      this.keyCode = key.data.unikey;
      const {data: info} = await this.$http.createQr(this.keyCode);
      console.log("INFO:", info.data.qrurl);
      this.info = info.data.qrurl;
    },

    async login(){
      console.log("-------------------------");
      const data = await this.$http.checkQr(this.keyCode);
      console.log("success login", data.data);
      if(data.data.code === 803) {
        localStorage.setItem('cookieCode', data.data.cookie);
        const userInfo = await this.$http.getUserInfo();
        console.log('用户信息',userInfo);
        const userDetail = await this.$http.getUserDetail(userInfo.data.account.id);
        console.log('用户信息：',userDetail);
        // localStorage.setItem('userInfo',userInfo.acount);
      }
      // this.testLogin();
      // const {data:res} = await this.$http.login({
      //   params:this.login_form
      // });
      // console.log(res);
      // this.uid = res.profile.userId;
      // this.$store.commit("setUserInfo",res);
      // this.$bus.$emit("login",res)
      // this.getUserMenu(res.profile.userId);
      // this.cancelLogin();
    },
    async testLogin() {
      const res = await this.$http.checkCode({
        params: this.login_form,
      });
      console.log('验证码校验结果：', res);
    },
    async getCode() {
      const { data: res } = await this.$http.getCheckCode(this.login_form.phone);
      console.log('验证码是：', res);
    },
    cancelLogin(){
      this.$bus.$emit("show-login",false)
    },
    async getUserMenu(id){
      const {data:res} = await this.$http.getUserMenu(id);
      this.$bus.$emit("user-menu",res.playlist)
      console.log(res);
    }
  },
  destroyed() {
    // window.clearInterval(this.timer)
  }
}
</script>

<style scoped>
.login{
  width: 30vw;
  height: 60vh;
  background-color: rgb(22, 19, 19);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.login .header{
  height: 2vh;
  text-align: center;
  margin: 10px 0;
}
img{
  width: 100%;
  /* border-radius: 50%; */
}
.qrInfo {
  padding: 4px; 
  background-color: #fff;
  width: 50%;
  margin:0 auto;
}
.cancel{
  color: #fff;
  position: absolute;
  right: 0;
  margin-right: 10px;
}
.cancel:hover{
  cursor: pointer;
}
.longinInfo{
  margin-top: 40px;
  text-align: center;
}
.el-form{
  width: 80%;
  margin: 0 auto;
}
.btn{
  margin: 10px 0;
}
.el-button{
  border-radius: 10px;
  width: 25%;
  margin: 0 30px;
}
</style>