const path = require("path");
const defaultSettings = require("./src/settings");

const name = defaultSettings.name || "veal";

function resolveDir(dir) {
  return path.join(__dirname, dir);
}
/**
 *
 * @param
 * @param
 * @param
 * @returns func
 */
function mockServer() {
  //当前环境是开发环境
  if (process.env.NODE_ENV === "development") {
    // 开发环境使用 mock
    const mockServer = require("./mock/mockServer.js");
    return mockServer;
  } else {
    return function(app, server, compiler) {
      console.log(app);
      console.log(server);
      console.log(compiler);
    };
  }
}

module.exports = {
  publicPath: defaultSettings.publicPath,
  assetsDir: defaultSettings.assetsDir,
  outputDir: defaultSettings.outputDir,
  lintOnSave: process.env.NODE_ENV === "development", // 开发环境下
  // transpileDependencies,
  // 重点是  webpack 的配置
  devServer: {
    // proxy: 'http://localhost:4000' // 代理
    hot: defaultSettings.devServerHot,
    port: defaultSettings.devServerPort,
    open: true,
    noInfo: false, // 告诉开发服务器禁止显示诸如Webpack捆绑包信息之类的消息。错误和警告仍将显示
    overlay: {
      // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。如果只想显示编译器错误
      warnings: true,
      errors: true,
    },
    after: mockServer(),
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      // 配置路径别名
      alias: {
        "@": resolveDir("src"),
      },
    },
  },
};
