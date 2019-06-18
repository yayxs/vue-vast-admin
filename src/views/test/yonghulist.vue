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
      v-if="tables.length>0"
      v-loading="listLoading"
      :data="tables"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index" label="序号" width="95" align="center"></el-table-column>
      <el-table-column label="用户名" prop="userName" width="150" align="center"></el-table-column>
      <el-table-column label="用户昵称" prop="nickName" width="150" align="center"></el-table-column>

      <el-table-column label="用户头像" width="110" align="center">
        <template slot-scope="scope">
          <img
            style="width:100px; max-height: 100px"
            onerror="this.src=`http://www.gravatar.com/avatar/791c73d60b9a2f6fade8f72b78c635bf?s=200&r=pg&d=mm`"
            :src="`https://api.cat-shop.penkuoer.com${scope.row.avatar}`"
            :alt="scope.row.userName"
          >
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-delete"
            size="small"
            type="info"
            @click="infoHandle(scope.row._id)"
          >详情</el-button>
          <!-- <el-button
            icon="el-icon-delete"
            size="small"
            type="info"
            @click="editHandle(scope.row._id)"
          >修改</el-button>-->
          <el-button
            @click="delHandle(scope.row._id)"
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
</template>

<script>
import { getUsers, deleteUser } from '@/api/users'
import axios from 'axios'
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
      totalCount: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(page = 1) {
      // console.log(page)
      this.listLoading = true
      getUsers({
        page
      })
        .then(response => {
          console.log(typeof response)
          this.dormitory = response.users
          // console.log(response.products)
          this.totalCount = response.totalCount
          this.listLoading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    infoHandle(id) {
      console.log(id)
      this.$router.push({ path: `user-info/${id}` })
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
