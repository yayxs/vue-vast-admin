import { get, put, deleteOne, post } from '../utils/request'

export function getUsers(params) {
  return get('/api/v1/admin/users', params)
}

export function deleteUser(id) {
  return deleteOne(`/api/v1/admin/users/${id}`)
}

export function infoUser(id) {
  return get(`/api/v1/admin/users/${id}`)
}

export function addressUser(id) {
  return get(`/api/v1/admin/addresses/${id}`)
}

export function resetPwd(id, params) {
  return put(`/api/v1/admin/users/reset_pwd/${id}`, params)
}

export function resetUser(id, params) {
  return put(`/api/v1/admin/users/${id}`, params)
}
export function addUser(params) {
  return post('/api/v1/admin/users', params)
}
