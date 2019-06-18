<template>
  <!--  name 商品名字
 descriptions 商品简介
 quantity 数量(库存)
 price 价格
 coverImg 主图
  productCategory 商品分类id-->
  <el-row>
    <el-col :span="23">
      <el-form
        :model="dataForm"
        :rules="rules"
        ref="dataForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名字" prop="name">
          <el-input v-model="dataForm.name"></el-input>
        </el-form-item>

        <el-form-item label="商品库存" prop="quantity">
          <el-input v-model="dataForm.quantity"></el-input>
        </el-form-item>

        <el-form-item label="商品价格" prop="price">
          <el-input v-model="dataForm.price"></el-input>
        </el-form-item>

        <el-form-item label="商品分类ID" prop="productCategory">
          <el-input v-model="dataForm.productCategory"></el-input>
        </el-form-item>

        <el-form-item label="商品简介" prop="descriptions">
          <el-input type="textarea" v-model="dataForm.descriptions"></el-input>
        </el-form-item>
        <el-form-item label="商品主图" prop="descriptions">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dataForm')">新增</el-button>
          <el-button @click="resetForm('dataForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      dataForm: {
        name: '',
        descriptions: '',
        quantity: '',
        price: '',
        delivery: false,
        productCategory: ''
      },
      rules: {}
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
