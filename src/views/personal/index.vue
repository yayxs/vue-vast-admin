<template>
  <div class="infoshow">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="10">
        <div class="user">
          <img :src="avatar" class="avatar" alt>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="userinfo">
          <div class="user-item">
            <i class="el-icon-circle-check"></i>
            <span>{{name}}</span>
          </div>
          <!-- <div class="user-item">
            <i class="fa fa-cog"></i>
            <span>{{name}}</span>
          </div>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'personal',
  computed: {
    ...mapGetters(['name', 'avatar'])
  }
}
</script>
<style scoped>
.app-main {
  width: 100%;
  height: 100%;
}
.infoshow {
  width: 100%;
  height: 500px;
  /* box-sizing: border-box; */
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
