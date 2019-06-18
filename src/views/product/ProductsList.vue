<template>
  <div>
    <div>
      <el-form :inline="true" ref="add_data">
        <el-form-item class="btnRight">
          <el-button type="primary" size="small" icon="view" @click="handleAdd()">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="app-container">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column type="index" label="序号" width="95"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="主图" width="110" align="center">
          <template slot-scope="scope">
            <img
              s
              style="width:100px; max-height: 100px"
              :src="`https://api.cat-shop.penkuoer.com${scope.row.coverImg}`"
              onerror="this.src=`https://s2.ax1x.com/2019/06/09/VsLw8K.jpg`"
              :alt="scope.row.name"
            >
          </template>
        </el-table-column>
        <el-table-column label="价格" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column label="描述" width="110" align="center">
          <template slot-scope="scope">{{scope.row.descriptions}}</template>
        </el-table-column>
        <el-table-column label="库存" width="110" align="center">
          <template slot-scope="scope">{{scope.row.quantity}}</template>
        </el-table-column>
        <el-table-column label="商品分类" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.productCategory?scope.row.productCategory:'暂无'}}</template>
        </el-table-column>
        <el-table-column class-name="status-col" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete"
              size="small"
              type="info"
              @click="editHandle(scope.row)"
            >修改</el-button>
            <el-button
              @click="delHandle(scope.row)"
              icon="el-icon-delete"
              size="small"
              type="danger"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <!-- current-change页面选择改变之后触发 -->
        <el-pagination @current-change="fetchData" layout="prev, pager, next" :total="totalCount"></el-pagination>
      </div>
    </div>
    <Log :dialog="dialog" :formData="formData" @updata="fetchData" @updateData="fetchData"></Log>
  </div>
</template>

<script>
import Log from '../../components/Log'
import { getProducts, getInfoOfproduct, delProduct } from '@/api/products'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      totalCount: 0,
      dialog: {
        show: false,
        title: '',
        option: 'edit'
      },
      formData: {
        name: '',
        price: '',
        descriptions: '',
        quantity: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  components: {
    Log
  },
  methods: {
    handleAdd() {
      this.dialog = {
        show: true,
        title: '添加商品信息',
        option: 'add'
      }
      this.formData = {
        name: '',
        price: '',
        descriptions: '',
        quantity: ''
      }
      this.dialog.show = true
    },
    delHandle(row) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          console.log(row._id)

          delProduct(row._id)
          this.fetchData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    fetchData(page = 1) {
      // console.log(page)
      this.listLoading = true
      getProducts({
        page
      }).then(response => {
        console.log(response.products)
        this.list = response.products
        this.totalCount = response.totalCount
        this.listLoading = false
      })
    },
    editHandle(row) {
      console.log(row)
      console.log(this.dialog)
      this.dialog = {
        show: true,
        title: '修改商品信息',
        option: 'edit'
      }
      this.formData = {
        name: row.name,
        price: row.price,
        descriptions: row.descriptions,
        quantity: row.quantity,
        productCategory: row.productCategory,
        id: row._id
      }
    }
  }
}
</script>
<style scoped>
.btnRight {
  float: right;
}
</style>
