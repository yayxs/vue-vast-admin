<template>
  <div>
    <!-- <router-view /> -->
    <tags-view></tags-view>
  </div>
</template>

<script>
import TagsView from "./layout/components/TagsView/index";
export default {
  name: "App",
  components: {
    TagsView,
  },
};
</script>

<style lang="scss" scoped></style>
