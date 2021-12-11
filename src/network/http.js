// axios 配置
import axios from 'axios'
import store from '../store'
import router from '../router'

//创建 axios 实例
let instance = axios.create({
        baseURL: "http://localhost:3000", //本地打开项目访问地址，切记需要上线是要改为服务器地址
        timeout: 5000, // 请求超过5秒即超时返回错误
    })
    // 请求拦截
instance.interceptors.request.use(
        config => {
            // console.log('request请求配置', config)
            return config
        },
        err => {
            return Promise.reject(err) //基于promise的axios
        })
    // 响应拦截
instance.interceptors.response.use(
        response => {
            // console.log('成功响应：', response)
            return response
        },
        error => {
            return Promise.reject(error.response) // 返回接口返回的错误信息
        }
    )
    // export default instance
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
        return instance('/song/detail?ids=' + data)
    },
    // 获取音乐url
    getMusicUrl(id) {
        return instance.get('/song/url?id=' + id)
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
    },
    // 搜索
    search(keywords) {
        return instance.get('/search/suggest?keywords= ' + keywords)
    },
    // 获取评论
    getComments(id) {
        return instance.get("/comment/playlist?" + id)
    },
    // 搜索
    getSearch(options) {
        return instance.get("/cloudsearch", options)
    },

}