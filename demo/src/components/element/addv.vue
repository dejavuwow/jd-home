<template>
	<div class="wrap">
		<div class="swiper2">
			<ul>
				<li><a href="" title=""><img :src="img" alt=""></a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	"use strict";
	export default {
		name:'addv',
		props:["img"]
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.wrap{
		background: #ffffff;
	}
	.swiper2{
		background-color: #fff;
		position: relative;
		margin: 2% 10px 2% 10px;
		img{
			display:block;
			width:100%;
			height:auto;
		}
	}
</style>