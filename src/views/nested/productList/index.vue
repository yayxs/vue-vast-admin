<template>
  <div>
   <div class="app-container">
     <div style="margin: 15px;">
        <el-input placeholder="请输入商品名称" v-model="input" class="input-with-select">
          <template slot="prepend">搜索：</template>
        </el-input>
      </div>
      <el-table
        v-loading="listLoading"
        :data="searchResult"
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

              style="width:100px; max-height: 100px"
              :src=" `https://api.cat-shop.penkuoer.com`+scope.row.coverImg ? `https://api.cat-shop.penkuoer.com`+scope.row.coverImg : 'http://pic2.sc.chinaz.com/files/pic/pic9/201905/zzpic18002.jpg' "
              :alt="scope.row.name"
            >
          </template>
        </el-table-column>
        <el-table-column label="描述" width="110" align="center">
          <template slot-scope="scope">{{scope.row.descriptions}}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="110" align="center">
          <template slot-scope="scope">{{scope.row.createdAt}}</template>
        </el-table-column>
        <el-table-column label="更新时间" width="110" align="center">
          <template slot-scope="scope">{{ scope.row.updatedAt}}</template>
        </el-table-column>
        <el-table-column class-name="status-col" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <router-link :to="{
              name:'editProduct',
              query:{
                id:scope.row._id
              }
            }">
            <el-button
              icon="el-icon-delete"
              size="small"
              type="info"
            >修改</el-button>
          </router-link>
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
  </div>

</template>

<script>
import { getCateProducts, delProduct } from '@/api/goodscategory'

export default {
  computed:{
        searchResult() {
          const seachData = this.input
            if (seachData) {

              return this.list.filter(
                item =>
                  item.name.indexOf(seachData) > -1 ||
                  item.descriptions.indexOf(seachData) > -1
              );
            } else {
              return this.list;
            }
          },
  },
  data() {
    return {
      input:'',
      list: null,
      listLoading: true,
      totalCount: 0,
    }
  },
  created() {
    this.fetchData()
  },

  methods: {

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
      getCateProducts({
        page
      }).then(response => {
        console.log(response.categories)

        this.list = response.categories
        // console.log(this.list)
        this.totalCount = response.totalCount
        this.listLoading = false
      })
    },

  },

}
</script>
<style   scoped>
.btnRight {
  float: right;
}
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

