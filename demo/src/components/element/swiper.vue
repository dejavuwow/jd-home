<template>
	<div class="swiper-container">
		<ul class="swiper-wrapper" :class="classnm">
			<li v-for="(swiper,index) in swipers" class="swiper-slide"><a href=""><img :src="swiper.img" alt=""></a></li>
		</ul>
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	"use strict";
	export default {
		name:"swm",
		props:["swipers","classnm"],
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
  				autoplay: 5000,//可选选项，自动滑动
  				speed:1000,
  				autoplayDisableOnInteraction : false,//兼容手机端滑动
  				loop:true,//让轮播滚动
  				pagination : '.swiper-pagination',
  				paginationClickable :true,
  				observer:true,
  				observeParents:true,
  			});
		},
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
		border:2px solid white;
		opacity:1;
		background-color:transparent;
		display: inline-block;
		width:3px;
		height:3px;

	}
	.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active{
		opacity:1;
		background-color:white;
	}
	.swiper-wrapper{
		transition-timing-function:ease-out;
	}
</style>
