import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuDetail from '../components/content/Menu/MenuDetail.vue'
import DetailList from '@/components/content/Detail/DetailList'
import DetailCommand from '@/components/content/Detail/DetailCommand'
import DetailCollector from '@/components/content/Detail/DetailCollector'

Vue.use(VueRouter)
    // 解决路由重复跳转问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: '/',
        name: 'SelfdomMusic',
        component: () =>
            import ("@/views/MusicFound/SelfdomMusic/SelfdomMusic.vue"),
    },
    {
        path: '/MenuDetail/:id',
        name: 'MenuDetail',
        component: MenuDetail,
    },
]

const router = new VueRouter({
    routes
})

export default router