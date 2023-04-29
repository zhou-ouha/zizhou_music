import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
        // 搜索关键词
        searchInfo: sessionStorage.getItem("searchInfo"),
        // 当前播放索引
        currentIndex: 0,
        // 是否播放
        isPlay: false,
        // 登录状态
        userInfo: {}
    },
    mutations: {
        changePlaying(state, data) {
            state.isPlay = data;
        },
        changeLogin(state) {
            // state.isLogin = !state.isLogin
        },
        setUserInfo(state, data) {
            state.userInfo = data;
            console.log(state.userInfo);
        }
    },
    getters: {

    },
    actions: {

    },
    modules: {

    }
})