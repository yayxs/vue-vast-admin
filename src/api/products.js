import { get, post, put, deleteOne } from '../utils/request'

/**
 * 获取商品信息
 * @param {*} params
 */
export function getProducts(params) {
  return get('/api/v1/admin/products', params)
}

export function getInfoOfproduct(id) {
  return get(`/api/v1/admin/products/:id`)
}

export function addProduct(params) {
  return post(`/api/v1/admin/products`, params)
}

export function putProduct(id, params) {
  return put(`/api/v1/admin/products/${id}`, params)
}
export function delProduct(id) {
  return deleteOne(`/api/v1/admin/products/${id}`)
}
