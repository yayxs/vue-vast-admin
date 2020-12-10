<template>
  <div>
    <!-- 滚动但是element 官方没有介绍的组件 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- default-active 当前激活菜单的index 
      collapse是否水平折叠菜单 
      background-color 菜单的背景色 
      text-color 菜单的文字颜色 
      unique-opened 是否是保持一个子菜单展开 
      active-text-color	当前激活菜单的文字颜色（仅支持 hex 格式）
       collapse-transition	是否开启折叠动画
       -->
      <el-menu
        mode="vertical"
        :unique-opened="false"
        :collapse-transition="false"
      >
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed() {
    // 当前激活菜单的index
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
