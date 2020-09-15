<template>
  <div></div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    // 图标的样式
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
