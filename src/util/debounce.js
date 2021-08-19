export default function debounce(fn, waitTime, immediate) {
    let timer = null;
    console.log("我是防抖函数")
    return function(...args) {
        if (timer) // 存在定时器，就清除定时器
            clearTimeout(timer);
        // immediate为true表示第一次出发回调立即执行
        if (immediate && !timer) {
            fn.apply(this, arguments);
        }
        // 重新设置定时器
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, waitTime);
    }
}