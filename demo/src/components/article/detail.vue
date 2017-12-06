<template>
	<div class="storeall">


		<div class="storeif" @click="show" :style="showObject">
			<div class="storetl">
				<img src="../../assets/imgs/storeeg.jpg" alt="">
				<div class="tj">
					<div class="tjtl">
						<h2>鲜家-于家巷店</h2>
					</div>
					<p>达达专送-52分钟</p>
					<p><span>基础运费4元</span></p>
				</div>
				<div class="co">
					<i></i>
				</div>
				<div class="freichar1">
					<ul>
						<li>
							<i>运费</i>
							<span>满49免基础运费</span>
						</li>
					</ul>
				</div>
				<div class="notice">
					<div class="notice1">
						<i>公告</i>
						<div>天气较炎热所有菜品到家都需放冰箱冷藏预防变质或损坏，谢谢你们的配合</div>
					</div>
				</div>
			</div>
			<div class="storem">
				<div class="yhq">
					<div class="quantl">
						<h2>店铺优惠券</h2>
					</div>
					<quan></quan>
				</div>
				<div class="storecom">
					<div class="quantl">
						<h2>店铺评价</h2>
					</div>
					<ul class="comcont">
						<li>
							<div class="comdiv">
								<div class="score1 cl">
									<div class="sc1a">4.7</div>
									<div class="sc1b">综合评分</div>
								</div>
								<div class="score1">
									<div class="sc1a">142</div>
									<div class="sc1b">评论数</div>
								</div>
							</div>
						</li>
						<li class="grade">
							<ul>
								<li>
									<div class="headerpic">
										<img src="../../assets/imgs/evaluateHeader.jpg" alt="">
									</div>
									<div class="usercom">
										<div class="namedate">
											<span>玻***含</span>
											<i>2017-11-12 19:03:10</i>
										</div>
										<div class="othercom">
											<span>
												<i></i>
												<i></i>
												<i></i>
												<i></i>
												<i></i>
											</span>
											<div class="product">
												<i></i>
												<div class="single">
													<a href="">【11-11】鲜家特供 苏北香米500g/份</a>
													<a href="">【11-11】厨房必备 葱姜蒜组合 中葱100g+姜100g+蒜头1个 总计250g/份</a>
													<a href="">【11-11】黄心土豆480g～550g/份</a>
													<a href="">【11-11】新 红薯 约 500g/份</a>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="rawall">
							<a href="">查看用户的全部评价 ></a>
						</li>
					</ul>
				</div>
				<div class="stinfo">
					<div class="quantl">
						<h2>店铺信息</h2>
					</div>				
					<ul>
						<li class="sta1">
							<div class="sta1d">
								<span>商品数量：</span>
								<i>615件</i>
							</div>
							<div class="sta1d">
								<span>月销单量：</span>
								<i>153单</i>
							</div>
							<div class="sta1d">
								<span>关注人数：</span>
								<i>585人</i>
							</div>
							<div class="sta1d">
								<span>营业时间：</span>
								<i>08:00-18:00</i>
							</div>
							<div class="sta1d">
								<span>门店地址：</span>
								<i>江苏省南京市鼓楼区于家巷10号于家巷菜市场(距您12695.83km)</i>
							</div>
							<div class="sta1d">
								<span>门店电话：</span>
								<i>13913915660</i>
							</div>
						</li>
						<li class="sta2">
							<a href="">
								<span>商家资质</span>
								<strong></strong>
							</a>
						</li>
						<li class="sta2">
							<a href="">
								<span>举报商家得红包</span>
								最高奖100元
								<strong></strong>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="conti" v-show="display1" @click="continue1">
			<i></i>
			<span>点击继续购物</span>
		</div>
		<minimenu></minimenu>
		<detail2 :class="trans" v-show="display"></detail2>
		<shopcar  v-show="display2"  ref="cart"></shopcar>	
	</div>
</template>
<script>
	"use strict";
	import quan from "../element/quan";
	import detail2 from "./detail2";
	import minimenu from "../element/minimenu";
	import shopcar from './shopcar';
	export default {
		name:"stroeif",
		components:{quan,detail2,minimenu,shopcar},
		data(){
			return{
				trans:{
					transactive:false,
				},
				display2:true,
				display1:false,
				display:true,
				showObject:{
					position:"fixed",
				}
			}
		},
		methods:{
			show(){
				this.showObject.position = "relative";
				this.trans.transactive = true;
				this.display2 = false;
				var th =this;
				setTimeout(function(){
					th.display = false;		
					th.display1 = true;
				}, 400);
			},
			continue1(){
				this.showObject.position = "fixed";
				this.display = true;			
				var th =this;
				setTimeout(function(){
					th.trans.transactive = false;
					
				}, 10);
				setTimeout(function(){
					th.display1 = false;
					th.display2 = true;
					
				}, 400);

			}
		}

	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.storeif{
		min-height: 649px;
		position: relative;
		background: #d6aa9f url(../../assets/imgs/store_industry_service.jpg) 0 0 no-repeat;
		background-size: cover;
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
	}
	.storetl{
		position: relative;
		color: #FFF;
		min-height: 62px;
		img{
			@include position(left,top,2px,6px);
			width: 52px;
			height: 53px;
			border-radius: 4px;
			border: 1px solid rgba(255,255,255,0.8);
			background-color: #FFF;
		}
	}
	.tj{
		padding-left: 66px;
		line-height: 20px;
		padding-right: 58px;
		min-height: 64px;
		@extend %textstyle;
		p{
			position: relative;
			@include fl(10px,14px);
		}
		.tjtl{
			&::after{
				clear: both;
				display: block;
				content: "...";
				visibility: hidden;
				height: 0;
				font-size: 0;
			}
			h2{
				width: 100%;
				@include fl(18px,28px);
				padding-top:1px;
				font-weight: normal;
				font-style: normal;
				@extend %textstyle;
			}
		}
	}
	.co{
		@include position(top,right,6px,2px);
		@include fl(12px,1.4,#fff);
		width: 40px;
		height: 26px;
		text-align: right;
		i{
			float: right;
			width: 22px;
			height: 18px;
			@include bg("focus.png",0px,-2px,60px,auto);
			background-image: url(//static-o2o.360buyimg.com/daojia/new/images/store/focus.png);
		}
	}
	.freichar1{
		position: relative;
		padding-top: 14px;
		border-top: none;
		margin-top: 0;
		color: #666666;
		font-size: 0px;
		ul{
			width: 76%;
			display: inline-block;
			font-size: 10px;
			li{
				margin-bottom: 8px;
				margin-top: 0;
				i{
					background: #5CA7FF;
					margin-left: 3px;
					display: inline-block;
					padding: 0 2px;
					margin-right: 4px;
					border-radius: 2px;
					color: #ffffff;
					height: 14px;
					line-height: 14px;
				}
				span{
					color:#fff;
				}
			}
		}
	}
	.notice{
		margin-top: 10px;
		&::after{
			clear: both;
			display: block;
			content: "...";
			visibility: hidden;
			height: 0;
			font-size: 0;
		}
		.notice1{
			line-height: 16px;
			padding: 0 0 0 3px;
			i{
				float: left;
				display: inline-block;
				background-color: #fff;
				@include fl(10px,14px,#333)
				border: none;
				padding: 0 2px;
				border-radius: 2px;
				height: 14px;
				margin-top: 2px;
			}
			div{
				margin-bottom: 5px;
				padding: 0 26px 0 37px;
				color: #fff;
				font-size: 10px;
				text-overflow: ellipsis;
			}
		}
	}
	.storem{
		padding-top: 5px;
		padding-bottom: 35px;
	}
	.quantl{
		position: relative;
		margin-bottom: 20px;
		&::before{
			content: '';
			position: absolute;
			top: 9px;
			left: 0;
			right: 64%;
			border-top: 1px solid rgba(255,255,255,0.4);
		}
		&::after{
			content: '';
			position: absolute;
			left: 64%;
			top: 9px;
			right: 0;
			border-top: 1px solid rgba(255,255,255,0.4);
		}
		h2{
			font-weight: normal;
			position: relative;
			width: 32%;
			margin: 0 auto;
			@include fl(15px,18px,#fff);
			text-align: center;
		}
	}
	.storecom{
		padding-top: 25px;
		color: #FFF;
	}
	.comcont{
		position: relative;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
		padding-top: 0;
		margin-bottom: 10px;
		margin-top: -1px;
		background-color: rgba(255,255,255,0.1);
		border-radius: 3px;
		overflow: hidden;
		&::before{
			border-bottom: 1px dashed rgba(236,236,236,0.5);
			z-index: 2;
		}
	}
	.comdiv{
		padding: 15px 0;
		color: #fff;
		&::before{
			border-bottom: 1px dashed rgba(236,236,236,0.5);
			z-index: 2;
		}
		&::after{
			clear: both;
			display: block;
			content: "...";
			visibility: hidden;
			height: 0;
			font-size: 0;
		}
		.score1{
			float: left;
			width: 50%;
			box-sizing: border-box;
			position: relative;
			.sc1a{
				text-align: center;
				font-size: 27px;
				font-weight: bold;
				height: 36px;
				line-height: 36px;
				overflow: hidden;
			}
			.sc1b{
				overflow: hidden;
				text-align: center;
				font-size: 12px;
				height: 18px;
				line-height: 18px;
			}
		}
	}
	.cl{
		&::after{
			height: 100%;
			content: '';
			width: 1px;
			border-right: 1px solid #e8e8e8;
			@include position(top,right,0,-1px);
			transform: scaleX(0.5);
			z-index: 2;
		}
	}
	.grade{
		padding-bottom: 10px;
		padding-top: 20px;
		color: #FFF;
		&::after{
			clear: both;
			display: block;
			content: "...";
			visibility: hidden;
			height: 0;
			font-size: 0;
		}
		ul{
			padding: 0;
			overflow: hidden;
			li{
				overflow: hidden;
				position: relative;
			}
		}
	}
	.headerpic{
		float: left;
		img{
			width: 35px;
			height: 35px;
			display: inline-block;
			border-radius: 18px;
			float: left;
		}
	}
	.usercom{
		margin-left: 40px;
		color: #fff;
	}
	.namedate{
		line-height: 16px;
		position: relative;
		span{
			margin-right: 130px;
			@extend %textstyle;
		}
		i{
			@include position(right,top,0,0);
			font-size: 12px;
			line-height: 16px;
		}
	}
	.othercom{
		padding-top: 5px;
		overflow: hidden;
		span{
			display: inline-block;
			font-size: 0;
			&::after{
				clear: both;
				display: block;
				content: "...";
				visibility: hidden;
				height: 0;
				font-size: 0;
			}
			i{
				display: inline-block;
				width: 10px;
				height: 10px;
				@include bg("newStar.png",0,0,auto,10px);
				background-position: 0 0;
				margin-right: 1px;
			}
		}
	}
	.product{
		margin-top: 19px;
		i{
			display: inline-block;
			@include bg("spriteZan.png",-18px,0,300%,100%);
			width: 18px;
			height: 18px;
			float: left;
			margin-top: 3px;
		}
	}
	.single{
		margin-left: 16px;
		overflow: hidden;
		max-height: 60px;
		line-height: 22px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		a{
			@include fl(12px,initial,rgba(255,255,255,0.6));
			@extend %textstyle;
			display: inline-block;
			border: 1px solid rgba(255,255,255,0.6);
			margin: 0 0 10px 10px;
			border-radius: 3px;
			padding: 2px 4px;
			max-width: 82px;
			float: left;
		}
	}
	.rawall{
		position: relative;
		&::before{
			@include position(top,right,0,0);
			height: 1px;
			content: '';
			width: 100%;
			border-top: 1px dashed #ececec;
			transform: scaleY(0.5);
			z-index: 5;
		}
		a{
			display: block;
			height: 46px;
			@include fl(14px,46px,#fff);
			text-align: center;
		}
	}
	.stinfo{
		padding-top: 25px;
		padding-bottom: 35px;
		color: #FFF;
		ul{
			padding: 10px;
			padding-bottom: 0;
			padding-top: 0;
			margin-bottom: 10px;
			margin-top: -1px;
			background-color: rgba(255,255,255,0.1);
			border-radius: 3px;
			overflow: hidden;
			.sta1{
				padding-top: 20px;
				padding-bottom: 5px;
				color: #FFF;
				line-height: 24px;
				&::after{
					clear: both;
					display: block;
					content: "...";
					visibility: hidden;
					height: 0;
					font-size: 0;
				}
				.sta1d{
					margin-bottom: 5px;
					&::after{
						clear: both;
						display: block;
						content: "...";
						visibility: hidden;
						height: 0;
						font-size: 0;
					}
					span{
						background: none;
						float: left;
					}
				}
			}
		}
	}
	.sta2{
		padding-top: 12px;
		padding-bottom: 12px;
		color: #FFF;
		line-height: 24px;
		position: relative;
		&::before{
			@include position(top,right,0,0);
			height: 1px;
			content: '';
			width: 100%;
			border-top: 1px dashed #ececec;
			transform: scaleY(0.5);
			z-index: 5;
		}
		&::after{
			height: 1px;
			content: '';
			width: 100%;
			border-top: 1px solid #e8e8e8;
			@include position(top,right,0,0);
			transform: scaleY(0.5);
			z-index: 10;
			clear: both;
			display: block;
		}
		a{
			color: #FFF;
			display: block;
			text-align: right;
			&::after{
				clear: both;
				display: block;
				content: "...";
				visibility: hidden;
				height: 0;
				font-size: 0;
			}
			span{
				float:left;
			}
			strong{
				margin-top: 6px;
				float: right;
				width: 15px;
				height: 15px;
				@include bg("store_sprites_4.6.png",-100px,-146px,220px,auto);
			}
		}
	}
	.conti{
		@include position(left,bottom,0,0,fixed);
		z-index: 10;
		width: 100%;
		height: 36px;
		padding-top: 10px;
		color: #666;
		text-align: center;
		background: #f2f8f3;
		box-shadow: 0 0 9px rgba(0,0,0,0.2);
		transition:400ms;
		i{
			display: block;
			width: 15px;
			height: 8px;
			margin: 0 auto 5px;
			@include bg("store_sprites_4.6.png",-15px,-18px,220px,auto);
		}
		span{

		}
	}
</style>