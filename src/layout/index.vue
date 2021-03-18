<template>
  <!-- app容器 -->
  <div class="app-wrapper" :class="classObj">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />
    <div class="main-container"></div>
    <div>
      <navbar />
      <tags-view v-if="true" />
    </div>
    <app-main />
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar, TagsView } from "./components";
export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView,
  },
  computed: {
    classObj() {
      return {
        hideSidebar: false,
        mobile: false,
        openSidebar: true,
        withoutAnimation: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
