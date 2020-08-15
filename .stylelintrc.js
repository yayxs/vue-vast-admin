/*
 * @Author: your name
 * @Date: 2020-08-15 19:56:15
 * @LastEditTime: 2020-08-15 19:56:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin-learn\.stylelintrc.js
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "mixin",
          "extend",
          "content",
          "include",
          "for",
          "function",
          "return",
        ],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["export"],
      },
    ],
    indentation: 2,
    "no-descending-specificity": null,
    "declaration-colon-newline-after": null,
  },
  ignoreFiles: ["**/*.js", "dist/*.*", "node_modules", "**/*.ts"],
};
