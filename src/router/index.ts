import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/main',
    component: () => import('@/views/main'),
  },
  {
    path: '/',
    redirect: '/login',
  },
]
export default routes
