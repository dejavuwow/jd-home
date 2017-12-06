<!-- 头部轮播图片 -->
<template>
	<div >
		<div class="load" v-show="!display">
			加载中...
		</div>
		<div class="section" v-show="display">
			<div class="head">
				<div class="search" v-if="show">
					<a href="" title="" class="location">
						<span>南京市</span>
						<i></i>
					</a>
					<div class="search1" @click="nearme">
						<a href="" title=""></a>
						附近商家商品
					</div>
					<a href="" title="" class="message">
						<i></i>
					</a>
				</div>
				<div v-if="show" class="swiperf">	
					<swm :swipers="swipers" :classnm="classnm[0]" :show="show"></swm>
				</div>
				<Hds v-if="!show"></Hds>				
			</div>
			<div class="maincont" v-if="show">	
				<Type></Type>
				<Addv :img="addv.img1"></Addv>
				<Addv :img="addv.img2"></Addv>
				<Ms></Ms>
				<Addv :img="addv.img3"></Addv>
				<Nby></Nby>
				<Store :storeinfo="storeinfo"></Store>
				<Footer1 classname="home"></Footer1>
			</div>
		</div>
	</div>
</template>
<script>
	"use strict";
	import Swiper from '@/assets/js/swiper-3.4.2.min.js';
	import Footer1 from './footer';
	import Type from './type';
	import Addv from './../element/addv';
	import Ms from './miaosha';
	import Nby from './nearby';
	import Store from './store';
	import Hds from './hds';
	import swm from './../element/swiper';
	export default {
		name:'hd',
		components:{Type,Addv,Ms,Nby,Store,Hds,swm,Footer1},
		created(){
			this.$http.get("https://easy-mock.com/mock/5a0ab3f0eace860402091e58/jdhome/storeinfo").then(function(res){
				if(res.status!=200){
					this.display = false;
				}else{
					this.display = true;
					this.storeinfo = res.body.storeinfo;
				}
			})
		},
		data(){
			return {
				display:'',
				storeinfo:[],
				show:true,
				classnm:["hdp"],
				color:"#39ac69",
				addv:{
					img1:require('../../assets/imgs/swp1.jpg'),
					img2:require('../../assets/imgs/swp2.png'),
					img3:require('../../assets/imgs/snacks.jpg')
				},
				swipers:[
				{'img':require('../../assets/imgs/addv1.jpg')},
				{'img':require('../../assets/imgs/addv2.jpg')},
				{'img':require('../../assets/imgs/addv3.jpg')},
				{'img':require('../../assets/imgs/addv4.jpg')},
				// {'img':require('../../assets/imgs/youhui.jpg')},
				// {'img':require('../../assets/imgs/film.jpg')},
				// {'img':require('../../assets/imgs/breakf.jpg')},
				]
			}
		},
		methods:{
			nearme:function(){
				this.show = false;
			}
		}
	}
</script>

<style lang="scss">
	@import '../../assets/sass/index.scss';
	.swiperf{
		min-height: count(120rem);
	}
	.head{
		width:100%;
		.search{
			z-index: 2;
			@include bg("index_black_semi.png",0,0,100%,100%);
			@include flex(row,space-around);
			align-items:center;
			height:56px;
			width:100%;
			position:fixed;
			top:0;
			left:0;
			line-height:44px;		
		}
	}
	.location{
		text-align:left;
		height: 24px;
		border-radius:23px;
		@include fl(14px,24px);
		color: #fff;
		letter-spacing:-20px;
		span{
			vertical-align: top;
			display:inline-block;
			@include bg("icon_locate.png",5px,3px,16px,auto);
			padding-left:20px;
			letter-spacing:0;
		}
		i{
			display:inline-block;
			width:10px;
			height:30px;
			@include bg("index_icon.png",5px,-27px,20px,390px);
		}
	}
	.hdp{
		width:100%;
		li{
			a{
				display: block;
				img{
					width:100%;
					height:auto;
					display:block;
				}
			}
		}
	}
	.search1{
		margin-left:0.2rem;
		display:inline-block;
		position: relative;
		background: rgba(255,255,255,0.35);
		height: 30px;
		border-radius: 20px;
		color: #fff;
		@include fl(14px,30px);
		text-align: left;
		padding-left: 30px;
		white-space: nowrap;
		flex:1;
		a{
			display:inline-block;
			width: 30px;
			height: 30px;
			@include bg("index_icon.png",10px,-50px,20px,390px);
			@include position(top,left,-6px,-6px); 
			border-radius: 20px;
			padding: 6px;

		}
	}
	.message{
		width: 18px;
		height: 19px;
		@include bg("index_icon_messagenew.png",center,center,18px,19px);
		margin:0 0.05rem;
		padding: 5px;
		position: relative;
		i{
			width: 5px;
			height: 5px;
			background-color: #f00;
			@include position(top,right,2px,2px);
			border-radius: 4px;
			display:inline-block;
		}
	}
	
</style>