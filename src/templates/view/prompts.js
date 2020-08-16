/*
 * @Author: yayxs
 * @Date: 2020-08-16 22:04:44
 * @LastEditTime: 2020-08-16 22:35:54
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \vue-element-admin-learn\src\templates\view\prompts.js
 * @
 */
const { notEmpty } = require("../../utils/notEmpty");
const { templateFolder } = require("../../config/setting");
module.exports = {
  description: "创建view",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入新建文件名，然后点击回车",
      // validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        // path: `src/views/${templateFolder || "project"}/${name}/index.vue`,
        path: `src/views/${name}/index.vue`,

        templateFile: "src/templates/view/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
