<template>
	<div class="mine">
		<!-- 登录注册 -->
		<div class="userdata">
			<i class="datai"></i>
			<!-- 	<span class="login">登录/注册</span> -->
			<router-link class="login" to="/login1" tag="span">登录/注册</router-link>
			<div class="wt">
				<label class="wu"><label></label></label>
				<label class="wv"><em class="msg"></em></label>
			</div>
		</div>
		<!-- 钱包 -->
		<div class="wallet">
			<ul>
				<li class="wli">
					<a href="" title="">
						<i></i>
						<b>我的钱包</b>
					</a>
				</li>
				<li class="wli2">
					<a href="" title="">
						<i>--</i>
						优惠券
					</a>
				</li>
				<li class="wli2">
					<a href="" title="">
						<i>--</i>
						白条
					</a>
				</li>
			</ul>
		</div>
		<!-- 红包广告 -->
		<div class="adver">
			<ul>
				<li><a href=""><img :src="swipers[0].img" alt=""></a></li>
			</ul>
		</div>
		<!-- 个人菜单选项 -->
		<div class="v7">
			<a href="" v-for="(option,index) in options"><img :src="option.img" alt="">{{option.text}}</a>
		</div>
		<Footer1 classname="mine"></Footer1>
	</div>
</template>
<script>
	"use strict";
	import Footer1 from './footer'; 
	import swm from './../element/swiper';
	import Swiper from '@/assets/js/swiper-3.4.2.min.js';
	export default {
		name:"mine",
		components:{Footer1,swm},
		data(){
			return{
				swipers:[
				{img:require("../../assets/imgs/hongbao.png")}
				],
				options:[
				{text:"我的关注",img:require("../../assets/imgs/atten.png")},
				{text:"我的评价",img:require("../../assets/imgs/comment.png")},
				{text:"我的地址",img:require("../../assets/imgs/add.png")},
				{text:"退款/售后",img:require("../../assets/imgs/aftersales.png")},
				{text:"客服反馈",img:require("../../assets/imgs/service.png")},
				{text:"帮助中心",img:require("../../assets/imgs/help.png")},
				{text:"调查问卷",img:require("../../assets/imgs/question.png")},
				{text:"办公室超市",img:require("../../assets/imgs/supermarket.png")},
				{text:"关于我们",img:require("../../assets/imgs/aboutus.png")},
				
				]
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	/*登录注册*/
	.userdata{
		font-size: 0;
		position: relative;
		padding-top: 24px;
		min-height: 91px;
		color: #fff;
		background: #fff url(../../assets/imgs/my_bgnew.png) center bottom no-repeat;
		background-size: cover;
		overflow: hidden;
		.datai{
			@include bg("bg_head_new.png",center,center,auto,61px);
			display: inline-block;
			width: 61px;
			height: 61px;
			margin: 0 0 0 16px;
			border-radius: 50px;
			vertical-align: middle;
			text-align: center;
		}
		.login{
			@include fl(14px,16px,#fff);
			display: inline-block;
			height: 16px;
			padding: 6px 10px 8px;
			border-radius: 2px;
			letter-spacing: 1px;
			background-color: #69c575;
			margin-left: 5px;
			vertical-align: middle;
		}
		.wt{
			width:100%;
			@include position(top,left,0,0);
			height: 50px;
			z-index: 20;
			.wu{
				z-index: 2;
				display: inline-block;
				@include position(top,right,-5px,40px);
				padding: 20px 0 20px 20px;
				label{
					float: left;
					margin-right: 12px;
					width: 22px;
					height: 22px;
					@include bg("icon_er.png",center,center,22px,auto);
				}
			}
			.wv{
				display: inline-block;
				width: 22px;
				height: 22px;
				@include bg("user_message_icon.png",center,center,22px,auto);
				@include position(top,right,-5px,0);
				padding: 20px 10px 20px 20px;
				.msg{
					display: inline-block;
					width: 5px;
					height: 5px;
					background-color: #f00;
					@include position(top,right,18px,14px);
					border-radius: 5px;
				}
			}
		}
	}
	/*钱包*/
	.wallet{
		height: 70px;
		margin-bottom: 10px;
		padding-left: 15px;
		background-color: white;
		ul{
			font-size: 0;
			padding-top: 20px;
			padding-bottom: 12px;
			@include position(left,top,0,103px);
			width: 100%;
			z-index: 15;
			@include bg("user_wallet_bg.png",0,0,100%,auto);
			li{
				text-align: center;
				display:inline-block;
				a{
					@include fl(12px,25px,#323232);
					text-align: center;
					display: block;
					position: relative;
				}
			}
			.wli{
				position: relative;
				width: 30%;
				&::after{
					height: 100%;
					content: '';
					width: 3px;
					@include position(top,right,0,-1px);
					@include bg("packet-right-border@2x.png",0,0,3px,44px);
					transform: scaleX(0.5);
					z-index: 2;
				}
				a{
					@include fl(12px,25px,#323232);
					text-align: center;
					display: block;
					position: relative;
					i{
						position: relative;
						left: 50%;
						@include bg("icon_packet.png",0,0,25px,25px);
						display: block;
						width: 25px;
						height: 25px;
						margin-left: -12px;
					}
					b{
						font-weight: normal;
					}
				}
			}
		}
	}
	.wli2{
		width: 33%;
		i{
			display: block;
			height: 25px;
			@include fl(14px,25px,#323232);
		}
	}
	.adver{
		margin-bottom: 10px;
		background-color: white;
		a{
			img{
				height: 75px;
				width:100%;
				display: block;
			}
		}
	}
	/*选项菜单*/
	.v7{
		padding-left: 0;
		font-size: 0;
		margin-bottom: 10px;
		background-color: white;
		a{
			@include fl(13px,35px,#323232);
			display: inline-block;
			padding: 1px 0 25px 0;
			width: 25%;
			border-bottom: 1px solid #e8e8e8;
			text-align: center;
			position: relative;
			img{
				display: block;
				width: 47px;
				height: 47px;
				margin: 0 auto;
			}
		}
	}
</style>