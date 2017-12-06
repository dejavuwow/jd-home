<template>
	<section class="orderv">
		<div class="zc">
			<div class="ul">
				<p>登录后才能查看订单哦</p>
				<router-link to="/login1">立即登录</router-link`>
			</div>
		</div>
		<Footer1 classname="order"></Footer1>
	</section>
</template>
<script>
	"use strict";
	import Footer1 from './footer';
	export default {
		name:"order",
		components:{Footer1},
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.orderv{
		display: block;
		width:100%;
		height:100%;
	}
	.zc{
		min-height: 568px;
		@include bg("unlogin.png",center,center,96px,auto);
		transform: translateY(-90px);
		position: relative;
		.ul{
			@include fl(15px,1,#666);
			position: absolute;
			top: 50%;
			padding-top: 63px;
			text-align: center;
			width: 100%;
			a{
				display: inline-block;
				margin-top: 8px;
				padding: 10px 8px;
				border-radius: 3px;
				border: 1px solid #47b34f;
				color: #47b34f;
				background: #fff;
				line-height: 1;
			}
		}
	}
</style>