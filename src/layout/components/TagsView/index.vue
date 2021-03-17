<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <div class="tags-view-item" v-for="(item, index) in 10" :key="index">
        首页
      </div>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from "./ScrollPane";
export default {
  name: "TagsView",
  data() {
    return {
      visitedViews: [
        {
          fullPath: "/dashboard",
          path: "/dashboard",
          name: "Dashboard",
          meta: { title: "Dashboard", icon: "dashboard", affix: true },
          title: "Dashboard",
        },
        {
          fullPath: "/documentation/index",
          path: "/documentation/index",
          name: "Documentation",
          meta: {
            title: "Documentation",
            icon: "documentation",
            affix: true,
          },
          title: "Documentation",
        },
        {
          name: "Guide",
          meta: { title: "Guide", icon: "guide", noCache: true },
          path: "/guide/index",
          hash: "",
          query: {},
          params: {},
          fullPath: "/guide/index",
          matched: [
            {
              path: "/guide",
              regex: "[native RegExp /^\\/guide(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display: "Layout <span>(src/layout/index.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/layout/index.vue",
                  },
                },
              },
              instances: {
                default: {
                  _custom: {
                    type: "component",
                    id: "1:4",
                    display: "Layout",
                    tooltip: "Component instance",
                    value: {
                      "vuex bindings": {
                        sidebar: { opened: true, withoutAnimation: false },
                        device: "desktop",
                        showSettings: true,
                        needTagsView: true,
                        fixedHeader: false,
                      },
                      computed: {
                        classObj: {
                          hideSidebar: false,
                          openSidebar: true,
                          withoutAnimation: false,
                          mobile: false,
                        },
                      },
                      data: {
                        $route: {
                          _custom: {
                            type: "router",
                            abstract: true,
                            value: {
                              path: "/components/split-pane",
                              query: {},
                              params: {},
                              fullPath: "/components/split-pane",
                              name: "SplitpaneDemo",
                              meta: { title: "SplitPane" },
                            },
                          },
                        },
                      },
                    },
                    fields: { abstract: true },
                  },
                },
              },
              name: "__vue_devtool_undefined__",
              parent: "__vue_devtool_undefined__",
              matchAs: "__vue_devtool_undefined__",
              redirect: "/guide/index",
              beforeEnter: "__vue_devtool_undefined__",
              meta: {},
              props: {},
            },
            {
              path: "/guide/index",
              regex: "[native RegExp /^\\/guide\\/index(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display: "Guide <span>(src/views/guide/index.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/views/guide/index.vue",
                  },
                },
              },
              instances: { default: "__vue_devtool_undefined__" },
              name: "Guide",
              parent: {
                path: "/guide",
                regex: "[native RegExp /^\\/guide(?:\\/(?=$))?$/i]",
                components: {
                  default: {
                    _custom: {
                      type: "component-definition",
                      display: "Layout <span>(src/layout/index.vue)</span>",
                      tooltip: "Component definition",
                      file: "src/layout/index.vue",
                    },
                  },
                },
                instances: {
                  default: {
                    _custom: {
                      type: "component",
                      id: "1:4",
                      display: "Layout",
                      tooltip: "Component instance",
                      value: {
                        "vuex bindings": {
                          sidebar: { opened: true, withoutAnimation: false },
                          device: "desktop",
                          showSettings: true,
                          needTagsView: true,
                          fixedHeader: false,
                        },
                        computed: {
                          classObj: {
                            hideSidebar: false,
                            openSidebar: true,
                            withoutAnimation: false,
                            mobile: false,
                          },
                        },
                        data: {
                          $route: {
                            _custom: {
                              type: "router",
                              abstract: true,
                              value: {
                                path: "/components/split-pane",
                                query: {},
                                params: {},
                                fullPath: "/components/split-pane",
                                name: "SplitpaneDemo",
                                meta: { title: "SplitPane" },
                              },
                            },
                          },
                        },
                      },
                      fields: { abstract: true },
                    },
                  },
                },
                name: "__vue_devtool_undefined__",
                parent: "__vue_devtool_undefined__",
                matchAs: "__vue_devtool_undefined__",
                redirect: "/guide/index",
                beforeEnter: "__vue_devtool_undefined__",
                meta: {},
                props: {},
              },
              matchAs: "__vue_devtool_undefined__",
              redirect: "__vue_devtool_undefined__",
              beforeEnter: "__vue_devtool_undefined__",
              meta: { title: "Guide", icon: "guide", noCache: true },
              props: {},
            },
          ],
          title: "Guide",
        },
        {
          name: "TinymceDemo",
          meta: { title: "Tinymce" },
          path: "/components/tinymce",
          hash: "",
          query: {},
          params: {},
          fullPath: "/components/tinymce",
          matched: [
            {
              path: "/components",
              regex: "[native RegExp /^\\/components(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display: "Layout <span>(src/layout/index.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/layout/index.vue",
                  },
                },
              },
              instances: {
                default: {
                  _custom: {
                    type: "component",
                    id: "1:4",
                    display: "Layout",
                    tooltip: "Component instance",
                    value: {
                      "vuex bindings": {
                        sidebar: { opened: true, withoutAnimation: false },
                        device: "desktop",
                        showSettings: true,
                        needTagsView: true,
                        fixedHeader: false,
                      },
                      computed: {
                        classObj: {
                          hideSidebar: false,
                          openSidebar: true,
                          withoutAnimation: false,
                          mobile: false,
                        },
                      },
                      data: {
                        $route: {
                          _custom: {
                            type: "router",
                            abstract: true,
                            value: {
                              path: "/components/split-pane",
                              query: {},
                              params: {},
                              fullPath: "/components/split-pane",
                              name: "SplitpaneDemo",
                              meta: { title: "SplitPane" },
                            },
                          },
                        },
                      },
                    },
                    fields: { abstract: true },
                  },
                },
              },
              name: "ComponentDemo",
              parent: "__vue_devtool_undefined__",
              matchAs: "__vue_devtool_undefined__",
              redirect: "noRedirect",
              beforeEnter: "__vue_devtool_undefined__",
              meta: { title: "Components", icon: "component" },
              props: {},
            },
            {
              path: "/components/tinymce",
              regex:
                "[native RegExp /^\\/components\\/tinymce(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display:
                      "TinymceDemo <span>(src/views/components-demo/tinymce.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/views/components-demo/tinymce.vue",
                  },
                },
              },
              instances: {
                default: {
                  _custom: {
                    type: "component",
                    id: "1:415",
                    display: "TinymceDemo",
                    tooltip: "Component instance",
                    value: {
                      data: {
                        content:
                          '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>\n<p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /></p>\n<ul>\n<li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>\n<li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li>\n<li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n</ul>',
                        $route: {
                          _custom: {
                            type: "router",
                            abstract: true,
                            value: {
                              path: "/components/split-pane",
                              query: {},
                              params: {},
                              fullPath: "/components/split-pane",
                              name: "SplitpaneDemo",
                              meta: { title: "SplitPane" },
                            },
                          },
                        },
                      },
                    },
                    fields: { abstract: true },
                  },
                },
              },
              name: "TinymceDemo",
              parent: {
                path: "/components",
                regex: "[native RegExp /^\\/components(?:\\/(?=$))?$/i]",
                components: {
                  default: {
                    _custom: {
                      type: "component-definition",
                      display: "Layout <span>(src/layout/index.vue)</span>",
                      tooltip: "Component definition",
                      file: "src/layout/index.vue",
                    },
                  },
                },
                instances: {
                  default: {
                    _custom: {
                      type: "component",
                      id: "1:4",
                      display: "Layout",
                      tooltip: "Component instance",
                      value: {
                        "vuex bindings": {
                          sidebar: { opened: true, withoutAnimation: false },
                          device: "desktop",
                          showSettings: true,
                          needTagsView: true,
                          fixedHeader: false,
                        },
                        computed: {
                          classObj: {
                            hideSidebar: false,
                            openSidebar: true,
                            withoutAnimation: false,
                            mobile: false,
                          },
                        },
                        data: {
                          $route: {
                            _custom: {
                              type: "router",
                              abstract: true,
                              value: {
                                path: "/components/split-pane",
                                query: {},
                                params: {},
                                fullPath: "/components/split-pane",
                                name: "SplitpaneDemo",
                                meta: { title: "SplitPane" },
                              },
                            },
                          },
                        },
                      },
                      fields: { abstract: true },
                    },
                  },
                },
                name: "ComponentDemo",
                parent: "__vue_devtool_undefined__",
                matchAs: "__vue_devtool_undefined__",
                redirect: "noRedirect",
                beforeEnter: "__vue_devtool_undefined__",
                meta: { title: "Components", icon: "component" },
                props: {},
              },
              matchAs: "__vue_devtool_undefined__",
              redirect: "__vue_devtool_undefined__",
              beforeEnter: "__vue_devtool_undefined__",
              meta: { title: "Tinymce" },
              props: {},
            },
          ],
          title: "Tinymce",
        },
        {
          name: "SplitpaneDemo",
          meta: { title: "SplitPane" },
          path: "/components/split-pane",
          hash: "",
          query: {},
          params: {},
          fullPath: "/components/split-pane",
          matched: [
            {
              path: "/components",
              regex: "[native RegExp /^\\/components(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display: "Layout <span>(src/layout/index.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/layout/index.vue",
                  },
                },
              },
              instances: {
                default: {
                  _custom: {
                    type: "component",
                    id: "1:4",
                    display: "Layout",
                    tooltip: "Component instance",
                    value: {
                      "vuex bindings": {
                        sidebar: { opened: true, withoutAnimation: false },
                        device: "desktop",
                        showSettings: true,
                        needTagsView: true,
                        fixedHeader: false,
                      },
                      computed: {
                        classObj: {
                          hideSidebar: false,
                          openSidebar: true,
                          withoutAnimation: false,
                          mobile: false,
                        },
                      },
                      data: {
                        $route: {
                          _custom: {
                            type: "router",
                            abstract: true,
                            value: {
                              path: "/components/split-pane",
                              query: {},
                              params: {},
                              fullPath: "/components/split-pane",
                              name: "SplitpaneDemo",
                              meta: { title: "SplitPane" },
                            },
                          },
                        },
                      },
                    },
                    fields: { abstract: true },
                  },
                },
              },
              name: "ComponentDemo",
              parent: "__vue_devtool_undefined__",
              matchAs: "__vue_devtool_undefined__",
              redirect: "noRedirect",
              beforeEnter: "__vue_devtool_undefined__",
              meta: { title: "Components", icon: "component" },
              props: {},
            },
            {
              path: "/components/split-pane",
              regex:
                "[native RegExp /^\\/components\\/split-pane(?:\\/(?=$))?$/i]",
              components: {
                default: {
                  _custom: {
                    type: "component-definition",
                    display:
                      "SplitpaneDemo <span>(src/views/components-demo/split-pane.vue)</span>",
                    tooltip: "Component definition",
                    file: "src/views/components-demo/split-pane.vue",
                  },
                },
              },
              instances: {
                default: {
                  _custom: {
                    type: "component",
                    id: "1:423",
                    display: "SplitpaneDemo",
                    tooltip: "Component instance",
                    value: {
                      data: {
                        $route: {
                          _custom: {
                            type: "router",
                            abstract: true,
                            value: {
                              path: "/components/split-pane",
                              query: {},
                              params: {},
                              fullPath: "/components/split-pane",
                              name: "SplitpaneDemo",
                              meta: { title: "SplitPane" },
                            },
                          },
                        },
                      },
                    },
                    fields: { abstract: true },
                  },
                },
              },
              name: "SplitpaneDemo",
              parent: {
                path: "/components",
                regex: "[native RegExp /^\\/components(?:\\/(?=$))?$/i]",
                components: {
                  default: {
                    _custom: {
                      type: "component-definition",
                      display: "Layout <span>(src/layout/index.vue)</span>",
                      tooltip: "Component definition",
                      file: "src/layout/index.vue",
                    },
                  },
                },
                instances: {
                  default: {
                    _custom: {
                      type: "component",
                      id: "1:4",
                      display: "Layout",
                      tooltip: "Component instance",
                      value: {
                        "vuex bindings": {
                          sidebar: { opened: true, withoutAnimation: false },
                          device: "desktop",
                          showSettings: true,
                          needTagsView: true,
                          fixedHeader: false,
                        },
                        computed: {
                          classObj: {
                            hideSidebar: false,
                            openSidebar: true,
                            withoutAnimation: false,
                            mobile: false,
                          },
                        },
                        data: {
                          $route: {
                            _custom: {
                              type: "router",
                              abstract: true,
                              value: {
                                path: "/components/split-pane",
                                query: {},
                                params: {},
                                fullPath: "/components/split-pane",
                                name: "SplitpaneDemo",
                                meta: { title: "SplitPane" },
                              },
                            },
                          },
                        },
                      },
                      fields: { abstract: true },
                    },
                  },
                },
                name: "ComponentDemo",
                parent: "__vue_devtool_undefined__",
                matchAs: "__vue_devtool_undefined__",
                redirect: "noRedirect",
                beforeEnter: "__vue_devtool_undefined__",
                meta: { title: "Components", icon: "component" },
                props: {},
              },
              matchAs: "__vue_devtool_undefined__",
              redirect: "__vue_devtool_undefined__",
              beforeEnter: "__vue_devtool_undefined__",
              meta: { title: "SplitPane" },
              props: {},
            },
          ],
          title: "SplitPane",
        },
      ],
    };
  },
  components: {
    ScrollPane,
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: pink;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      color: #495060;
      background-color: #fff;
      font-size: 12px;
      border: 0.5px solid red;
    }
  }
}
</style>
