// 导入
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Play from "@/views/Play";

// 挂载
Vue.use(VueRouter);

// 创建路由规则
const routes = [
  {
    path: "/",
    redirect: "layout",
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "layout/home",
    children: [
      {
        path: "home",
        component: Home,
        meta: {
          title: "首页",
        },
        path: "search",
        component: Search,
        meta: {
          title: "首页",
        },
      },
    ],
    path: "play",
    component: Play,
  },
];

// 创建路由对象
const router = new VueRouter(
    routes
);

// 导出路由对象
export default router;
