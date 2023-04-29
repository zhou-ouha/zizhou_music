// axios 配置
import axios from 'axios'
import store from '../store'
import router from '../router'
import { Loading } from 'element-ui';

//创建 axios 实例
let instance = axios.create({
        baseURL: "http://localhost:3000", //本地打开项目访问地址，切记需要上线是要改为服务器地址
        // baseURL: 'http://www.zizhou.icu:3000',
        timeout: 5000, // 请求超过5秒即超时返回错误
        // withCredentials: true,
    })
    // let loading;
    // 请求拦截
instance.interceptors.request.use(
        config => {
            // loading = Loading.service({
            //     fullscreen: true,
            //     text: "客官稍等——小的拼命跑",
            //     background: "rgba(0, 0, 0, 0.8)",
            //     customClass: "#right"
            // })
            return config
        },
        err => {
            return Promise.reject(err) //基于promise的axios
        })
    // 响应拦截
instance.interceptors.response.use(
        response => {
            // console.log('成功响应：', response)
            // loading.close();
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
        return instance.get('/top/playlist?limit=10&order=hot&cookie='+ encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 使用歌单id获取歌单详情，得到trackids
    getMusicMenuDetail(id) {
        return instance.get('/playlist/detail?' + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取评论
    getComments(id) {
        return instance.get("/comment/playlist?" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 使用trackids获取歌曲详情
    getMusicDetail(data) {
        return instance('/song/detail?ids=' + data +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取音乐url
    getMusicUrl(id) {
        return instance.get('/song/url?id=' + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
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
        return instance.get('/personalized/privatecontent/list?limit=3' +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取推荐最新音乐
    getRecoNewSong() {
        return instance.get('/personalized/newsong?limit=12' +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取推荐MV
    getRecommandMV() {
        return instance.get('/personalized/mv?cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取歌词
    getLyric(id) {
        return instance.get('/lyric?id=' + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 搜索建议
    search(keywords) {
        return instance.get('/search/suggest?keywords= ' + keywords +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 搜索结果
    getSearch(options) {
        return instance.get("/cloudsearch", options)
    },
    // 获取热门标签
    getHotTags() {
        return instance.get("/playlist/hot")
    },
    // 获取所有歌单标签
    getAllTags() {
        return instance.get("/playlist/catlist")
    },
    // 获取标签对应的歌单
    getMenuByTag(options) {
        console.log(options.cat)
        return instance.get("/top/playlist", options)
    },
    // 所有排行榜内容摘要
    getRanking() {
        return instance.get("/toplist/detail")
    },
    // 获取歌手
    getSinger(options) {
        return instance.get("/artist/list", options)
    },
    // 获取新歌速递
    getNewSong(type) {
        return instance.get("/top/song?type=" + type +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 新碟上架
    getNewDisc() {
        return instance.get("/album/newest")
    },
    // 获取歌手详情
    getSingerDetail(id) {
        return instance.get("/artist/detail?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取歌手专辑
    getSingerAlbum(id) {
        return instance.get("/artist/album?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取歌手mv
    getSingerMv(id) {
        return instance.get("/artist/mv?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取相似歌手
    getSingerSimilar(id) {
        return instance.get("/simi/artist?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取歌手描述
    getSingerDes(id) {
        return instance.get("/artist/desc?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取mv详情
    getMvDetail(id) {
        return instance.get("/mv/detail?mvid=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取MV url
    getMvUrl(id) {
        return instance.get("/mv/url?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取视频详情
    getVideoDetail(id) {
        return instance.get("/video/detail?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取视频url
    getVideoUrl(id) {
        return instance.get("/video/url?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取视频评论
    getVideoComments(id) {
        return instance.get("/comment/video?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取mv评论
    getMvComments(id) {
        return instance.get("/comment/mv?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取相关视频
    getSameVideo(id) {
        return instance.get("/related/allvideo?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 获取歌曲评论
    getMusicComments(id) {
        return instance.get("/comment/music?id=" + id +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },
    // 手机号登录
    login(options) {
        return instance.get("login/cellphone", options)
    },
    getCheckCode(phone) {
        return instance.get("/captcha/sent?phone="+ phone)
    },
    checkCode(options) {
        return instance.get("/captcha/verify", options)
    },
    // 登陆后获取用户歌单
    getUserMenu(uid) {
        return instance.get("/user/playlist?uid=" + uid +'&cookie=' + encodeURIComponent(localStorage.getItem('cookieCode')))
    },

    // 获取二维码key
    getQrKey() {
        return instance.get("login/qr/key?timestamp="+ Date.now());
    },
    // 二维码生成
    createQr(key) {
        return instance.get("/login/qr/create?key=" + key + '&timestamp='+ Date.now())
    },
    // 二维码状态监测
    checkQr(key) {
        return instance.get("/login/qr/check?key=" + key + '&timestamp='+ Date.now())
    },
    // 获取用户信息
    getUserInfo() {
        return instance.get("/user/account")
    },
    // 获取用户详情
    getUserDetail(uid) {
        return instance.get("/user/detail?uid=" + uid)
    }
}