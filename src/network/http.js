// axios 配置
import axios from 'axios'
import store from '../store'
import router from '../router'

//创建 axios 实例
let instance = axios.create({
        baseURL: "", //本地打开项目访问地址，切记需要上线是要改为服务器地址
        timeout: 5000, // 请求超过5秒即超时返回错误
        headers: { 'Content-Type': 'application/json;charset=UTF-8', xhrFields: { withCredentials: true } },
    })
    // 请求拦截
instance.interceptors.request.use(
        config => {
            if (store.getters.token) { // 若存在token，则每个Http Header都加上token
                config.headers.Authorization = `token ${store.getters.token}`
                console.log('拿到token')
            }
            console.log('request请求配置', config)
            return config
        },
        err => {
            return Promise.reject(err) //基于promise的axios
        })
    // 响应拦截
instance.interceptors.response.use(
    response => {
        console.log('成功响应：', response)
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 (未授权) 清除 token 并跳转到登录页面
                    store.commit('BIND_LOGOUT')
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break
                default:
                    console.log('服务器出错，请稍后重试！')
                    alert('服务器出错，请稍后重试！')
            }
        }
        return Promise.reject(error.response) // 返回接口返回的错误信息
    }
)
export default { //将请求暴露到全局
    // 获取歌单，得到歌单的id
    getMusicMenu() {
        return instance.get('/top/playlist?limit=10&order=hot')
    },
    // 使用歌单id获取歌单详情，得到trackids
    getMusicMenuDetail(id) {
        return instance.get('/playlist/detail?' + id)
    },
    // 使用trackids获取歌曲详情
    getMusicDetail(data) {
        return instance.get('/song/detail?ids=' + data)
    },
    // 获取音乐url
    getMusicUrl(data) {
        return instance.get('/song/url?' + data)
    },
    // 获取banner(走马灯)
    getBanner() {
        return instance.get('/banner')
    },
    // 获取推荐歌单
    getRecommandMenu() {
        return instance.get('/personalized?limit=10')
    },
    // 获取独家放送
    getOnly() {
        return instance.get('/personalized/privatecontent/list?limit=3')
    },
    // 获取推荐最新音乐
    getNewSong() {
        return instance.get('/personalized/newsong?limit=12')
    },
    // 获取推荐MV
    getRecommandMV() {
        return instance.get('/personalized/mv')
    },
    // 获取歌词
    getLyric(id) {
        return instance.get('/lyric?id=' + id)
    }

}