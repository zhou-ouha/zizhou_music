import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import VueParticles from 'vue-particles'
import less from 'less'
import './util/css/global.css'
import http from '@/network/http'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.use(less)

Vue.prototype.$http = http
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')