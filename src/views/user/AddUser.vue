<template>
  <div class="adduser">
    <!-- 添加用户 -->

    <el-form ref="myform" :rules="formRules" label-width="100px" :model="formData">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formData.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" auto-complete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="formData.nickName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar" width="100" height="100">
        <el-upload
          class="avatar-uploader"
          action="https://api.cat-shop.penkuoer.com/api/v1/common/file_upload"
          :headers="headers"
          :show-file-list="true"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="imageUrl"
            :src="imageUrl"
            :headers="headers"
            class="avatar"
            width="100"
            height="100"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addUsers" type="success" plain class="btnn">添加用户</el-button>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import { addUser } from '@/api/users.js'
export default {
  data() {
    return {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('vue_admin_template_token')
      },
      // 绑定表单数据
      formData: {
        userName: '',
        nickName: '',

        password: '',
        avatar: ''
      },
      imageUrl: '',
      roles: [],

      // 表单验证规则
      formRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 13, message: '长度在 5 到 13个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    console.log(Cookies.get('vue_admin_template_token'))
  },
  methods: {
    // 上传头像
    handleAvatarSuccess(res, file) {
      const { code, message, info } = res
      this.$message.success(message)
      this.imageUrl = URL.createObjectURL(file.raw)
      this.formData.avatar = info
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 关闭按钮
    handleClosed() {
      for (const key in this.formData) {
        this.formData[key] = ''
      }
    },
    // 添加用户
    async addUsers() {
      this.$refs.myform.validate(async valid => {
        if (!valid) {
          this.$message.error('请重新输入')
        }
        // 验证成功 添加新用户
        const res = await addUser(this.formData)
        console.log(res)
        this.$router.push({ path: 'users-list' })
        //   // 提示成功
        this.$message.success('新增用户成功')

        // }
      })
    }
  }
}
</script>
<style scoped>
.adduser {
  padding: 30px;
}
.btnn {
  margin-left: 100px;
}
</style>
