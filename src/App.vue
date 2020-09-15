<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import { login } from "@/api/user";
import Layout from "@/layout";
export default {
  name: "App",
  components: { Layout },
  mounted() {},
  methods: {
    handleClick() {
      login({ username: "admin", password: "123456" }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
