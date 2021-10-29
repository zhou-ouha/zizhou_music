import instance from "./http";
import { formatDate } from "@/util/tool/realFormatSecond";
export default {
    // getMusicMenuDetail(id) {
    //     return instance.get('/playlist/detail', {
    //         id: id
    //     })
    // },
    // // 获取音乐url
    // getMusicUrl(arr) {
    //     return instance.get('/song/url', {

    //     })
    // },

}
/**对歌曲数据进行封装 */
export class songDetail {
    constructor(songs) {
        this.id = songs[0].id;
        this.name = songs[0].name;
        this.album = songs[0].al.name;
        this.artist = songs[0].ar[0].name;
        this.pic = songs[0].al.picUrl;
        this.time = formatDate(new Date(songs[0].dt), 'mm:ss')
    }
}

/**歌单基础信息 */
export class baseInfo {
    constructor(playlist) {
        this.img = playlist.coverImgUrl || '';
        this.title = playlist.description;
        this.name = playlist.name;
        this.shareCount = playlist.shareCount;
        this.subscribedCount = playlist.subscribedCount;
        this.playCount = playlist.playCount;
        this.trackCount = playlist.trackCount;
        this.tags = playlist.tags;
        this.createTime = playlist.createTime;
        this.creatorAvatar = playlist.creator.avatarUrl;
        this.creatorName = playlist.creator.nickname;
    }
}