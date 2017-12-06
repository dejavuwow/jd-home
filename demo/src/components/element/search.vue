<template>
	<!-- 搜索框 -->
		<div class="s1a1">
			<slot name="a1"></slot>
			<div class="s1a1middle">
				<i></i>
				<input type="" name="" class="s1inp" :placeholder="hold" autofocus>
				<em></em>
			</div>
			<slot name="span"></slot>
		</div>
</template>
<script>
	"use strict";
	export default {
		name:"sbox",
		props:["hold"],
		data(){
			return {
				
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.s1a1{
		@include fl(17px,44px,#555);
		z-index: 9;
		height: 44px;
		background-color: #fff;
		text-align: center;
		@include flex(row,space-around);
		align-items:center;
		
	}
	.s1a1middle{
		flex:1;
		margin-left:8px;
		margin-right:8px;
		background: #fff;
		border-radius: 2px;
		border: 1px solid #e6e6e6;
		height: 28px;
		padding: 0 5px 0 20px;
		position: relative;
		i{
			@extend %bgsearch;
			@include position(top,left,0,0);
			background-position: -8px -8px;
			width: 44px;
			height: 44px;
		}
		input{
			padding: 3px 0;
			outline: none;
			vertical-align: top;
			background: transparent;
			border: none;
			font-family: "microsoft yahei",Verdana,Arial,Helvetica,sans-serif;
			font-size: 14px;
			height: 28px;
			width: 90%;
			box-sizing: border-box;
		}
		em{
			display: none;
			@extend %bgsearch;
			@include position(top,right,0,0);
			background-position: -8px -140px;
			width: 28px;
			height: 28px;
		}
	}

</style>