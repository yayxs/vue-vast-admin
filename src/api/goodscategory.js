// import { get, post, deleted, put, deleteOne } from '../utils/request'
import { get, deleted, post } from '../utils/request'
// 商品分类信息

// 获取商品分类列表
export function productCate(params) {
  return get('/api/v1/admin/product_categories', params)
}

// // 新增商品分类信息
// export function addNewProducts(params) {
//   return post('/api/v1/admin/product_categories', params)
// }

// // 根据ID获取商品分类信息

// export function good(id) {
//   return get(`/api/v1/admin/product_categories/${id}`)
// }

// 删除商品分类信息
export function delInfo(id) {
  return deleted(`/api/v1/admin/product_categories/${id}`)
}

// // 修改商品信息
// export function editInfo(id, params) {
//   return put(`/api/v1/admin/product_categories/${id}`, params)
// }
// import { get, post, put, deleteOne } from '../utils/request'

// /**
//  * 获取商品信息
//  * @param {*} params
//  */
export function getCateProducts(params) {
  return get('/api/v1/admin/product_categories', params)
}

// 根据id获取商品分类信息
export function getInfoOfproduct(id) {
  return get(`/api/v1/admin/product_categories/${id}`)
}

// 添加商品分类信息
export function addProductCate(params) {
  return post(`/api/v1/admin/product_categories`, params)
}

// 修改商品分类信息
export function editProduct(id, params) {
  return put(`/api/v1/admin/product_categories/${id}`, params)
}

// 删除商品分类信息
export function delProduct(id) {
  return deleteOne(`/api/v1/admin/product_categories/${id}`)
}
