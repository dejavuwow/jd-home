// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';

import './assets/sass/reset.scss';
import './assets/css/animate.min.css';
import './assets/js/animate.min.js';
// import './assets/js/swiper-3.4.2.min.js';
// require('./assets/js/swiper-3.4.2.min.js');
import './assets/css/swiper-3.4.2.min.css';
import './assets/js/index.js';
import Vueresource from 'vue-resource';



// import Router from 'vue-router';
import router from './router';
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
Vue.use(Vueresource);
Vue.config.productionTip = false
// Vue.use(Router);
/* eslint-disable no-new */
// var router = new Router({
// 		routes:[
// 		{
// 			path:"/user/:id",
// 			props:true,
// 			component:{
// 				props:["id"],
// 				template:"<div>{{id}}</div>"
// 				// template:"<div>{{$route.params.id}}</div>"				
// 			}
// 		}
// 		]
// 	});

new Vue({
	el: '#app',
	template: "<App />",
	router,
	components: {App}
});
