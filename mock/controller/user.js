/**
 * desc admin 用户 editor用户
 * veal : vue element admin learn
 */
const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

module.exports = [
  // 用户登录
  {
    url: "/veal/user/login",
    type: "post",
    response: (config) => {
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: "账号和密码错误",
        };
      }

      return {
        code: 20000,
        data: token,
      };
    },
  },
];
