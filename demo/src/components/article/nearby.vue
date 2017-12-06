<template>
	<div class="nearby">
		<span>附近的店铺</span>
	</div>
</template>
<script>
	"use strict";
	export default {
		name:'nby',
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.nearby{
		@include fl(14px,50px,#70704e);
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		position: relative;
		background-color: #FFF;
		&::before{
			content: '';
			height: 1px;
			border-top: 1px solid #333;
			width: 228px;
			@include position(top,left,50%,50%);
			transform: scaleY(0.5) translate(-50%,0);
			margin-top: -1px;
		}
		span{
			position: relative;
			padding: 0 5px;
			background-color: #FFF;
			display: inline-block;
			height: 50px;
			@include fl(17px,48px,#333);
			font-weight: bold;
		}
	}
</style>