import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
    state: {
        flag: '123',
        toggle: false,
        details: [],
        ids: [],
        currentMusicUrl: ''
    },
    mutations: {
        toggleMenuList(state, data) {
            console.log(data)
            state.toggle = !state.toggle
            console.log(state.toggle)
            console.log(data.names)
            state.details = data.names
            state.ids = data.ids
        },
        playCurrentMusic(state, url) {
            state.currentMusicUrl = url
        }
    },
    getters: {

    },
    actions: {

    },
    modules: {

    }
})