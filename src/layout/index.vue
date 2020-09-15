<template>
  <div>
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- 主要区域 -->
    <div class="main-container"></div>
  </div>
</template>

<script>
import { Sidebar } from "./components";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Sidebar,
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
