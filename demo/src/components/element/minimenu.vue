<template>
	<div class="minimenu"  @click="toggle" @touchstart="st1($event)" @touchmove="move1($event)" @touchend="end1">
		<div class="minimenus" v-if="show">
			<router-link v-for="(minimenu,index) in minimenus" :to="minimenu.path" key="index" tag="a">{{minimenu.text}}</router-link>
			<i></i>
		</div>
	</div>
</template>
<script>
	"use srict";
	export default {
		name:"minimenu",
		data(){
			return{
				show:false,
				minimenus:[
				{text:"首页",path:"/home"},
				{text:"分类",path:"/type"},
				{text:"购物车",path:"/car"},
				{text:"订单",path:"/order"},
				{text:"我的",path:"/mine"},
				],
				oH:0,
			}
		},
		methods:{
			defaultEvent(e){
				e.preventDefault();
			},
			toggle(){
				this.show = !(this.show);
			},
			st1(e){
				var touches = e.touches[0];
				var mini = document.getElementsByClassName("minimenu")[0];
				this.oH = touches.clientY - mini.offsetTop;
				document.addEventListener("touchmove",this.defaultEvent,{passive:false,capture:false});		
			},
			move1(e){
				var mini = document.getElementsByClassName("minimenu")[0];
				var touches = e.touches[0];
				if(touches.clientY>200 &&touches.clientY<400){
					var oTop = touches.clientY - this.oH;
					mini.style.top = oTop + "px";
				}
			},
			end1(){
				document.removeEventListener("touchmove",this.defaultEvent,{passive:false,capture:false});
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.minimenu{
		@include position(top,right,320px,0,fixed);
		z-index: 1000;
		width: 36px;
		height: 36px;
		background: rgba(0,0,0,0.8) url(../../assets/imgs/bm.png) 7px 7px no-repeat;
		background-size: 65px 20px;
		border: 1px solid #757575;
		border-radius: 4px 0 0 4px;
	}
	.minimenus{
		@include position(bottom,right,42px,-1px);
		width: 95px;
		border: 1px solid #757575;
		background: rgba(0,0,0,0.8);
		i{
			@include position(bottom,right,-12px,10px);
			width: 0;
			height: 0;
			z-index: 15;
			border-width: 6px;
			border-color: rgba(0,0,0,0.8) transparent transparent transparent;
			border-style: solid;
		}
	}
	@for $i from 1 through 6{
		.minimenus>a:nth-of-type(#{$i}){
			display: block;
			padding-left: 38px;
			border-bottom: 1px solid #4b4b4b;
			line-height: 35px;
			height: 35px;
			color: #fff;
			@include bg("bmenu.png",10px,(-50px * ($i - 1)),16px,300px);
		}
	}
</style>