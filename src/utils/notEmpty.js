/*
 * @Author: yayxs
 * @Date: 2020-08-16 22:07:19
 * @LastEditTime: 2020-08-16 22:25:59
 * @LastEditors: yayxs
 * @Description: view 模板name不能为空
 * @FilePath: \vue-element-admin-learn\src\utils\notEmpty.js
 * @
 */
exports.notEmpty = (name) => {
  return (val) => {
    if (!val || val.trim === "") {
      return `${name}为必填`;
    } else {
      true;
    }
  };
};
