import Vue from 'vue'
import Router from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import home from "./../com/Home.vue";
import xuexi from "./../com/Xuexi.vue";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由
const routes = [{
	path: '/',
	redirect: '/home',
}, {
	path: '/home',
	component: home,
	meta: {
		title: '自定义指令'
	}
}, {
	path: '/xuexi',
	component: xuexi,
	meta: {
		title: '学习'
	}
}]
//暴露出去
export default routes;