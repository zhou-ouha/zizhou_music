export default function(time) {
    let d = new Date(time);
    let year = d.getFullYear();
    let mon = d.getMonth() + 1;
    let day = d.getDay();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getUTCSeconds();
    return year + "-" + mon + "-" + day + " " + h + ":" + m + ":" + s;
}