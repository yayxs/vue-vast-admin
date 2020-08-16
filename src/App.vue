<!--
 * @Author: your name
 * @Date: 2020-08-15 18:43:55
 * @LastEditTime: 2020-08-16 21:42:51
 * @LastEditors: yayxs
 * @Description: In User Settings Edit
 * @FilePath: \vue-element-admin-learn\src\App.vue
-->
<template>
  <div id="app">
    <!-- 路由渲染的出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
$color: red;
#app {
  color: $color;
}
</style>
