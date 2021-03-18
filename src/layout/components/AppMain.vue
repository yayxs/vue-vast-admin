<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive> <router-view :key="key" /> </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$router.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 200px;
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 50px);
}
</style>
