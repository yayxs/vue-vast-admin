<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      label-position="left"
    >
      <section class="title-container">
        <h3 class="title">登录</h3>
      </section>
      <el-form-item prop="username">
        <!-- vue icon 图标配置 -->
        <span class="svg-container"> </span>
        <el-input
          v-model="loginForm.username"
          ref="username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-container"> </span>
        <el-input
          v-model="loginForm.password"
          :key="passwordType"
          placeholder="密码"
          ref="password"
          name="password"
          :type="passwordType"
          tabindex="2"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import { validUsername } from "@/utils/validate.js";
export default defineComponent({
  data() {
    // 校验用户名
    const validateUsername = (rule, value, callback) => {
      // 校验用户名
      if (!validUsername(value)) {
        callback(new Error("请核对用户名"));
      } else {
        callback();
      }
    };
    // 校验密码
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("password length < 6"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  methods: {
    handleLogin() {
      console.log(this.$refs.loginForm);
      this.$refs.loginForm.validate((valid) => {
        console.log(valid);
        if (valid) {
          // this.$store
          //   .dispatch("user/login", this.loginForm)
          //   .then(() => {
          //     // 登录成功
          //   })
          //   .catch(() => {
          //     this.loading = false;
          //   });
        }
      });
    },
  },
  mounted() {},
})
</script>
<style scoped lang="scss"></style>
