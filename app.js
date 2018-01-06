import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes/routes.js";
import vueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(vueResource);

//修改页面的title
import VueWechatTitle from 'vue-wechat-title';
Vue.use(VueWechatTitle); 

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
var router = new VueRouter({
	routes// （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能


new Vue({
	el: "#app",
	router,
	data:{
		msg:"hello"
	}
})
