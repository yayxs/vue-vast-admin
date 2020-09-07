/**
 * 全局变量配置
 */
module.exports = {
  // 开发部署时的URL
  publicPath: "",
  // 生产环境构建文件的目录名
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //开发环境端口号
  devPort: "81",
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  //npm run build时是否自动生成7z压缩包
  build7z: false,
  // 请求的基本Url
  //是否依据mock数据生成webstorm HTTP Request请求文件
  httpRequestFile: false,
  baseURL:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview"
      ? "yy-mock-server"
      : "http://your.website.com",
};
