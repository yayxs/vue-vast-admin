import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n);

// 准备翻译的语言环境信息
// docs http://kazupon.github.io/vue-i18n/zh/started.html#html
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

// 设置地区的方法

export function getLocalLanguage() {
  const chooseLan = Cookies.get("language"); // 从缓存中读取lan
  if (chooseLan) return chooseLan; // 如果存在直接返回
  const lan = (navigator.language || navigator.browserLanguage).toLowerCase(); // 获取浏览器UI的语言
  /**
   * let obj = {
        title:'登录'
      }
      const mes  = {
        en:{
          ...obj
        }
      }
      let keys= Object.keys(mes)
      console.log(keys)  // ['en']
   */
  const locals = Object.keys(messages);
  for (const local of locals) {
    if (lan.indexOf(local) > -1) {
      return local;
    }
  }
  return 'zh' // 默认显示中文
}
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: getLocalLanguage(), // 设置地区
  messages // 设置地区信息
});
// 通过 `i18n` 选项创建 Vue 实例
// new Vue({ i18n }).$mount('#app')
export default i18n;
