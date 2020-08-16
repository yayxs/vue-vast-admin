/*
 * @Author: your name
 * @Date: 2020-08-15 19:45:34
 * @LastEditTime: 2020-08-16 21:21:22
 * @LastEditors: yayxs
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin-learn\vue.config.js
 */

// 读取环境

const isProd = process.env.NODE_ENV === "production";
// vue.config.js 导出一个对象
module.exports = {
  // 配置webpack的选项提供一个对象（或者返回一个对象），该对象将会被 webpack-merge 合并入最终的 webpack 配置。
  configureWebpack: (config) => {
    if (isProd) {
    } else {
    }
  },
  chainWebpack: (config) => {},
  // css 的配置
  css: {
    requireModuleExtension: true, // 不去掉文件名中的 module
    sourceMap: true,
    // 向 webpack 的预处理器 loader 传递选项
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/styles/variables.sass"`,
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
};
