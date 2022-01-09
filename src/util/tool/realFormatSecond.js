// 将整数转换成 时：分：秒的格式
export default function realFormatSecond(second) {
    var secondType = typeof second
    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second)
        var hours = Math.floor(second / 3600)
        second = second - hours * 3600
        var mimute = Math.floor(second / 60)
        second = second - mimute * 60
        return ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '00:00'
    }
}
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};