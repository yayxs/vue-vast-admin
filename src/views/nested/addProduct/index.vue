<template>
  <div style="padding:30px;">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.descriptions"></el-input>
      </el-form-item>
      <!-- <el-form-item label="创建新时间">
    <el-input v-model="form.createdAt"></el-input>
  </el-form-item>
  <el-form-item label="更新时间" >
    <el-input v-model="form.updatedAt"></el-input>
      </el-form-item>-->
      <el-form-item label="图片" prop="type">
        <el-upload
          class="avatar-uploader"
          action="https://api.cat-shop.penkuoer.com/api/v1/common/file_upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.coverImg" :src="form.coverImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm()">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addProductCate } from '@/api/goodscategory'
export default {
  data() {
    return {
      imageUrl: '',
      form: {
        name: '',
        updatedAt: '',
        createdAt: '',
        descriptions: '',
        coverImg: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  filters: {
    resetImg(val) {
      return 'https://api.cat-shop.penkuoer.com' + val
    }
  },
  methods: {
    submitForm() {
      // this.$refs[ruleForm].validate((valid) => {
      //   if (valid) {
      addProductCate({
        name: this.form.name,
        descriptions: this.form.descriptions,
        coverImg: this.form.coverImg
      }).then(res => {
        // console.log(res)
        alert('添加商品成功')
        this.$router.go(-1)
      })
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields()
    },

    handleAvatarSuccess(res, file) {
      this.form.coverImg = res.info
      // console.log(res)
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
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
