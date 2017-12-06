import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Hd from '@/components/article/hd';
import typelink from '@/components/article/typelink';
import typemain from '@/components/article/typemain';
import Car from '@/components/article/car';
import Order from '@/components/article/order';
import Mine from '@/components/article/mine';
import Login from '@/components/article/login';
import login1 from '@/components/article/login1';
import detail from '@/components/article/detail';
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     }
//   ]
// })
export default new Router({
	routes:[
	{
		path:"/",
		props:true,
		component:Hd,
	},
	{
		path:"/home",
		props:true,
		component:Hd,
	},
	{
		path:"/type",
		props:true,
		component:typemain
	},
	{
		path:"/car",
		props:true,
		component:Car
	},
	{
		path:"/order",
		props:true,
		component:Order
	},
	{
		path:"/mine",
		props:true,
		component:Mine
	},
	{
		path:"/channel",
		component:typelink
	},
	{
		path:"/login",
		component:Login
	},
	{
		path:"/login1",
		component:login1
	},
	{
		path:"/detail",
		component:detail
	}
	]
});