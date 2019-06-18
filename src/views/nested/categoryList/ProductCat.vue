<template>
  <div class="app-container">
    <el-button @click="addHandle()" style="margin:10px;" icon="el-icon-edit" size="small" type="primary">添加商品</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="95" align="center"></el-table-column>
      <el-table-column label="名字" prop="name" width="150" align="center"></el-table-column>
      <el-table-column label="图片" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:100px; max-height: 100px"
            :src="'https://api.cat-shop.penkuoer.com'+scope.row.coverImg"
            :alt="scope.row.name"
          >
        </template>
      </el-table-column>
      <el-table-column label="描述" width="400" align="center">
        <template slot-scope="scope">{{ scope.row.descriptions }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="创建时间" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.createdAt }}</template>

      </el-table-column>
      <el-table-column align="center" prop="created_at" label="更新时间" width="110">
        <template slot-scope="scope">

          <span>{{ scope.row.updatedAt }}</span>
        </template>
      </el-table-column>
       <el-table-column class-name="status-col" label="操作" width="200" align="center">
        <template slot-scope="scope">

              <el-button @click="editInfo(scope.row)" icon="el-icon-edit" size="small" type="info">修改</el-button>

            <el-button @click="delHandle(scope.row._id)" icon="el-icon-delete" size="small" type="danger">删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <!-- current-change页面选择改变之后触发 -->
      <el-pagination @current-change="fetchData" layout="prev, pager, next" :total="totalCount"></el-pagination>
    </div>
    <InfoPro :dialog="dialog" :formData="formData" @updata="fetchData" @updateData="fetchData"></InfoPro>
  </div>
</template>

<script>
import { productCate, delInfo, categoryInfo } from '@/api/goodscategory';
import { getToken } from "@/utils/auth";
import { MessageBox } from 'element-ui';
import InfoPro from '@/components/Info/dialog'
export default {
  // 注册组件
  components:{
      InfoPro,
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      totalCount: 0,
      dialog:{
        show:false,
        title:'',
        option:'edit'
      },
      formData:{
        name:'',
        descriptions:'',
        createdAt:'',
        coverImg:'',
        updatedAt:'',
          _id:'',
      }
    }
  },
  created() {
    this.fetchData()
    // this.fetchData.push('/nested/categoryList')
  },
  methods: {
    fetchData(page = 1) {
      this.listLoading = true
      productCate({
        page
      }).then(response => {
        this.list = response.categories
        console.log(response.categories)
        this.totalCount = response.totalCount
        this.listLoading = false
      })
    },
      delHandle(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             delInfo(id).then(res=>{
              console.log(res)
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              window.location.reload()
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      //修改商品分类信息
      editInfo(row){
        // console.log(row)
        // console.log(this.dialog)
        this.dialog={
           show:true,
            title:'修改商品分类信息',
            option:'edit'
        },
        this.formData={
           name:row.name,
          descriptions:row.descriptions,
          createdAt:row.createdAt,
          coverImg:row.coverImg,
          updatedAt:row.updatedAt,
          _id:row._id
        }
        this.dialog.show = true
      },

      // 添加商品信息
      addHandle(){
        this.dialog = {
           show:true,
            title:'添加商品分类信息',
            option:'add'
        },
        this.formData = {
          name:'',
        descriptions:'',
        createdAt:'',
        coverImg:'',
        },
        this.dialog.show = true
      }

    }
}


</script>
