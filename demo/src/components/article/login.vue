<template>
	<div>
		<header>
			<i></i>
			<span>京东登录</span>
		</header>
		<section class="page">
			<div class="logintab">

			</div>
		</section>
	</div>
</template>
<script>
	"use strict";
	export default {
		name:"login",
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	header{
		height: .45rem*2;
		line-height: .45rem*2;
		background: #f9f9f9;
		color: #616161;
		font-size: .17rem*2;
		border-bottom: 1px solid #bbb;
		z-index: 999;
		text-align: center;
		box-sizing: border-box;
		i{
			width: .22rem*2;
			height: .22rem*2;
			overflow: hidden;
			@include position(top,left,.12rem*2,.12rem*2);
			@include bg("iconBg.png",0,-.63rem*2,100%,auto);
		}
	}
	.page{
		background: white;
		overflow-y: auto;
		box-sizing: border-box;
		.logintab{
			@include fl(.28rem,.88rem);
			border-bottom: 1px solid #d7d7d7;
		}
	}
</style>