const { defineConfig } = require('@vue/cli-service')
module.exports =
  defineConfig({
    transpileDependencies: true
  })

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/mainContentContainerSetting.scss";
        @import "@/assets/scss/checkoutStepsContainerStyle.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'TechPro'
        return args
      })
  }
}
