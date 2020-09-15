import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

/* Layout 布局*/
import Layout from "@/layout";
/**
 * hidden 为true 不会出现在侧边栏
 * redirect 面包屑中是否可点击
 * name 设定路由的名字
 * meta
 *  nocache 是否缓存
 *  breadcrumb 面包屑是否显示
 *
 */

// 路由表
export const constantRoutes = [
  // 像登录和404这些页面是单独的布局
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true, // 不需要展示在侧边栏
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
      },
    ],
  },
];

// 路由
// const createRouter = ()=>new VueRouter({

// })
