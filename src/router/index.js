import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuDetail from '@/components/MenuDetail.vue'

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
            import ("@/views/MusicFound/SelfdomMusic.vue")
    },
    {
        path: '/PersonalIndividual',
        name: 'PersonalIndividual',
        component: () =>
            import ("@/views/MusicFound/PersonalIndividual.vue")
    },
    {
        path: '/MusicMenu',
        name: 'MusicMenu',
        component: () =>
            import ("@/views/MusicFound/MusicMenu.vue")
    },
    {
        path: '/LeaderBoard',
        name: 'LeaderBoard',
        component: () =>
            import ("@/views/MusicFound/LeaderBoard.vue")
    },
    {
        path: '/Vocalist',
        name: 'Vocalist',
        component: () =>
            import ("@/views/MusicFound/Vocalist.vue")
    },
    {
        path: '/LatestMusic',
        name: 'LatestMusic',
        component: () =>
            import ("@/views/MusicFound/LatestMusic.vue")
    },
    {
        path: '/MenuDetail',
        name: 'MenuDetail',
        component: MenuDetail,
    },
]

const router = new VueRouter({
    routes
})

export default router