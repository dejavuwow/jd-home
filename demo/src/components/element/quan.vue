<template>
	<ul class="quan1">
		<li>
			<div class="quan1d1">
				<div class="quans1">
					<span>15</span>
					<i>元</i>
				</div>
				<div class="quans">
					<div class="q1">
						<div class="q1a">满39元可用</div>
						<div class="q1b">2017.11.13-2017.11.15</div>
					</div>
				</div>				
			</div>
			<div class="quan1d2">
				<div class="quanr">
					<span>领券</span>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
	"use strict";
	export default {
		name:"quan",
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.quan1{
		li{
			position: relative;
			height: 70px;
			margin: 9px;
			border-radius: 5px;
			overflow: hidden;
			border-left: 3px solid #ff5757;
			box-sizing: border-box;
			.quan1d1{
				float: left;
				height: 100%;
				width: 100%;
				.quans{
					position: relative;
					margin-left: 60px;
					margin-right: 71px;
					height: 100%;
					background-color: #fffbfb;
					border-top: 1px solid #ff9d9d;
					border-bottom: 1px solid #ff9d9d;
					box-sizing: border-box;
					.q1{
						position: absolute;
						left: 6px;
						right: 0;
						top: 50%;
						transform: translate(0,-50%);
						text-align: left;
						.q1a{
							margin-bottom: 4px;
							color: #333;
							@extend %textstyle;
							font-size: 14px;
						}
						.q1b{
							margin-bottom: 3px;
							font-size: 11px;
							color: #666;
							@extend %textstyle;
						}
					}
				}
				.quans1{
					float: left;
					width: 60px;
					height: 100%;
					position: relative;
					text-align: center;
					background-color: #fffbfb;
					line-height: 70px;
					border-top: 1px solid #ff9d9d;
					border-bottom: 1px solid #ff9d9d;
					box-sizing: border-box;
					span{
						font-size: 20px;
						color: #ff4f64;
						font-family: Arial,'Microsoft YaHei',Verdana,Arial,Helvetica,sans-serif;
					}
					i{
						margin-left: -4px;
						font-size: 15px;
						color: #ff4f64;
					}
				}
			}
			.quan1d2{
				float: left;
				position: relative;
				width: 61px;
				height: 100%;
				margin-left: -71px;
				@include bg("store_act_new_conpon.png",0,0,10px,100%);
				padding-left: 10px;
			}
		}
	}
	.quanr{
		width: 100%;
		height: 100%;
		border-top: 1px solid #FFF;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background-color: #fffbfb;
		border: 1px solid #ff9d9d;
		border-left: none;
		box-sizing: border-box;
		span{
			display: block;
			width: 50px;
			height: 20px;
			@include fl(13px,20px,#fefffe);
			text-align: center;
			margin: 24px auto 0;
			background-color: #ff5757;
			border-radius: 20px;
		}
	}
</style>