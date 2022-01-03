import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
        // 菜单切换
        toggle: false,
        // 歌单详情
        details: [],
        // trackids
        ids: [],
        // 当前歌单的所有音乐url
        urls: [],
        // 当前音乐url
        currentMusicUrl: '',
        // 当前index
        currentIndex: 0,
        // 是否播放
        isPlay: false,
        hideTab: false
    },
    mutations: {
        changePlaying(state, data) {
            state.isPlay = data;
        },
        toggleMenuList(state, data) {
            console.log(data)
            state.toggle = !state.toggle
            console.log(data.names)
            state.details = data.names
            state.ids = data.ids
        },
        playCurrentMusic(state, url) {
            state.currentMusicUrl = url
        },
        getCurrentIndex(state, index) {
            state.currentIndex = index;
        },
        changeCurrentIndex(state, flag) {
            switch (flag) {
                case '+':
                    state.currentIndex++;
                    break;
                case '-':
                    state.currentIndex--;
                    break;
                default:
                    state.currentIndex;
                    break;
            }
        },
        getUrls(state, url) {
            state.urls = url
        },
        toggleHide(state) {
            console.log(this)
            state.hideTab = true;
        }
    },
    getters: {

    },
    actions: {

    },
    modules: {

    }
})