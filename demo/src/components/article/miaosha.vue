<template>
	<div class="wrap1">
		<Goodtype :type="type" :className="className">
			<li class="wleft">
				<a href="">
					<span></span>
					<i>{{miaosha.text}}</i>
					<em></em>
					<img :src="miaosha.img" alt="">
				</a>
			</li>
		</Goodtype>
	</div>
</template>
<script>
	"use strict";
	import Goodtype from "../element/goodtype";
	export default {
		name:'ms',
		components:{Goodtype},
		data(){
			return {
				miaosha:{text:"秒杀抢不停",img:require('../../assets/imgs/miaosha.png')},
				type:[
				{class:["wright","line"],text1:"坏菜包赔",text2:"30减15",img:require('../../assets/imgs/vege.png')},
				{class:"wright",text1:"医药健康",text2:"49减12",img:require('../../assets/imgs/medic.png')},
				]
			}
		},
		methods:{
			className:function(index){
				var classv = this.type[index].class;
				if(classv instanceof Array){
					return (classv.toString().replace(","," "))
				}else{
					return classv;
				}
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.wrap1{
		margin-top:10px;
		ul{
			background-color: #fff;
			overflow: hidden;
			position: relative;
			font-size: 0;
			.wleft{
				width:43%;
				height:3.42rem;
				float: left;
				position: relative;
				&::after{
					height: 100%;
					content: '';
					width: 1px;
					border-right: 1px solid #e8e8e8;
					@include position(top,right,0,-1px);
				}
				a{
					height: 100%;
					display: block;
					position: relative;
					font-size: 12px;
					overflow:hidden;
					span{
						margin-top: 0.6rem;
						height: 0.5rem;
						display:block;
						@include bg("icon_miaosha.png",center,center,1.82rem,auto);
					}
					i{
						font-style: normal;
						color: #999;
						margin: 0 auto;
						height: 0.42rem;
						line-height: 0.42rem;
						margin-bottom: 0.1rem;
						text-align: center;
						display: block;
					}
					em{
						width: 0.88rem;
						height: 0.88rem;
						@include position(right,top,0,0);
						@include bg("icon_qiang.png",0,0,0.88rem,auto);
					}
					img{
						width: 1.7rem;
						height: 1.7rem;
						display: block;
						margin: 0 auto;
					}
				}
			}
		}
	}

</style>