export default function throttle(fn, delay) {
    let timer = null;
    return function() {
        let context = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, arguments);
                console.log(arguments)
                timer = null;
            }, delay);
        }
    }
}