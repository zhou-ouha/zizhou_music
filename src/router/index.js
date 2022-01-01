import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuDetail from '../components/content/Menu/MenuDetail.vue'

Vue.use(VueRouter)
    // 解决路由重复跳转问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        //路径为空时跳到发现音乐
        path: '',
        redirect: '/musicHome',
    },
    {
        path: '/musicHome',
        name: 'musicHome',
        redirect: '/musicHome/findMusic/personRecom',
        component: () =>
            import ("@/views/musicHome"),
        children: [
            // 发现音乐
            {
                path: '/musicHome/findMusic',
                name: 'findMusic',
                redirect: '/musicHome/findMusic/personRecom',
                component: () =>
                    import ('@/views/musicHome/findMusic/findMusic.vue'),
                children: [
                    // 个性推荐
                    {
                        path: '/musicHome/findMusic/personRecom',
                        name: 'findMusic',
                        component: () =>
                            import ('@/views/musicHome/findMusic/personRecom/findMusic')
                    },
                    // 歌单
                    {
                        path: '/musicHome/findMusic/songMenu',
                        name: 'findMusic',
                        component: () =>
                            import ('@/views/musicHome/findMusic/songMenu/songMenu')
                    },
                    // 排行榜
                    {
                        path: '/musicHome/findMusic/ranking',
                        name: 'findMusic',
                        component: () =>
                            import ('@/views/musicHome/findMusic/ranking/ranking')
                    },
                    // 歌手
                    {
                        path: '/musicHome/findMusic/singer',
                        name: 'findMusic',
                        component: () =>
                            import ('@/views/musicHome/findMusic/singer/singer')
                    },
                    // 最新音乐
                    {
                        path: '/musicHome/findMusic/newSong',
                        name: 'findMusic',
                        component: () =>
                            import ('@/views/musicHome/findMusic/newSong/newSong')
                    },
                ]
            },
            // 歌单详情
            {
                path: '/musicHome/MenuDetail/:id',
                name: 'MenuDetail',
                component: MenuDetail,
            },
            // 搜索
            {
                path: '/musicHome/SearchPage',
                name: 'searchPage',
                redirect: '/musicHome/SearchPage/SearchBySong',
                component: () =>
                    import ("@/views/musicHome/searchPage/SearchPage.vue"),
                children: [{
                        path: '/musicHome/SearchPage/SearchBySong',
                        name: 'SearchBySong',
                        component: () =>
                            import ("@/components/SearchPage/SearchBySong.vue")
                    },
                    {
                        path: '/musicHome/SearchPage/SearchBySinger',
                        name: 'SearchBySong',
                        component: () =>
                            import ("@/components/SearchPage/SearchBySinger.vue")
                    },
                    {
                        path: '/musicHome/SearchPage/SearchByVideo',
                        name: 'SearchBySong',
                        component: () =>
                            import ("@/components/SearchPage/SearchByVideo.vue")
                    },
                    {
                        path: '/musicHome/SearchPage/searchByAlbum',
                        name: 'SearchBySong',
                        component: () =>
                            import ("@/components/SearchPage/searchByAlbum.vue")
                    },
                    {
                        path: '/musicHome/SearchPage/searchBySongList',
                        name: 'SearchBySong',
                        component: () =>
                            import ("@/components/SearchPage/searchBySongList.vue")
                    },
                ]
            },
            // 歌手详情
            {
                path: '/musicHome/artistPage/:id',
                name: 'artistPage',
                component: () =>
                    import ("@/views/musicHome/artistPage/artistPage.vue")
            },
            // mv视频详情
            {
                path: "/musicHome/videoPage/:id",
                component: () =>
                    import ("@/views/musicHome/videoPage/videoPage.vue")
            }
        ]
    },


]

const router = new VueRouter({
    routes
})

export default router