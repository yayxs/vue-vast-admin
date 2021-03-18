import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
          title: "Dashboard",
          icon: "dashboard",
          affix: true, // tag 不可被删除
          noCache: false, // 缓存
        },
      },
    ],
  },
  {
    path: "/zip",
    component: Layout,
    redirect: "/zip/download",
    alwaysShow: true,
    name: "Zip",
    meta: { title: "Zip", icon: "zip" },
    children: [
      {
        path: "download",
        component: () => import("@/views/zip/index"),
        name: "ExportZip",
        meta: { title: "Export Zip" },
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
