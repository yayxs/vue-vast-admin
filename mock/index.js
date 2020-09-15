// const Mock = require('mockjs')
// const { param2Obj } = require('./utils')

const user = require("./controller/user");
// mocks 数据
const mocks = [...user];

module.exports = {
  mocks,
};
