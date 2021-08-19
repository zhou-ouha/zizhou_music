module.exports = {
    devServer: {
        host: "127.0.0.1",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置后自动启动浏览器
        hotOnly: false, // 热更新
        // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
        proxy: { //配置多个代理
            "": {
                target: "http://127.0.0.1:3000/",
                open: process.platform === 'darwin',
                changeOrigin: true,
                ws: false,
                secure: false,
                pathRewrite: {
                    "^": "http://127.0.0.1:3000/"
                }
            }
        }
    }
}