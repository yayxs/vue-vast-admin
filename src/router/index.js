import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '剁手商城后台管理系统', icon: 'nav' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    redirect: '/users/list',
    name: 'Users',
    meta: { title: '用户管理', icon: 'example' },
    children: [
      {
        path: 'users-list',
        name: 'UsersList',
        component: () => import('@/views/user/UsersList'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'user-info/:id',
        name: 'UserInfo',
        component: () => import('@/views/user/UserInfo'),
        meta: { title: '用户信息', icon: 'table' },
        hidden: true
      },
      {
        path: 'add-user',
        name: 'AddUser',
        component: () => import('@/views/user/AddUser'),
        meta: { title: '新增用户', icon: 'table' }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: '/products/list',
    name: 'Products',
    meta: { title: '商品管理', icon: 'example' },
    children: [
      {
        path: 'products-list',
        name: 'ProductsList',
        component: () => import('@/views/product/ProductsList'),
        meta: { title: '商品列表', icon: 'table' }
      },
      {
        path: 'product-details',
        name: 'ProductDetails',
        component: () => import('@/views/product/ProductDetails'),
        meta: { title: '商品详情', icon: 'table' },
        hidden: true
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/productList/index.vue',
    name: 'nested',
    meta: {
      title: '商品分类管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'pro-list',
        name: 'ProductList',
        component: () => import('@/views/nested/productList/index'), // Parent router-view
        meta: { title: '分类列表', icon: 'table' }
      },
      {
        path: 'addproduct',
        name: 'addProduct',
        component: () => import('@/views/nested/addProduct/index'),
        meta: { title: '添加商品', icon: 'table' }
      },
      {
        path: 'edit',
        component: () => import('@/views/nested/form/index'),
        name: 'editProduct',
        meta: { title: '修改商品', icon: 'table' },
        hidden: true
      }
    ]
  },
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/list',
    name: 'Orders',
    meta: { title: '订单管理', icon: 'example' },
    children: [
      {
        path: 'orders-list',
        name: 'OrdersList',
        component: () => import('@/views/order/OrdersList.vue'),
        meta: { title: '订单列表', icon: 'table' }
      }

      // {
      //   path: 'orders-sort/:id',
      //   name: 'sortOrder',
      //   component: () => import('@/views/order/sortOrder'),
      //   meta: { title: '商品分类', icon: 'table' },
      //   hidden: true
      // }
    ]
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/info',
    name: 'Personal',
    meta: { title: '超级管理员', icon: 'example' },
    children: [
      {
        path: 'info',
        name: 'Info',
        component: () => import('@/views/personal/index'),
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
