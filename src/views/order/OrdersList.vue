<template>
  <div class="app-container">
    <!-- 搜索框 -->
    <el-row class="searchArea">
      <el-col :span="24">
        <el-input v-model="search" class="searchInput" clearable placeholder="请输入内容">
          <!-- <el-button @click="handleSearch" slot="append" icon="el-icon-search"></el-button> -->
        </el-input>
        <!-- <el-button @click="addUserDialogFormVisible = true" type="success" plain>添加用户</el-button> -->
      </el-col>
    </el-row>
    <el-table
      v-loading="listLoading"
      :data="tables"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="95"></el-table-column>
      <el-table-column label="用户" prop="user" width="60"></el-table-column>
      <!-- <el-table-column label="图片" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:100px; max-height: 100px"
            :src="'https://api.cat-shop.penkuoer.com'+scope.row.coverImg"
            :alt="scope.row.name"
          >
        </template>
      </el-table-column>-->
      <el-table-column label="地址" prop="regions" width="100"></el-table-column>

      <!-- <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>-->
      <el-table-column class-name="status-col" label="是否付款" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.isPayed }}</el-tag>
          <!-- <el-switch
            v-model="scope.row.isPayed"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="true"
            inactive-value="false"
          ></el-switch>-->
        </template>
      </el-table-column>
      <el-table-column label="receiver" prop="receiver" width="100"></el-table-column>
      <el-table-column label="价格" prop="price" width="100"></el-table-column>
      <el-table-column label="no" prop="no" width="100"></el-table-column>
      <el-table-column label="address" prop="address" width="100"></el-table-column>
      <el-table-column align="center" prop="createdAt" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.createdAt | fmtDate('YYYY-MM-DD')}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="updatedAt" label="更新时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.updatedAt | fmtDate('YYYY-MM-DD')}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.row)"
            plain
            size="mini"
            type="primary"
            icon="el-icon-view"
            circle
          ></el-button>
          <el-button
            @click="handleDelete(scope.row._id)"
            plain
            size="mini"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
          <!-- <el-button
            @click="handleShow(scope.row)"
            plain
            size="mini"
            type="success"
            icon="el-icon-check"
            circle
          ></el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <!-- current-change页面选择改变之后触发 -->
      <el-pagination @current-change="fetchData" layout="prev, pager, next" :total="totalCount"></el-pagination>
    </div>
    <!-- Form -->

    <el-dialog title="商品分类信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="收款员" :label-width="formLabelWidth">
          <el-input v-model="form.receiver" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="user" :label-width="formLabelWidth">
          <el-input v-model="form.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否付款" :label-width="formLabelWidth">
          <el-input v-model="form.isPayed" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="no" :label-width="formLabelWidth">
          <el-input v-model="form.no" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getOrders, putOrder, delOrder, getDetailsInfo } from '@/api/orders'

export default {
  computed: {
    // 模糊搜索
    tables() {
      const search = this.search
      if (search) {
        return this.dormitory.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            )
          })
        })
      }
      return this.dormitory
    }
  },
  data() {
    return {
      search: '',
      dormitory: [],
      listLoading: true,
      totalCount: 0,
      dialogFormVisible: false,
      form: {
        receiver: '',
        user: '',
        price: '',
        isPayed: '',
        no: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(page = 1) {
      // console.log(page)
      this.listLoading = true
      getOrders({
        page
      }).then(response => {
        this.dormitory = response.orders
        // console.log(this.list[0])
        this.totalCount = response.totalCount
        this.listLoading = false
      })
    },
    // 删除 开始
    handleDelete(id) {
      this.$confirm('此操作将永久删除该商品分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delOrder(id)
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
    // 删除 结束
    async handleShow(row) {
      // console.log(row)
      // const { isPayed } = row
      // console.log(isPayed)
      // const res = await putOrder(row._id, { isPayed: 'isPayed' })
      // console.log(res)
      // this.fetchData()
    },
    handleEdit(row) {
      console.log(row)
      getDetailsInfo(row._id).then(res => {
        this.form = res
        this.dialogFormVisible = true
      })
    }
  }
}
</script>
<style scoped>
.box-card {
  height: 100%;
}
.searchArea {
  margin-top: 10px;
  margin-bottom: 10px;
}
.searchArea .searchInput {
  width: 350px;
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
