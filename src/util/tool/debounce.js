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
// import Vue from 'vue'

// Vue.directive('debounce', {
//     update: function(el, binding) {
//         let timer = null;
//         el.addEventListener("timeupdate", () => {
//             if (timer) {
//                 clearTimeout(timer);
//             }
//             timer = setTimeout(() => {
//                 // 关键点：vue的自定义指令传递的参数binding如果是一个函数，则通过binding.value()来执行
//                 binding.value();
//             }, 500)
//         })
//     }
// });