/*
 * @Author: yayxs
 * @Date: 2020-08-16 21:59:43
 * @LastEditTime: 2020-08-16 22:18:24
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \vue-element-admin-learn\plopfile.js
 * @docs https://github.com/plopjs/plop
 */
const viewGenerator = require("./src/templates/view/prompts");
module.exports = function(plop) {
  // create your generators here
  // plop.setGenerator("basics", {
  //   description: "this is a skeleton plopfile",
  //   prompts: [], // array of inquirer prompts
  //   actions: [], // array of actions
  // });
  plop.setGenerator("view", viewGenerator);
};
