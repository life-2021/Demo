const { defineConfig } = require('@vue/cli-service')

// 开发环境提示（注释掉）
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    // 服务启动后打开网页
    open: true,
    host: 'localhost',
    port: 8080,
  },
  // 关闭eslint检查机制
  lintOnSave:false,
}