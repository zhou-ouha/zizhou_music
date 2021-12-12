import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'
import VueParticles from 'vue-particles'
import './util/css/global.css'
import http from '@/network/http'
import { Button, Slider, Carousel, CarouselItem, Input, Row, Col, Tag, Table, TableColumn, Card, Scrollbar, Drawer, Menu, MenuItem, Divider, Pagination } from 'element-ui'
Vue.use(Button)
Vue.use(Slider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Scrollbar)
Vue.use(Drawer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Divider)
Vue.use(Pagination)



Vue.config.productionTip = false
    // Vue.use(ElementUI)
Vue.use(VueParticles)
    // Vue.use(less)

Vue.prototype.$http = http
new Vue({
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
    render: h => h(App)
}).$mount('#app')