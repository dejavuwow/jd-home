<template>
	<section class="current">
		<div class="a7">
			<table class="ctable">
				<tbody>
					<tr>
						<td>
							<div class="a7j">
								购物车还空空如也哦~
								<br>
								登录后将同步购物车中商品
								<br>
								<router-link to="/login1">立即登录</router-link`>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Footer1 classname="car"></Footer1>
	</section>
</template>
<script>
	import Footer1 from './footer'; 
	"use strict";
	export default {
		name:"car",
		components:{Footer1},
		
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.a7{
		background-color: rgb(255, 255, 255);
		padding: 0 0 99px 0;
		text-align: center;
	}
	.ctable{
		table-layout: fixed;
		background-color: #fff;
		z-index: 5;
		border-collapse: collapse;
		@include position(left,top,0,0,fixed);
		width: 100%;
		height: 100%;
		td{
			text-align: center;
			vertical-align: middle;
			.a7j{
				padding: 100px 0 160px 0;
				@include fl(14px,20px,#666);
				text-align: center;
				@include bg("unlogin.png",center,top,96px,96px);
				a{
					display: inline-block;
					vertical-align: top;
					padding: 0 8px;
					@include fl(15px,35px,#fff);
					background-color: #47b34f;
					margin-top: 16px;
					border-radius: 3px;
				}
			}
		}
	}
</style>