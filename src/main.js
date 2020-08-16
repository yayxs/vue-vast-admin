/*
 * @Author: your name
 * @Date: 2020-08-15 18:43:55
 * @LastEditTime: 2020-08-16 21:46:06
 * @LastEditors: yayxs
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin-learn\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
