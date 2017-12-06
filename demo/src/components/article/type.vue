<template>
	<div class="typef">		
		<div class="type">
			<!-- 		<a href="" v-for="(type,index) in types"><img :src="type.img" alt="">{{type.text}}</a> -->
			<router-link to="/channel" v-for="(type,index) in types" :key="index"><img :src="type.img" alt="">{{type.text}}</router-link>
		</div>
	</div>
</template>
<script>
	"use strict";
	export default {
		name:'type',
		data(){
			return{
				types:[
				{img:require('../../assets/imgs/type1.png'),text:"超市生鲜"},
				{img:require('../../assets/imgs/type2.png'),text:"新鲜水果"},
				{img:require('../../assets/imgs/type3.png'),text:"零食小吃"},
				{img:require('../../assets/imgs/type4.png'),text:"鲜花烘培"},
				{img:require('../../assets/imgs/type5.png'),text:"医药健康"},
				{img:require('../../assets/imgs/dada.png'),text:"达达同城送"},
				]	
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.typef{
		width:100%;
		overflow-x: auto;
		
	}
	.type{
		overflow-y: hidden;
		overflow-x: auto;
		background-color: #fff;
		font-size: 0;
		white-space: nowrap;
		a{
			width:20%;
			display: inline-block;
			vertical-align: top;
			@include fl(12px,20px,#000000);
			padding: 20px 0 13px;
			@extend %textstyle;
			text-align: center;
			img{
				width:70%;
				display: block;
				margin:0 auto;
			}
		}
	}
</style>