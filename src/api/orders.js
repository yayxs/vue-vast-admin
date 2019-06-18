import { get, put, deleteOne } from '../utils/request'

export function getOrders(params) {
  return get(`/api/v1/admin/orders`, params)
}

export function putOrder(id, params) {
  return put(`api/v1/admin/orders/${id}`, params)
}

export function delOrder(id) {
  return deleteOne(`api/v1/admin/orders/${id}`)
}

export function getDetailsInfo(id) {
  return get(`api/v1/admin/orders/${id}`)
}
