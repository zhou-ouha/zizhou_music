import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuDetail from '@/components/MenuDetail'
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
            import ("@/views/MusicFound/SelfdomMusic.vue"),
    },
    {
        path: '/PersonalIndividual',
        name: 'PersonalIndividual',
        component: () =>
            import ("@/views/MusicFound/PersonalIndividual.vue"),
    },
    {
        path: '/MusicMenu',
        name: 'MusicMenu',
        component: () =>
            import ("@/views/MusicFound/MusicMenu.vue"),
    },
    {
        path: '/LeaderBoard',
        name: 'LeaderBoard',
        component: () =>
            import ("@/views/MusicFound/LeaderBoard.vue"),
    },
    {
        path: '/Vocalist',
        name: 'Vocalist',
        component: () =>
            import ("@/views/MusicFound/Vocalist.vue"),
    },
    {
        path: '/LatestMusic',
        name: 'LatestMusic',
        component: () =>
            import ("@/views/MusicFound/LatestMusic.vue"),
    },
    {
        path: '/MenuDetail',
        name: 'MenuDetail',
        component: MenuDetail,
        redirect: 'DetailList',
        children: [{
                path: '/DetailList',
                name: DetailList,
                component: DetailList
            },
            {
                path: '/DetailCommand',
                name: DetailCommand,
                component: DetailCommand
            },
            {
                path: '/DetailCollector',
                name: DetailCollector,
                component: DetailCollector
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router