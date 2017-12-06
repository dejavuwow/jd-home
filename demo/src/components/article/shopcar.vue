<template>
	<div class="shpcar">
		<div class="a5k"></div>
		<div class="a5h"></div>
		<a href="javascript:;" class="shpa" :class="shpb" :style="transY()" @click="carshow"><i v-show="display">{{gnumber}}</i></a>
		<div class="a5n" :class="trx">
			<div :class="a5i">{{price}}</div>
		</div>
		<a href="" class="price1" :class="disabled">去结算</a>
		<div class="minicar" :class="showObj">
			<a href="javascript:;" class="shpa" :class="shpc" @click="carshow"><i v-show="display">{{gnumber}}</i></a>
			<i class="i5v"></i>
			<div class="a5w">
				<span class="check checked">全选</span>
				<p>(已选1件，共0.25kg)</p>
				<a href="" class="clear">清空购物车</a>
			</div>
			<div class="cargood">
				<ul>
					<li class="carli" v-for="(item,index) in ordergd">
						<span class="check2 checked"></span>
						<a href="">
							<table>
								<tbody>
									<tr>
										<td class="" class="gimg"><img :src="item.img" alt="" class="a61"></td>
										<td>
											<div class="cgtl">{{item.text1}}</div>
											<div class="uniprice">￥{{item.price}}</div>
										</td>
									</tr>
								</tbody>
							</table>
						</a>
						<a href="javascript:;" class="redu" @click="redu(index)"></a>
						<em class="count1">{{item.number}}</em>
						<a href="javascript:;" class="plus" @click="add(index)"></a>
					</li>
				</ul>
			</div>
			<div class="panel"></div>
		</div>	
		<div class="bgauto" :class="disp" @click="carhid"></div>
	</div>	
</template>
<script>
	"use strict";
	import bus from '../../assets/js/eventBus.js';
	export default {
		name:"shopcar",
		props:[],
		data(){
			return{
				showObj:{show1:false},
				// shpb:{shpb:false},
				// shpc:{shpc:false},
				disp:{disp:false},
				ordergd:[],
				show:false,

			}
		},
		computed:{
			trx(){
				return {trx:this.disp.disp,}
			},	
			price(){
				if(this.ordergd.length == 0){
					return "购物车是空的"
				}else{
					var price = 0;
					this.ordergd.forEach(function(v,k){
						price += v.number*v.price;
					})
					price = price.toFixed(1);
					return '￥'+price;
				}
			},
			a5i(){
				return {
					a5i:this.ordergd.length == 0,
				}
			},	
			gnumber(){
				var gNmuber = 0;
				this.ordergd.forEach(function(v,k){
					gNmuber += v.number;
				})
				return gNmuber
			},
			disabled(){
				return {
					disabled:this.ordergd.length == 0,
				}
			},
			display(){
				return this.ordergd.length != 0
			},
			shpb(){
				return {
					shpb:this.ordergd.length != 0,
					shpd:this.show,
				}
			},
			shpc(){
				return{
					shpc:this.ordergd.length != 0,
				}
			},
		},
		methods:{
			transY(){			
				if(this.disp.disp){
					var minicar = document.getElementsByClassName("minicar")[0];
					var trY = minicar.offsetHeight;
					return{
						transform:"translateY"+"("+ -trY +"px"+")",
						visibility: "hidden",
					}
				}else{
					return ''
				}
			},
			add(index){
				this.ordergd[index].number++;
			},
			redu(index){
				var th = this.ordergd[index];
				if(th.number>1){
					th.number--;
				}else if(th.number==1){
					// this.transY();
					th.number--;
					this.ordergd.splice(index,1);	

				}
				if(this.ordergd.length==0){
					this.showObj.show1 = false;
					this.disp.disp = false;
				}
			},
			carshow(){
				console.log(this.ordergd)
				if(this.ordergd.length != 0){
					this.showObj.show1 = !this.showObj.show1;
					this.disp.disp = !this.disp.disp;
				}else{
					return false;
				}
			},
			carhid(){
				this.showObj.show1 = false;
				this.disp.disp = false;
			},
		},
		mounted(){
			var th = this;
			bus.$on('dataev',function(data){
				th.ordergd = data.ordergd;
				th.show = data.show1
				setTimeout(function(){
					th.show = false;
				},400);
			})
		},
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.shpcar{
		@include position(bottom,right,0,0,fixed);
		z-index: 1001;
		left: 0;
		width:100%;
		height: 48px;
		background-color: #fff;
		border-top: 1px solid #bbb;
	}
	.a5k{
		display: none;
		position: absolute;
		z-index: 16;
		left: 0;
		top: -30px;
		right: 0;
		height: 30px;
		overflow: hidden;
		font-size: 12px;
		line-height: 28px;
		text-align: center;
		background-color: #f2edca;
		border-top: 1px solid #e4d294;
	}
	.a5h{
		position: absolute;
		z-index: 30;
		left: 0;
		top: -1px;
		right: 0;
		bottom: 0;
		background-color: #fff;
		border-top: 1px solid #d9d9d9;
	}
	.shpa{
		@include position(left,top,0,0);
		z-index: 50;
		width: 80px;
		height: 48px;
		@include bg("cart.png",10px,5px,50px,125px);
		i{
			position: absolute;
			top: 5px;
			left: 44px;
			padding: 0 5px;
			height: 15px;
			line-height: 15px;
			overflow: hidden;
			text-align: center;
			color: #fff;
			background-color: #ff5d5c;
			border-radius: 7px;
			font-size: 10px;
		}
	}
	.light{
		top: -13px;
		height: 58px;
		background-position: 10px -70px;
		background-size: 50px 125px;
	}
	.a5n{
		@include position(left,bottom,70px,0);
		z-index: 40;
		@include fl(18px,48px,#ff3434);
	}
	.a5i{
		font-size: 15px;
		color: #999;
	}
	.price1{	
		position: absolute;
		z-index: 40;
		right: 0;
		width: 115px;
		text-align: center;
		color: #fff;
		line-height: 48px;
		background-color: #47b34f;
	}
	.disabled{
		background-color: #bebebe;
	}
	.minicar{
		width:100%;
		@include position(left,top,0,49px);
		z-index: 20;
		transition: transform .5s ease-out 0s;
		background-color: #fff;
	}
	.show1{
		transform: translateY(-100%);
		display: block;
	}
	.i5v{
		@include position(left,top,29px,-7px);
		width: 11px;
		height: 7px;
		@include bg("a.png",0,0,11px,7px);
	}
	.a5w{
		position: relative;
		line-height: 40px;
		min-height: 40px;
		color: #666;
		border-bottom: 1px solid #ebebeb;
		p{
			@include position(left,top,74px,1px);
			font-size: 12px;
			color: #666;
		}
		.clear{
			@include position(right,top,0,0);
			padding: 0 12px 0 18px;
			@include bg("delete.png",0,center,13px,12px);
			color: #666;
		}
	}
	.check{
		@include position(top,left,0,0);
		padding-left: 40px;
		padding-right: 20px;
		color: #333;
		@include bg("ck.png",10px,10px,20px,220px);
	}
	.check2{
		@include position(left,top,-10px,6px);
		position: absolute;
		z-index: 3;
		width: 50px;
		height: 60px;
		@include bg("ck.png",10px,20px,20px,220px);
	}
	.checked{
		background-position: 10px -190px;
	}
	.cargood{
		max-height:7rem;
		position:relative;
		background-color: #fbfbfb;
		overflow: scroll;
		ul{
			li{
				position: relative;
				padding: 0 0 10px 30px;
				margin-left: 10px;
				line-height: 36px;
				color: #333;
				border-bottom: 1px solid #e8e8e8;
				a{
					display: block;
					table{
						table-layout: fixed;
						width: 100%;
						border-collapse: collapse;
					}
				}
			}
		}
	}
	.gimg{
		width:62px;
	}
	.a61{
		width: 52px;
		height: 52px;
		margin-top: 10px;
		vertical-align: top;
	}
	.uniprice{
		line-height: 20px;
		color: #ff3434;
		font-size: 16px;
	}
	$list:2,3;
	@each $i in $list{
		.carli>a:nth-of-type(#{$i}){
			@include position(top,right,22px,(3 - $i)*61px);
			z-index: 3;
			width: 49px;
			height: 52px;
			@include bg("op.png",center,($i - 2.85)*80px,27px,108px);
		}
	}
	.count1{
		@include position(top,right,22px,35px);
		@include fl(16px,52px,#333);
		width: 39px;
		height: 52px;
		overflow: hidden;
		text-align: center;
	}
	.bgauto{
		display: none;
		position:fixed;
		z-index: 13;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0,0,0,0.4);
	}
	.shpb{
		top: -13px;
		height: 58px;
		background-position: 10px -70px;
		background-size: 50px 125px;
		transition: transform .5s ease-out 0s;
	}
	.shpc{
		@extend .shpb;
		top:-63px;
		
	}
	.disp{
		display:block;
	}
	.panel{
		height: 49px;
	}
	.trx{
		transition: transform .4s ease-out 0s;
		transform:translateX(-60px);
	}
	.shpd{
		animation:big-animation .2s linear 1 .2s;
	}
	@keyframes big-animation{
		0%{
			-webkit-transform: scale(1);
			-webkit-transform-origin:50% 100%;
			transform-origin:50% 100%;
			transform: scale(1);
		}
		50%{
			-webkit-transform: scale(1.2);
			-webkit-transform-origin:50% 100%;
			transform-origin:50% 100%;
			transform: scale(1.2);
		}
		100%{
			-webkit-transform: scale(1);
			-webkit-transform-origin:50% 100%;
			transform-origin:50% 100%;
			transform: scale(1);
		}
	}
</style>