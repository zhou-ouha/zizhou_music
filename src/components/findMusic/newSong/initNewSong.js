import { formatDate } from "@/util/tool/realFormatSecond";
export class initNewSong {
    constructor(data) {
        this.name = data.name;
        this.picUrl = data.album.blurPicUrl;
        this.singerName = '';
        if (data.album.artists.length > 1) {
            let temp = []
            for (let item of data.album.artists) {
                temp.push(item.name);
            }
            this.singerName = temp.join("/").toString();
        } else {
            this.singerName = data.album.artists[0].name;
        }
        this.albumName = data.album.name;
        // this.duration = data.duration;
        this.duration = formatDate(new Date(data.hMusic.playTime), 'mm:ss')
    }
}