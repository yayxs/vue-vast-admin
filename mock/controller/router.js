const routes = [
  {
    path: "/",
    component: "Layout",
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
];

export default [
  {
    url: "/menu/navigate",
    type: "post",
    response: (config) => {
      console.log(config);
      return { code: 200, msg: "success", data: routes };
    },
  },
];
