<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tabss">
      <el-tab-pane label="用户信息" name="first">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.userName"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="formLabelAlign.nickName"></el-input>
          </el-form-item>
          <el-form-item label="头像"></el-form-item>
        </el-form>
        <div class="demo-image__placeholder">
          <div class="block">
            <img
              :src="src"
              style="width:200px;height:200px"
              onerror="this.src=`http://www.gravatar.com/avatar/791c73d60b9a2f6fade8f72b78c635bf?s=200&r=pg&d=mm`"
            >
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改信息" name="second">
        <el-form
          :model="user"
          :rules="userRules"
          ref="userRuleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="user.userName"></el-input>
          </el-form-item>

          <el-form-item label="昵称" prop="nickName">
            <el-input v-model="user.nickName"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="resetUser('userRuleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="third">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="收货地址" name="fourth">
        <el-table :data="addresses" height="250" border style="width: 100%">
          <!-- <el-table-column prop="totalCount" label="日期" width="180"></el-table-column> -->

          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { infoUser, addressUser, resetPwd, resetUser } from '../../api/users'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      user: {
        userName: '',
        nickName: '',
        avatar: ''
      },
      userRules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
      },
      imageUrl: '',
      ruleForm: {
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      input: '',
      totalCount: 0,
      pages: 0,
      addresses: [],
      activeName: 'first',
      src: ``,
      labelPosition: 'right',
      formLabelAlign: {
        userName: '',
        nickName: '',
        avatar: ''
      }
    }
  },
  methods: {
    resetUser(user) {
      console.log(user)
      console.log(this.user)
      resetUser(this.$route.params.id, this.user).then(res => {
        console.log(res)
        this.$message({
          message: '修改用户信息成功',
          type: 'success'
        })
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm.pass)
          resetPwd(this.$route.params.id, {
            password: this.ruleForm.pass
          }).then(res => {
            this.$message({
              message: '修改密码成功',
              type: 'success'
            })
            this.ruleForm.pass = ``
            this.ruleForm.checkPass = ``
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    handleClick(tab, event) {
      console.log(tab, event)
    }
  },

  created() {
    console.log(this.$route.params.id)
    infoUser(this.$route.params.id)
      .then(res => {
        this.formLabelAlign.userName = res.userName
        this.formLabelAlign.nickName = res.nickName
        this.avatar = res.avatar
        this.src = `https://api.cat-shop.penkuoer.com${this.avatar}`
      })
      .catch(err => {
        console.log(err)
      })

    addressUser(this.$route.params.id).then(res => {
      this.totalCount = res.totalCount
      this.addresses = res.addresses
      this.pages = res.pages
    })
  }
}
</script>
<style>
.tabss {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
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
