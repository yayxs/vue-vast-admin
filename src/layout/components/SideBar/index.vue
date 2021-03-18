<template>
  <div :class="{ 'has-logo': true }">
    <logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss"; // 使用sass中变量
export default {
  name: "SideBar",
  components: {
    Logo,
    SidebarItem,
  },
  data() {
    return {
      activeMenu: "/dashboard",
      isCollapse: false,
      showLogo: true,
      sidebar: { opened: true, withoutAnimation: false },
      permission_routes: [
        {
          path: "/nested",
          // component: Layout,
          redirect: "/nested/menu1/menu1-1",
          name: "Nested",
          meta: {
            title: "Nested Routes",
            icon: "nested",
          },
          children: [
            {
              path: "menu1",
              // component: () => import("@/views/nested/menu1/index"), // Parent router-view
              name: "Menu1",
              meta: { title: "Menu 1" },
              redirect: "/nested/menu1/menu1-1",
              children: [
                {
                  path: "menu1-1",
                  // component: () => import("@/views/nested/menu1/menu1-1"),
                  name: "Menu1-1",
                  meta: { title: "Menu 1-1" },
                },
                {
                  path: "menu1-2",
                  // component: () => import("@/views/nested/menu1/menu1-2"),
                  name: "Menu1-2",
                  redirect: "/nested/menu1/menu1-2/menu1-2-1",
                  meta: { title: "Menu 1-2" },
                  children: [
                    {
                      path: "menu1-2-1",
                      // component: () =>
                      //   import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                      name: "Menu1-2-1",
                      meta: { title: "Menu 1-2-1" },
                    },
                    {
                      path: "menu1-2-2",
                      // component: () =>
                      //   import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                      name: "Menu1-2-2",
                      meta: { title: "Menu 1-2-2" },
                    },
                  ],
                },
                {
                  path: "menu1-3",
                  // component: () => import("@/views/nested/menu1/menu1-3"),
                  name: "Menu1-3",
                  meta: { title: "Menu 1-3" },
                },
              ],
            },
            {
              path: "menu2",
              name: "Menu2",
              // component: () => import("@/views/nested/menu2/index"),
              meta: { title: "Menu 2" },
            },
          ],
        },
        {
          path: "/",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/dashboard",
          children: [
            {
              hidden: false, // 不会在侧边栏出现
              path: "dashboard",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Dashboard",
              meta: { title: "Dashboard", icon: "dashboard", affix: true },
            },
          ],
        },
        {
          path: "/zip",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/zip/download",
          alwaysShow: true,
          name: "Zip",
          meta: { title: "Zip", icon: "zip" },
          children: [
            {
              path: "download",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ExportZip",
              meta: { title: "Export Zip" },
            },
          ],
        },
        {
          path: "external-link",
          // component: Layout,
          children: [
            {
              path: "https://github.com/PanJiaChen/vue-element-admin",
              meta: { title: "External Link", icon: "link" },
            },
          ],
        },
      ],
      permission_route: [
        {
          path: "/redirect",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          hidden: true,
          children: [
            {
              path: "/redirect/:path(.*)",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
            },
          ],
        },
        {
          path: "/login",
          component: {
            _custom: {
              type: "function",
              display: "<span>ƒ</span> component()",
            },
          },
          hidden: true,
        },
        {
          path: "/auth-redirect",
          component: {
            _custom: {
              type: "function",
              display: "<span>ƒ</span> component()",
            },
          },
          hidden: true,
        },
        {
          path: "/404",
          component: {
            _custom: {
              type: "function",
              display: "<span>ƒ</span> component()",
            },
          },
          hidden: true,
        },
        {
          path: "/401",
          component: {
            _custom: {
              type: "function",
              display: "<span>ƒ</span> component()",
            },
          },
          hidden: true,
        },
        {
          path: "/",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/dashboard",
          children: [
            {
              path: "dashboard",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Dashboard",
              meta: { title: "Dashboard", icon: "dashboard", affix: true },
            },
          ],
        },
        {
          path: "/documentation",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Documentation",
              meta: {
                title: "Documentation",
                icon: "documentation",
                affix: true,
              },
            },
          ],
        },
        {
          path: "/guide",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/guide/index",
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Guide",
              meta: { title: "Guide", icon: "guide", noCache: true },
            },
          ],
        },
        {
          path: "/profile",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/profile/index",
          hidden: true,
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Profile",
              meta: { title: "Profile", icon: "user", noCache: true },
            },
          ],
        },
        {
          path: "/permission",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/permission/page",
          alwaysShow: true,
          name: "Permission",
          meta: {
            title: "Permission",
            icon: "lock",
            roles: ["admin", "editor"],
          },
          children: [
            {
              path: "page",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "PagePermission",
              meta: { title: "Page Permission", roles: ["admin"] },
            },
            {
              path: "directive",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DirectivePermission",
              meta: { title: "Directive Permission" },
            },
            {
              path: "role",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "RolePermission",
              meta: { title: "Role Permission", roles: ["admin"] },
            },
          ],
        },
        {
          path: "/icon",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Icons",
              meta: { title: "Icons", icon: "icon", noCache: true },
            },
          ],
        },
        {
          path: "/components",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "noRedirect",
          name: "ComponentDemo",
          meta: { title: "Components", icon: "component" },
          children: [
            {
              path: "tinymce",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "TinymceDemo",
              meta: { title: "Tinymce" },
            },
            {
              path: "markdown",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "MarkdownDemo",
              meta: { title: "Markdown" },
            },
            {
              path: "json-editor",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "JsonEditorDemo",
              meta: { title: "JSON Editor" },
            },
            {
              path: "split-pane",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "SplitpaneDemo",
              meta: { title: "SplitPane" },
            },
            {
              path: "avatar-upload",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "AvatarUploadDemo",
              meta: { title: "Upload" },
            },
            {
              path: "dropzone",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DropzoneDemo",
              meta: { title: "Dropzone" },
            },
            {
              path: "sticky",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "StickyDemo",
              meta: { title: "Sticky" },
            },
            {
              path: "count-to",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "CountToDemo",
              meta: { title: "Count To" },
            },
            {
              path: "mixin",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ComponentMixinDemo",
              meta: { title: "Component Mixin" },
            },
            {
              path: "back-to-top",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "BackToTopDemo",
              meta: { title: "Back To Top" },
            },
            {
              path: "drag-dialog",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DragDialogDemo",
              meta: { title: "Drag Dialog" },
            },
            {
              path: "drag-select",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DragSelectDemo",
              meta: { title: "Drag Select" },
            },
            {
              path: "dnd-list",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DndListDemo",
              meta: { title: "Dnd List" },
            },
            {
              path: "drag-kanban",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DragKanbanDemo",
              meta: { title: "Drag Kanban" },
            },
          ],
        },
        {
          path: "/charts",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "noRedirect",
          name: "Charts",
          meta: { title: "Charts", icon: "chart" },
          children: [
            {
              path: "keyboard",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "KeyboardChart",
              meta: { title: "Keyboard Chart", noCache: true },
            },
            {
              path: "line",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "LineChart",
              meta: { title: "Line Chart", noCache: true },
            },
            {
              path: "mix-chart",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "MixChart",
              meta: { title: "Mix Chart", noCache: true },
            },
          ],
        },
        {
          path: "/nested",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/nested/menu1/menu1-1",
          name: "Nested",
          meta: { title: "Nested Routes", icon: "nested" },
          children: [
            {
              path: "menu1",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Menu1",
              meta: { title: "Menu 1" },
              redirect: "/nested/menu1/menu1-1",
              children: [
                {
                  path: "menu1-1",
                  component: {
                    _custom: {
                      type: "function",
                      display: "<span>ƒ</span> component()",
                    },
                  },
                  name: "Menu1-1",
                  meta: { title: "Menu 1-1" },
                },
                {
                  path: "menu1-2",
                  component: {
                    _custom: {
                      type: "function",
                      display: "<span>ƒ</span> component()",
                    },
                  },
                  name: "Menu1-2",
                  redirect: "/nested/menu1/menu1-2/menu1-2-1",
                  meta: { title: "Menu 1-2" },
                  children: [
                    {
                      path: "menu1-2-1",
                      component: {
                        _custom: {
                          type: "function",
                          display: "<span>ƒ</span> component()",
                        },
                      },
                      name: "Menu1-2-1",
                      meta: { title: "Menu 1-2-1" },
                    },
                    {
                      path: "menu1-2-2",
                      component: {
                        _custom: {
                          type: "function",
                          display: "<span>ƒ</span> component()",
                        },
                      },
                      name: "Menu1-2-2",
                      meta: { title: "Menu 1-2-2" },
                    },
                  ],
                },
                {
                  path: "menu1-3",
                  component: {
                    _custom: {
                      type: "function",
                      display: "<span>ƒ</span> component()",
                    },
                  },
                  name: "Menu1-3",
                  meta: { title: "Menu 1-3" },
                },
              ],
            },
            {
              path: "menu2",
              name: "Menu2",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              meta: { title: "Menu 2" },
            },
          ],
        },
        {
          path: "/table",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/table/complex-table",
          name: "Table",
          meta: { title: "Table", icon: "table" },
          children: [
            {
              path: "dynamic-table",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DynamicTable",
              meta: { title: "Dynamic Table" },
            },
            {
              path: "drag-table",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "DragTable",
              meta: { title: "Drag Table" },
            },
            {
              path: "inline-edit-table",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "InlineEditTable",
              meta: { title: "Inline Edit" },
            },
            {
              path: "complex-table",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ComplexTable",
              meta: { title: "Complex Table" },
            },
          ],
        },
        {
          path: "/example",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/example/list",
          name: "Example",
          meta: { title: "Example", icon: "el-icon-s-help" },
          children: [
            {
              path: "create",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "CreateArticle",
              meta: { title: "Create Article", icon: "edit" },
            },
            {
              path: "edit/:id(\\d+)",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "EditArticle",
              meta: {
                title: "Edit Article",
                noCache: true,
                activeMenu: "/example/list",
              },
              hidden: true,
            },
            {
              path: "list",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ArticleList",
              meta: { title: "Article List", icon: "list" },
            },
          ],
        },
        {
          path: "/tab",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Tab",
              meta: { title: "Tab", icon: "tab" },
            },
          ],
        },
        {
          path: "/error",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "noRedirect",
          name: "ErrorPages",
          meta: { title: "Error Pages", icon: "404" },
          children: [
            {
              path: "401",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Page401",
              meta: { title: "401", noCache: true },
            },
            {
              path: "404",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Page404",
              meta: { title: "404", noCache: true },
            },
          ],
        },
        {
          path: "/error-log",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "log",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ErrorLog",
              meta: { title: "Error Log", icon: "bug" },
            },
          ],
        },
        {
          path: "/excel",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/excel/export-excel",
          name: "Excel",
          meta: { title: "Excel", icon: "excel" },
          children: [
            {
              path: "export-excel",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ExportExcel",
              meta: { title: "Export Excel" },
            },
            {
              path: "export-selected-excel",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "SelectExcel",
              meta: { title: "Export Selected" },
            },
            {
              path: "export-merge-header",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "MergeHeader",
              meta: { title: "Merge Header" },
            },
            {
              path: "upload-excel",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "UploadExcel",
              meta: { title: "Upload Excel" },
            },
          ],
        },
        {
          path: "/zip",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/zip/download",
          alwaysShow: true,
          name: "Zip",
          meta: { title: "Zip", icon: "zip" },
          children: [
            {
              path: "download",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ExportZip",
              meta: { title: "Export Zip" },
            },
          ],
        },
        {
          path: "/pdf",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          redirect: "/pdf/index",
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "PDF",
              meta: { title: "PDF", icon: "pdf" },
            },
          ],
        },
        {
          path: "/pdf/download",
          component: {
            _custom: {
              type: "function",
              display: "<span>ƒ</span> component()",
            },
          },
          hidden: true,
        },
        {
          path: "/theme",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "Theme",
              meta: { title: "Theme", icon: "theme" },
            },
          ],
        },
        {
          path: "/clipboard",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "index",
              component: {
                _custom: {
                  type: "function",
                  display: "<span>ƒ</span> component()",
                },
              },
              name: "ClipboardDemo",
              meta: { title: "Clipboard", icon: "clipboard" },
            },
          ],
        },
        {
          path: "external-link",
          component: {
            _custom: {
              type: "component-definition",
              display: "Layout <span>(src/layout/index.vue)</span>",
              tooltip: "Component definition",
              file: "src/layout/index.vue",
            },
          },
          children: [
            {
              path: "https://github.com/PanJiaChen/vue-element-admin",
              meta: { title: "External Link", icon: "link" },
            },
          ],
        },
        { path: "*", redirect: "/404", hidden: true },
      ],
    };
  },
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>

<style lang="scss" scoped></style>
