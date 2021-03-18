<template>
  <!-- 当前路由不隐藏 -->
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': !isNest }"
      >
        <menu-item
          :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          :title="onlyOneChild.meta.title"
        />
      </el-menu-item>
    </template>
    <el-submenu
      :index="resolvePath(item.path)"
      v-else
      ref="subMenu"
      popper-append-to-body
    >
      <template slot="title">
        <menu-item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import MenuItem from "./Item";
export default {
  name: "SidebarItem",
  components: {
    MenuItem,
  },
  props: {
    item: { type: Object, required: true },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    /**
     * 是否是外链
     * @param {string} path
     * @returns {Boolean}
     */
    isExternal() {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
    resolvePath(routePath) {
      if (this.isExternal(this.basePath)) {
        // 外链直接访问
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    hasOneShowingChild(children = [], parent) {
      console.log("children", children);
      console.log("parent", parent);
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      console.log("showingChildren", showingChildren);
      // console.log("children", children);
      // 只有一个子元素
      if (showingChildren.length === 1) {
        return true;
      }
      // 没有子元素展示父元素
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
