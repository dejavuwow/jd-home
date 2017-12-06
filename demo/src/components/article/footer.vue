<template>
	<footer class="footmenu" :class="classname">
		<!-- <a href="" v-for="(menu,index) in menus" @mouseover="change(index)" :class="classcop(index)">{{menu.text}}</a> -->
		<router-link v-for="(menu,index) in menus" :to="menu.path" :key="index">{{menu.text}}</router-link`>
		</footer>
	</template>
	<script>
		"use strict";
		export default {
			name:"footmenu",
			props:["classname"],
			data(){
				return{
					menus:[
					{text:"首页",path:"/home"},
					{text:"分类",path:"/type"},
					{text:"购物车",path:"/car"},
					{text:"订单",path:"/order"},
					{text:"我的",path:"/mine"},
					],
					acindex:"",
				}
			},
			methods:{
				change(index){
					this.acindex = index;
				},
				classcop(index){
				if(this.acindex==index){
					var position = "center -"+index+"rem";
					console.log(position)
					return {
						"color":"#39ac69",
						"background-position":position
					}
				}else{
					return ''
				}			
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.footmenu{
		@include position(left,bottom,0,0,fixed);
		z-index: 801;
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 1px solid #d9d9d9;
		font-size:0;
	}
	.footmenu a{
		display: inline-block;
		vertical-align: top;
		width: 20%;
		text-align: center;
		padding-top: 30px;
		height: 20px;
	}
	$listhome:2,3,4,5;
	@each $i in $listhome{
		.home>a:nth-of-type(#{$i}){
			@include fl(12px,17px,#555);
			@include bg("nav4.png",center,(-200px - $i * 50px),24px,600px);
		}
	}
	.home>a:nth-of-type(1){
		@include fl(12px,17px,#39ac69);
		@include bg("nav4.png",center,0,24px,600px);
	}
	$listtype:1,3,4,5;
	@each $i in $listtype{
		.type1>a:nth-of-type(#{$i}){
			@include fl(12px,17px,#555);
			@include bg("nav4.png",center,(-200px - $i * 50px),24px,600px);
		}
	}
	.type1>a:nth-of-type(2){
		@include fl(12px,17px,#39ac69);
		@include bg("nav4.png",center,-50px,24px,600px);
	}
	$listcar:1,2,4,5;
	@each $i in $listcar{
		.car>a:nth-of-type(#{$i}){
			@include fl(12px,17px,#555);
			@include bg("nav4.png",center,(-200px - $i * 50px),24px,600px);
		}
	}
	.car>a:nth-of-type(3){
		@include fl(12px,17px,#39ac69);
		@include bg("nav4.png",center,-100px,24px,600px);
	}
	$listorder:1,2,3,5;
	@each $i in $listorder{
		.order>a:nth-of-type(#{$i}){
			@include fl(12px,17px,#555);
			@include bg("nav4.png",center,(-200px - $i * 50px),24px,600px);
		}
	}
	.order>a:nth-of-type(4){
		@include fl(12px,17px,#39ac69);
		@include bg("nav4.png",center,-150px,24px,600px);
	}
	$listmine:1,2,3,4;
	@each $i in $listmine{
		.mine>a:nth-of-type(#{$i}){
			@include fl(12px,17px,#555);
			@include bg("nav4.png",center,(-200px - $i * 50px),24px,600px);
		}
	}
	.mine>a:nth-of-type(5){
		@include fl(12px,17px,#39ac69);
		@include bg("nav4.png",center,-200px,24px,600px);
	}
</style>