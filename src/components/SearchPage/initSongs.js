import { formatDate } from "@/util/tool/realFormatSecond";
export class Song {
    constructor(song) {
        this.name = song.name;
        this.artist = song.ar[0].name;
        this.album = song.al.name;
        this.time = formatDate(new Date(song.dt), 'mm:ss');
    }
}