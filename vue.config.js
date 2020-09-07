const { devPort } = require("./src/settings");
/**
 * 配置代理
 */

module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    hot: true,
    port: devPort,
    after: mockServer(),
  },
};
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
