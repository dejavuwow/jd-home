<template>
	<!-- 搜索框 -->
	<div id="typelink">
		<search :hold="placehold"></search>
		<div class="swiper2">
			<swm :swipers="swipers"></swm>
		</div>
		<div class="goodtype1">
			<Goodtype :type="type" :className="className"></Goodtype>
		</div>
		<div class="swiper2">
			<swm :swipers="swipers2"></swm>
		</div>
		<minimenu></minimenu>
	</div>
</template>
<script>
	"use strict";
	import Swiper from '@/assets/js/swiper-3.4.2.min.js';
	import swm from '../element/swiper';
	import search from '../element/search';
	import Goodtype from '../element/goodtype';
	import minimenu from '../element/minimenu';
	export default {
		name:"typelink",
		components:{swm,search,Goodtype,minimenu},		
		data(){
			return {
				placehold:"搜索附近的商品和门店",
				swipers:[
				{'img':require('../../assets/imgs/caiyuan.jpg')},
				{'img':require('../../assets/imgs/caiyuan2.jpg')},
				],
				swipers2:[
				{'img':require('../../assets/imgs/youhui.jpg')},
				{'img':require('../../assets/imgs/film.jpg')},
				{'img':require('../../assets/imgs/breakf.jpg')},
				],
				type:[
				{class:"wright",text1:"坏菜包赔",text2:"35减9",img:require('../../assets/imgs/xj.jpg')},
				{class:"wright",text1:"低至1分",text2:"30减12",img:require('../../assets/imgs/xgs.png')},
				{class:"wright",text1:"6枚鸡蛋",text2:"1块9",img:require('../../assets/imgs/vege.png')},
				{class:"wright",text1:"米面粮油",text2:"超市便利",img:require('../../assets/imgs/mmly.png')},
				{class:"wright",text1:"方便素食",text2:"懒人专区",img:require('../../assets/imgs/chi.png')},
				{class:"wright",text1:"超市便利",text2:"天天9折",img:require('../../assets/imgs/chao.png')},
				],
			}
		},
		methods:{
			className(index){
				var classv = this.type[index].class;
				if(classv instanceof Array){
					return (classv.toString().replace(","," "))
				}else{
					return classv;
				}
			},
		},
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.swiper2{
		background-color: #fff;
		position: relative;
		width:95%;
		margin: 2% auto;
	}
	#typelink{
		.swiper2{
			a{
				display: block;
				width:100%;
				img{
					display: block;
					width:100%;
					height:auto;
				}
			}
		}
	}
	.goodtype1{
		margin-top: count(10rem);
		background: #fff;
		ul{
			font-size: 0;
			a{
				overflow: hidden;
				div{
					margin-top: 0.32rem;
				}
			}
			li:nth-of-type(odd) a{
				border-bottom: 2px solid #F3F6F4;
				border-right: 2px solid #F3F6F4;
				
			}
			li:nth-of-type(even) a{
				border-right: 0;
				border-bottom: 2px solid #F3F6F4;
			}
		}
	}
	
</style>