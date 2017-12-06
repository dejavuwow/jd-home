<template>
	<div class="gooddeta">
		<search class="goodse" :hold="placehold"></search>
		<div class="stmain">
			<ul class="gl1">
				<li v-for="(item,index) in main" @click="activeL(index)" class="ali">
					<strong class="goodnm" :class="item.activestr"><span :class="item.activespan">{{item.title}}</span></strong>
					<strong class="typelist" :style="heights(index)">
						<span v-for="(ite,index) in item.goodm1" class="goodnm" :class="ite.activespan" @click.stop="activeS(index)">{{ite.title1}}</span>
					</strong>
				</li>
			</ul>
			<div class="typetl">
				<div>{{fun()}}</div>
			</div>
			<div class="goodlist1">
				<div class="gd1">
					<div class="gd1a">
						<ul>
							<li v-for="(item,index) in acGood()">
								<a href="javascript:;" class="ad1">
									<span class="timg">
										<img :src="item.img" alt="">
									</span>
									<div class="gd2">
										<span>{{item.text1}}</span>
										<p class="gp1"><strong>{{item.sale}}</strong></p>
										<p class="gp2">
											<label><em>￥</em>{{item.price}}</label>
										</p>
									</div>
								</a>
								<div class="comput">
									<span :class="hide(index)" @click="acgoodredu(index)"></span>
									<label :class="hide(index)">{{item.number}}</label>
									<span class="pluv" @click="acgoodadd(index)"></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>
<script>
	"use strict";
	import bus from '../../assets/js/eventBus.js';
	import search from '../element/search';
	export default {
		name:"detail2",
		components:{search},
		props:["goodshow"],
		created(){
			this.$http.get("https://easy-mock.com/mock/5a139dc608cf912c18421084/goodtype/goodtye").then(function(res){
				this.main = res.body.main;
				this.main.forEach(function(v,k){
					v.goodm1[0].activespan.activesp = true;
				})
				this.main[0].activestr.activestr1 = true;
				this.main[0].activestr.activestr = false;
				this.main[0].activestr.activespan = false;
				this.main[0].activeh = true;
				this.fun = this.activett;
				this.acGood = this.acGood1;
			})
			
		},
		data(){
			return{
				placehold:"搜索店内商品",
				show:false,
				acIndex:0,
				acIndex2:0,
				acIndex3:0,
				main:[],
				fun:this.tmp,
				transag:{
					ordergd:[],
					show1:false,
				},	
			}
		},
		methods:{
			hide(index){
				var hide = this.main[this.acIndex].goodm1[this.acIndex2].goodmain[index].number>0?false:true;
				return {
					hide:hide,
				}
			},
			acgoodadd(index){
				this.acIndex3 = index;
				var goodt = this.main[this.acIndex].goodm1[this.acIndex2].goodmain[index];
				// var ball = "<em class='ball2'><i class='ball1'></i></em>";
				var ball2 = document.createElement("em");
				var ball1 = document.createElement("i");
				ball2.setAttribute("class","ball2");
				ball1.setAttribute("class","ball1");
				ball2.appendChild(ball1);
				var storeall = document.getElementsByClassName("storeall")[0];
				storeall.appendChild(ball2);
				var cssAnimation = document.createElement('style');
				var hd = document.getElementsByTagName("head")[0];
				cssAnimation.type="text/css";
				var pls = document.getElementsByClassName("pluv")[index];
				var rect = pls.getBoundingClientRect();
				var top1 =  window.innerHeight-(28+rect.bottom);			
				ball1.style.cssText = "animation:ball1-animation .3s ease-in 1";
				ball2.style.cssText = "animation:ball2-animation .3s ease-out 1;top:"+rect.top+"px;left:"+rect.left+"px";
				var rules = "\
				@keyframes ball2-animation{\
					0%{\
						-webkit-transform: translate(0, 0);\
						transform: translate(0, 0);\
					}\
					100%{\
						-webkit-transform: translate(-5.7rem, 0);\
						transform: translate(-5.7rem, 0);\
					}\
				}\
				@keyframes ball1-animation{\
					0%{\
						opacity:1;\
						-webkit-transform: translate(0,0);\
						transform: translate(0, 0);\
					}\
					10%{\
						opacity:1;\
						-webkit-transform: translate(0, -40px);\
						transform: translate(0, -40px);\
					}\
					100%{\
						opacity:1;\
						-webkit-transform: translate(0,"+top1+"px);\
						transform: translate(0, "+top1+"px);\
					}\
				}\
				";
				cssAnimation.innerHTML = rules;
				hd.appendChild(cssAnimation);
				var th = this.transag;
				th.ordergd.forEach(function(v,k){
					console.log(v)
					if(v == goodt){
						v.number++;
					}
				})
				if(th.ordergd.indexOf(goodt) == -1){
					goodt.number++;
					th.ordergd.push(goodt);
				}
				th.show1 = true;
				bus.$emit('dataev',th);
				setTimeout(function(){
					hd.removeChild(cssAnimation);
					storeall.removeChild(ball2);				
				},300);	
			},
			acgoodredu(index){
				var goodt = this.main[this.acIndex].goodm1[this.acIndex2].goodmain[index];
				if(goodt.number>1){
					goodt.number--;
				}
				if(goodt.number==1){
					goodt.number--;
					var search = this.ordergd.indexOf(goodt);
					this.ordergd.splice(search,1);
				}
				bus.$emit('dataev',this.ordergd);
			},
			acGood(){},
			tmp(){},
			acGood1(){
				return this.main[this.acIndex].goodm1[this.acIndex2].goodmain;
			},
			activett(){
				return this.main[this.acIndex].goodm1[this.acIndex2].title1;
			},
			heights(index){
				if(this.main[index].activeh){
					var k = this.main[index].goodm1.length;
					return{
						height:47*k + "px"
					}
				}else{
					return ''
				}
			},
			activeL(index){
				this.acIndex = index;
				this.acIndex2 = 0;
				var activestr = this.main[index];
				let jump = document.getElementsByClassName("ali");
				if(activestr.activeh == false){
					activestr.activestr.activestr1 = true;
					activestr.activestr.activestr = false;
					activestr.activestr.activespan = false;
					activestr.activeh = true;			
				}else{
					activestr.activestr.activestr = true;
					activestr.activestr.activestr1 = true;
					activestr.activestr.activespan = true;
					activestr.activeh = false;

				}
				this.main.forEach(function(v,k){
					if(k!=index){
						v.goodm1[0].activespan.activesp = true;
						v.goodm1.forEach(function(v,k){
							if(k!=0){
								v.activespan.activesp = false;
							}
						})
						v.activestr.activestr = false;
						v.activestr.activespan = false;
						v.activestr.activestr1 = false;
						v.activeh = false;
					}
				})
				jump[index].parentNode.scrollTop = 47*index;
			},
			activeS(index){
				this.acIndex2 = index;
				var k = this.main[this.acIndex].goodm1.length;
				this.main[this.acIndex].goodm1[index].activespan.activesp = true;
				this.main[this.acIndex].goodm1.forEach(function(v,k1){
					if(k1!=index){
						v.activespan.activesp = false;
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.ball1{
		opacity:0;
		position:absolute;
		left:0;
		top:0;
		width:20px;
		height:20px;
		border-radius: 20px;
		background-color:red;
	}
	.ball2{
		z-index:99;
		position:fixed;
	}
	.gooddeta{
		position: fixed;
		top: 108px;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 8;
		padding-bottom: 45px;
		transform: translate3d(0,0,0);
		box-shadow: 0 0 9px rgba(0,0,0,0.4);	
		transition: transform 400ms ease-in-out;
		.goodse{
			background-color: #eaeaea;
		}
	}
	.transactive{
		transform: translate3d(0,140%,0);
	}
	.stmain{
		position: absolute;
		top: 44px;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		background-color: #FFF;
		.gl1{
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			z-index: 10;
			width: 84px;
			padding-bottom: 62px;
			overflow-y: auto;
			overflow-x: hidden;
			background-color: #f4f4f4;
			li{
				color: #666666;
				font-size: 13px;
			}
		}
	}
	.goodnm{
		position: relative;
		padding-left: 10px;
		width: 70px;
		display: -webkit-box;
		height: 46px;
		padding-right: 4px;
		line-height: 20px;
		background-color: #f4f4f4;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		-webkit-box-pack: center;
		border-bottom: 1px solid #e8e8e8;
		&::before{
			height: 100%;
			content: '';
			width: 1px;
			border-right: 1px solid #CFCFCF;
			@include position(top,right,0,0);
			-webkit-transform: scaleX(0.5);
			z-index: 10;
		}
		&::after{
			height: 100%;
			content: '';
			width: 1px;
			border-right: 1px solid #e8e8e8;
			@include position(top,right,0,-1px);
			position: absolute;
			transform: scaleX(0.5);
			z-index: 2;
		}
	}
	.activestr{
		background: #fff;

	}
	.activestr1{
		color: #47b34f;
	}
	.activespan{
		&::before{
			@include position(top,left,0,-1px);
			position: absolute;
			content: '';
			width: 3px;
			height: 100%;
			background-color: #47b34f;
		}
	}
	li .strheight{
		height:200px;
	}
	.typelist{
		display: block;
		height: 0;
		overflow: hidden;
		position: relative;
		-webkit-transition:height .5s;
		&::before{
			height: 1px;
			content: '';
			width: 100%;
			@include position(top,right,0,0);
			transform: scaleY(0.5);
			z-index: 10;
		}
		span{
			font-size: 12px;
			color: #666;
			background-color: #FFF;
			padding-top: 1px;
		}
		.activesp{
			background: #fff;
			color: #47b34f;
			&::before{
				@include position(top,left,0,-1px);
				content: '';
				width: 3px;
				height: 100%;
				background-color: #47b34f;
			}
		}
	}
	.typetl{
		position: absolute;
		left: 84px;
		right: 0;
		top: 0;
		@include fl(12px,30px,#666);
		height: 31px;
		background-color: #f4f4f4;
		@extend %textstyle;
		z-index: 11;
		div{
			padding-left: 11px;
		}
	}
	.goodlist1{
		position: absolute;
		left: 84px;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 10;
		background-color: #FFF;
		overflow: auto;
	}
	.gd1{
		height: auto;
		padding-top: 31px;
		overflow: hidden;
		padding-bottom: 50px;
		position: relative;
	}
	.gd1a{
		clear: both;
		background-color: #fff;
		padding-bottom: 20px;
		overflow: auto;
		ul{
			li{
				position: relative;
				padding-left: 10px;
			}
		}
	}
	.ad1{
		display: block;
		overflow: hidden;
		padding: 10px 10px 10px 0;
		position: relative;
		color: #555;
		&::before{
			height: 1px;
			content: '';
			width: 100%;
			border-bottom: 1px solid #e8e8e8;
			position: absolute;
			bottom: 0;
			right: 0;
			transform: scaleY(0.5);
			z-index: 10;
		}
		.timg{
			display: inline-block;
			position: relative;
			float: left;
			padding-top: 4px;
			img{
				width: 65px;
				height: 65px;
				display: inline-block;
				border-radius: 2px;
				float: left;
			}
		}
	}
	.gd2{
		margin-left: 70px;
		span{
			@include fl(14px,21px,#333);
			text-overflow: ellipsis;
			overflow: hidden;
			padding-left: 5px;
			max-height: 42px;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			display: -webkit-box;
		}
		.gp1{
			font-size: 0;
			color: #999;
		}
		.gp2{
			padding-right: 88px;
			position: relative;
		}
		p{
			padding-left: 5px;
			overflow: hidden;
			padding-top: 3px;
			padding-bottom: 1px;
			strong{
				display: inline-block;
				font-size: 11px;
			}
			label{
				font-size: 16px;
				color: #ff3434;
				padding-top: 2px;
				white-space: nowrap;
				display: inline-block;
				em{
					font-style: normal;
					font-size: 10px;
				}
			}
		}
	}
	.comput{
		@include position(right,bottom,0,42px);
		label{
			@include position(right,bottom,35px,auto);
			@include fl(12px,28px,#333);
			margin-top: 6px;
			padding: 0;
			width: 24px;
			height: 28px;
			overflow: hidden;
			display: inline-block;
			text-align: center;
			vertical-align: top;
			background-origin: content-box;
			background-color: transparent;
		}
	}
	.comput .hide{
		display:none;
	}
	.show{
		display: inline-block;
	}
	@for $i from 1 through 2{
		.comput span:nth-of-type(#{$i}){
			@include bg("addNumSprite.png",($i - 2)*42px,0,400%,100%);
			background-origin: content-box;
			@include position(bottom,right,auto,(2 - $i)*52px);
			padding: 6px;
			text-indent: -99999px;
			width: 28px;
			height: 28px;
			vertical-align: top;
		};
	}
</style>