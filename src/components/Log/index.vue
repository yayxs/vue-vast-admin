
<template>
  <div class="dialog">
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
    >
      <div class="form">
        <el-form
          ref="form"
          :model="formData"
          label-width="120px"
          style="margin:10px;width:auto"
          :rules="form_rules"
        >
          <el-form-item label="商品名称" prop="name">
            <el-input type="name" v-model="formData.name"></el-input>
          </el-form-item>

          <el-form-item prop="price" label="价格:">
            <el-input type="price" v-model="formData.price"></el-input>
          </el-form-item>

          <el-form-item prop="quantity" label="库存:">
            <el-input type="quantity" v-model="formData.quantity"></el-input>
          </el-form-item>

          <!-- <el-form-item prop="coverImg" label="商品图片:">
            <el-input type="coverImg" v-model="formData.coverImg"></el-input>
          </el-form-item>-->
          <!-- <el-form-item prop="productCategory" label="商品分类:">
            <el-input type="productCategory" v-model="formData.productCategory"></el-input>
          </el-form-item>-->
          <el-form-item label="商品简介" prop="descriptions">
            <el-input type="textarea" v-model="formData.descriptions"></el-input>
          </el-form-item>
          <el-form-item class="text_right">
            <el-button @click="dialog.show = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit('form')">提 交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { addProduct, putProduct } from '../../api/products'
export default {
  name: 'dialog',
  data() {
    return {
      form_rules: {
        name: [
          { required: true, message: '商品名字不能为空！', trigger: 'blur' }
        ],
        price: [{ required: true, message: '价格不能为空！', trigger: 'blur' }],
        quantity: [
          { required: true, message: '库存不能为空！', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    dialog: Object,
    formData: Object
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          const type = this.dialog.option
          if (type == 'add') {
            console.log(this.formData)
            addProduct(this.formData)
              .then(res => {
                this.dialog.show = false
                this.$emit('update')
                this.$message({
                  message: '保存成功！',
                  type: 'success'
                })
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            console.log(this.formData.id)
            putProduct(this.formData.id, this.formData)
              .then(res => {
                this.dialog.show = false
                // 传递到父组件 刷新
                this.$emit('updateData')
                this.$message({
                  message: '保存成功！',
                  type: 'success'
                })
              })
              .catch(err => {
                console.log(err)
              })
          }
        }
      })
    }
  }
}
</script>
