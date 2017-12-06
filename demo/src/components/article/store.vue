<template>
	<ul class="nearstore">
		<li class="store1" v-for="(item,index) in storeinfo" :key="index">
			<div class="st1Div">
				<!-- 店铺logo -->
				<router-link  title="" class="s1logo" to="/detail"><span><img :src="item.image" alt=""></span></router-link>
				<!-- 店铺介绍 -->
				<div class="st1cont">
					<router-link  href="" title="" to="/detail">
						<!-- 店铺名字 -->
						<div class="s1title"><h2>{{item.storename}}</h2></div>
						<!-- 店铺送货时间 -->
						<div class="s1time">
							<div>
								<span>{{item.express.option}}</span>
								<i>-</i>
								<em>{{item.express.time}}</em>
							</div>
						</div>
						<!-- 月销量 -->
						<div class="s1sales">
							<!-- 星星 -->
							<p class="star">
								<span>
									<i></i>
									<i></i>
									<i></i>
									<i></i>
								</span>
							</p>
							<!-- 月销量文本 -->
							<p class="salestxt"><span></span>{{item.order}}</p>
						</div>
						<!-- 运费 -->
						<span class="freichar">{{item.frecharge}}</span>
					</router-link>
					<!-- 优惠福利 -->
					<div class="discount">
						<!-- 首单领券 -->
						<div class="quandiv">
							<router-link  title="" class="quan" to="/detail">
								<ul>
									<li>
										<i class="lq">领券</i>
										<span>{{item.quan}}</span>
									</li>
									<li>
										<i class="lq sd">首单</i>
										<span>{{item.yunfei}}</span>
									</li>
								</ul>
							</router-link>
						</div>
						<!-- 热销商品 -->
						<div class="hotgoods">
							<router-link to="/detail"><span><img src="../../assets/imgs/cong.jpg" alt=""><em>省1元</em></span><i>￥0.1</i></router-link>
							<router-link to="/detail"><span><img src="../../assets/imgs/jiao.jpg" alt=""><em>省2元</em></span><i>￥1.5</i></router-link>
							<router-link to="/detail"><span><img src="../../assets/imgs/toma.jpg" alt=""><em>热销</em></span><i>￥5.9</i></router-link>
							<router-link to="/detail"><span><img src="../../assets/imgs/jzg.jpg" alt=""><em>省4元</em></span><i>￥3.3</i></router-link>
						</div>	
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
	"use strict";
	export default {
		name:'store',
		props:["storeinfo"],
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.store1{
	position: relative;
	padding: 15px 10px;
	border-top: 1px solid #e7e9e4;
	background: #FFF;
	.st1Div{
		position:relative;
		.s1logo{
			@include position(left,top,0,0);
			span{
				position: relative;
				display: block;
				&::after{

				}
				img{
					width: 64px;
					height: 64px;
					border-radius: 4px;
					border: 1px solid #e8e8e8;
					display: inline-block;
					margin-right: 8px;
				}
			}
		}
	}
}
.st1cont{
	font-size: 12px;
	color: #999;
	margin-left: 76px;
	a{
		display: block;
		.s1title{
			height:20px;
			h2{
				font-size: 16px;
				color: #333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: inline-block;
				margin-top: 0;
				font-weight: bold;
			}
		}
		.s1time{
			font-size: 0;
			padding-top: 10px;
			div{
				display: inline-block;
				border: 1px solid $dadacolor;
				@include fl(0,0,$dadacolor);
				border-radius: 2px;
				line-height: 0;
				height: 15px;
				overflow: hidden;
				span{
					padding: 2px;
					display: inline-block;
					@include fl(10px,10px,$dadacolor);
				}
				i{
					@include fl(10px,10px,$dadacolor);
				}
				em{
					padding: 2px;
					display: inline-block;
					@include fl(10px,10px,$dadacolor);
				}
			}
		}
	}
	.s1sales{
		height: 14px;
		margin-top: 8px;
		overflow: hidden;
		font-size: 0;
		.star{
			height: 12px;
			padding-top: 2px;
			overflow: hidden;
			display: inline-block;
			position: relative;
			span{
				display: inline-block;
				font-size: 0;
				i{
					display: inline-block;
					width: 10px;
					height: 10px;
					@include bg("newStar.png",0,0,auto,10px);
					margin-right:1px;
				}
			}
		}
		.salestxt{
			@include fl(11px,14px,#999);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: inline-block;
			span{
				display: inline-block;
				width: 8px;
				height: 10px;
				@include bg("icon_line_split.jpg",center,2px,auto,auto);
			}
		}
	}
	.freichar{
		display: block;
		margin-top: 8px;
		font-size: 11px;
		color: #999999;
		@extend %textstyle;
	}
}
.discount{
	position: relative;
	padding-bottom: 0;
	margin-top: 12px;
	&::before{
		@include position(top,left,0,0);
		content: '';
		width: 100%;
		height: 1px;
		border-top: 1px dotted #cccccc;
		transform: scale(1,0.5);
	}
	.quandiv{
		position: relative;
		color: #666666;
		font-size: 0px;
		.quan{
			display: inline-block;
			width: 86%;
			font-size: 10px;
			li{
				margin-top: 10px;
				font-size: 10px;
				position: relative;
				color: #999999;
				@extend %textstyle;
				letter-spacing:-20px;
				.lq{
					letter-spacing:0;
					background: #fa3e2d;
					padding: 0 2px;
					margin-right: 4px;
					border-radius: 2px;
					color: #ffffff;
					height: 14px;
					line-height: 14px;
				}
				.sd{
					background: #FF6C57;
				}
				span{
					letter-spacing: 0;
				}
			}
		}
	}
}
.hotgoods{
	font-size: 0;
	vertical-align: top;
	white-space: nowrap;
	padding-top: 12px;
	a{
		position: relative;
		display: inline-block;
		overflow: hidden;
		width: 25%;
		text-align: center;
		font-size: 0;
		span{
			position: relative;
			display: block;
			width: 60px;
			height: 60px;
			border: 1px solid #f7f7f7;
			border-radius: 3px;
			img{
				display: inline-block;
				width: 100%;
			}
			em{
				@include position(left,top,0,0);
				padding: 1px 2px;
				font-size: 9px;
				color: #FFF;
				background-color: #fc2c50;
			}
		}
		i{
			@include fl(12px,17px,#ff5757);
			margin-top: 3px;
			height: 17px;
			vertical-align: top;
			display: block;
			width: 62px;
			@extend %textstyle;
		}
	}
}
</style>