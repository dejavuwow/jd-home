<template>
	<div class="typed">
		<search class="typemain"></search>
		<Footer1 classname="type1"></Footer1>
		<ul class="goodtype2">
			<li v-for="(item,index) in goodcont" :class="item.classObject" @click="show(index)">{{item.text}}</li>
		</ul>
		<article class="maincnt">
			<div class="d1" v-for="(item,index) in goodcont[acindex].main">
				<div class="d2">{{item.title}}</div>
				<div class="d3">
					<a href="" v-for="(item1,index) in item.goodm"><img :src="item1.img" alt=""><span>{{item1.text}}</span></a>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	"use strict";
	import Footer1 from './footer';
	import search from "../element/search";
	export default {
		name:"typemain",
		components:{search,Footer1},
		data(){
			return{
				acindex:0,
				goodcont:[
				{
					text:"水果蔬菜",classObject:{activeli:true},
					show:true,
					main:[{
						title:"水果",
						goodm:[
						{text:"苹果",img:require("../../assets/imgs/apple.jpg")},
						{text:"梨",img:require("../../assets/imgs/pear.jpg")},
						{text:"瓜类",img:require("../../assets/imgs/melon.jpg")},
						{text:"猕猴桃",img:require("../../assets/imgs/mihou.jpg")},
						{text:"柑桔柚",img:require("../../assets/imgs/youzi.jpg")},
						{text:"更多水果",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"蔬菜",
						goodm:[
						{text:"根茎菜",img:require("../../assets/imgs/gj.jpg")},
						{text:"叶菜类",img:require("../../assets/imgs/yc.jpg")},
						{text:"瓜果类",img:require("../../assets/imgs/gg.jpg")},
						{text:"菇菌类",img:require("../../assets/imgs/gujun.jpg")},
						{text:"调味类",img:require("../../assets/imgs/tw.jpg")},
						{text:"半成品净菜",img:require("../../assets/imgs/bcp.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"肉禽蛋奶",classObject:{activeli:false},
					main:[{
						title:"牛羊猪禽",
						goodm:[
						{text:"牛肉",img:require("../../assets/imgs/beef.jpg")},
						{text:"羊肉",img:require("../../assets/imgs/yangrou.jpg")},
						{text:"猪肉",img:require("../../assets/imgs/zhurou.jpg")},
						{text:"内脏",img:require("../../assets/imgs/neizang.jpg")},
						{text:"禽类",img:require("../../assets/imgs/qinlei.jpg")},
						]
					},
					{
						title:"水产海鲜",
						goodm:[
						{text:"鱼类",img:require("../../assets/imgs/fish.jpg")},
						{text:"虾蟹贝类",img:require("../../assets/imgs/xiaxie.jpg")},
						{text:"其他水产",img:require("../../assets/imgs/shuichan.jpg")},
						]
					},
					{
						title:"蛋类",
						goodm:[
						{text:"鸡蛋",img:require("../../assets/imgs/egg.jpg")},
						{text:"鸭蛋",img:require("../../assets/imgs/yadan.jpg")},
						{text:"其他蛋类",img:require("../../assets/imgs/eggother.jpg")},
						]
					},
					{
						title:"奶制品",
						goodm:[
						{text:"牛奶",img:require("../../assets/imgs/milk.jpg")},
						{text:"酸奶",img:require("../../assets/imgs/suannai.jpg")},
						]
					}
					]
				},
				{
					show:true,
					text:"冷热速食",classObject:{activeli:false},
					main:[{
						title:"低温速食",
						goodm:[
						{text:"火锅丸类",img:require("../../assets/imgs/apple.jpg")},
						{text:"汤圆",img:require("../../assets/imgs/pear.jpg")},
						{text:"水饺/馄饨",img:require("../../assets/imgs/melon.jpg")},
						{text:"速食肉类",img:require("../../assets/imgs/mihou.jpg")},
						{text:"冷藏米面制品",img:require("../../assets/imgs/youzi.jpg")},
						{text:"速食蛋类",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"常温速食",
						goodm:[
						{text:"方便面、粉",img:require("../../assets/imgs/apple.jpg")},
						{text:"酱菜类",img:require("../../assets/imgs/pear.jpg")},
						{text:"常温火腿肠",img:require("../../assets/imgs/melon.jpg")},
						{text:"罐头",img:require("../../assets/imgs/mihou.jpg")},
						{text:"果酱",img:require("../../assets/imgs/youzi.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"休闲食品",classObject:{activeli:false},
					main:[{
						title:"休闲零食",
						goodm:[
						{text:"膨化食品",img:require("../../assets/imgs/apple.jpg")},
						{text:"果干蜜饯",img:require("../../assets/imgs/pear.jpg")},
						{text:"肉干肉脯",img:require("../../assets/imgs/melon.jpg")},
						{text:"坚果",img:require("../../assets/imgs/mihou.jpg")},
						{text:"巧克力",img:require("../../assets/imgs/youzi.jpg")},
						{text:"果冻",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"硬糖",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"软糖",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"饼干/糕点",
						goodm:[
						{text:"饼干/威化",img:require("../../assets/imgs/apple.jpg")},
						{text:"传统糕点",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"进口休闲食品",
						goodm:[
						{text:"饼干/曲奇",img:require("../../assets/imgs/apple.jpg")},
						{text:"其他休闲食品",img:require("../../assets/imgs/pear.jpg")},
						]
					}
					]
				},
				{
					show:true,
					text:"酒水饮料",classObject:{activeli:false},
					main:[{
						title:"酒",
						goodm:[
						{text:"啤酒",img:require("../../assets/imgs/apple.jpg")},
						{text:"白酒",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"饮料",
						goodm:[
						{text:"水",img:require("../../assets/imgs/apple.jpg")},
						{text:"碳酸饮料",img:require("../../assets/imgs/pear.jpg")},
						{text:"功能性饮料",img:require("../../assets/imgs/melon.jpg")},
						{text:"茶饮料",img:require("../../assets/imgs/mihou.jpg")},
						{text:"果汁",img:require("../../assets/imgs/youzi.jpg")},
						{text:"其他饮料",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"冲调类",
						goodm:[
						{text:"茶叶",img:require("../../assets/imgs/apple.jpg")},
						{text:"其他冲调类",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"进口酒水饮料",
						goodm:[
						{text:"饮料/矿泉水",img:require("../../assets/imgs/apple.jpg")},
						]
					}
					]
				},
				{
					show:true,
					text:"粮油调味",classObject:{activeli:false},
					main:[{
						title:"米面杂粮",
						goodm:[
						{text:"大米",img:require("../../assets/imgs/apple.jpg")},
						{text:"面粉",img:require("../../assets/imgs/pear.jpg")},
						{text:"挂面",img:require("../../assets/imgs/melon.jpg")},
						{text:"杂粮",img:require("../../assets/imgs/mihou.jpg")},
						]
					},
					{
						title:"油",
						goodm:[
						{text:"调和油",img:require("../../assets/imgs/apple.jpg")},
						{text:"大豆油",img:require("../../assets/imgs/pear.jpg")},
						{text:"葵花油",img:require("../../assets/imgs/melon.jpg")},
						{text:"其他油",img:require("../../assets/imgs/mihou.jpg")},
						]
					},
					{
						title:"调味品",
						goodm:[
						{text:"盐/糖/味精",img:require("../../assets/imgs/apple.jpg")},
						{text:"其他调味",img:require("../../assets/imgs/pear.jpg")},
						{text:"酱料、醋",img:require("../../assets/imgs/melon.jpg")},
						]
					},
					{
						title:"干货",
						goodm:[
						{text:"南北干货",img:require("../../assets/imgs/apple.jpg")},
						{text:"水产干货",img:require("../../assets/imgs/pear.jpg")},
						{text:"粉丝/粉条",img:require("../../assets/imgs/melon.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"清洁日化",classObject:{activeli:false},
					main:[{
						title:"面部护理",
						goodm:[
						{text:"洁面",img:require("../../assets/imgs/apple.jpg")},
						{text:"护肤",img:require("../../assets/imgs/pear.jpg")},
						{text:"面膜",img:require("../../assets/imgs/melon.jpg")},
						{text:"眼部保养",img:require("../../assets/imgs/mihou.jpg")},
						]
					},
					{
						title:"身体护理",
						goodm:[
						{text:"身体保养",img:require("../../assets/imgs/apple.jpg")},
						{text:"身体清洁",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"口腔洗浴",
						goodm:[
						{text:"牙膏",img:require("../../assets/imgs/apple.jpg")},
						{text:"牙齿护理",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"衣物护理",
						goodm:[
						{text:"洗衣液",img:require("../../assets/imgs/apple.jpg")},
						{text:"其他助洗用品",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"厨卫清洁",
						goodm:[
						{text:"消毒液",img:require("../../assets/imgs/apple.jpg")},
						{text:"杀虫用品",img:require("../../assets/imgs/pear.jpg")},
						{text:"洗洁精",img:require("../../assets/imgs/pear.jpg")},
						{text:"其他洗洁工具",img:require("../../assets/imgs/pear.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"家居用品",classObject:{activeli:false},
					main:[{
						title:"家用电器",
						goodm:[
						{text:"家居电器",img:require("../../assets/imgs/apple.jpg")},
						]
					},
					{
						title:"厨具",
						goodm:[
						{text:"餐具",img:require("../../assets/imgs/apple.jpg")},
						]
					},
					{
						title:"纸品湿巾",
						goodm:[
						{text:"卫生纸",img:require("../../assets/imgs/apple.jpg")},
						{text:"湿巾",img:require("../../assets/imgs/pear.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"鲜花蛋糕",classObject:{activeli:false},
					main:[{
						title:"鲜花",
						goodm:[
						{text:"礼品鲜花",img:require("../../assets/imgs/apple.jpg")},
						{text:"家庭用花",img:require("../../assets/imgs/pear.jpg")},
						{text:"永生花",img:require("../../assets/imgs/melon.jpg")},
						{text:"进口鲜花",img:require("../../assets/imgs/mihou.jpg")},
						{text:"婚庆用花",img:require("../../assets/imgs/youzi.jpg")},
						{text:"花篮",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"庆典用花",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"创意鲜花",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"花瓶花盆",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"绿植多肉",
						goodm:[
						{text:"绿植",img:require("../../assets/imgs/apple.jpg")},
						{text:"多肉",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"蛋糕",
						goodm:[
						{text:"奶油蛋糕",img:require("../../assets/imgs/apple.jpg")},
						{text:"水果蛋糕",img:require("../../assets/imgs/pear.jpg")},
						{text:"其他蛋糕",img:require("../../assets/imgs/pear.jpg")},
						]
					},
					{
						title:"礼品",
						goodm:[
						{text:"创意礼品",img:require("../../assets/imgs/apple.jpg")},
						{text:"礼品卡",img:require("../../assets/imgs/pear.jpg")},
						]
					}]
				},
				{
					show:true,
					text:"医药健康",classObject:{activeli:false},
					main:[{
						title:"中西药品",
						goodm:[
						{text:"感冒用药",img:require("../../assets/imgs/apple.jpg")},
						{text:"补益安神",img:require("../../assets/imgs/pear.jpg")},
						{text:"儿科用药",img:require("../../assets/imgs/melon.jpg")},
						{text:"呼吸道药",img:require("../../assets/imgs/mihou.jpg")},
						{text:"男科用药",img:require("../../assets/imgs/youzi.jpg")},
						{text:"肠胃用药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"耳鼻喉科",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"外科骨科",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"心血管药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"眼科用药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"皮肤用药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"妇科用药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"肝胆胰类",img:require("../../assets/imgs/morefruit.jpg")},		
						{text:"泌尿科药",img:require("../../assets/imgs/morefruit.jpg")},
						{text:"精神抑郁",img:require("../../assets/imgs/morefruit.jpg")},
						]
					},
					{
						title:"营养保健",
						goodm:[
						{text:"男性健康",img:require("../../assets/imgs/apple.jpg")},
						{text:"女性健康",img:require("../../assets/imgs/pear.jpg")},
						{text:"中老年健康",img:require("../../assets/imgs/melon.jpg")},
						{text:"青少儿童健康",img:require("../../assets/imgs/melon.jpg")},
						]
					},
					{
						title:"家用器械",
						goodm:[
						{text:"日常监测",img:require("../../assets/imgs/apple.jpg")},
						{text:"辅助器械",img:require("../../assets/imgs/pear.jpg")},
						{text:"日常护理",img:require("../../assets/imgs/melon.jpg")},
						{text:"特殊护理",img:require("../../assets/imgs/melon.jpg")},
						{text:"轮椅拐杖",img:require("../../assets/imgs/melon.jpg")},
						]
					},
					{
						title:"计生用品",
						goodm:[
						{text:"避孕用品",img:require("../../assets/imgs/apple.jpg")},
						{text:"性福辅助",img:require("../../assets/imgs/pear.jpg")},
						]
					}]
				}
				],
			}
		},
		methods:{
			show(index){
				this.acindex = index;
				this.goodcont[index].classObject.activeli=true;
				this.goodcont.forEach(function(v,k){
					if(k!=index){
						v.classObject.activeli=false;
					}
				});
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.typed{
		overflow: hidden;
	}
	.typemain{
		position:fixed;
		left:0;
		top:0;
		right:0;
	}
	.goodtype2{
		@include position(top,bottom,45px,50px,fixed);
		width: 90px;
		z-index: 2;
		overflow: auto;
		background-color: #f8f8f8;
		li{
			line-height: 44px;
			font-size: 14px;
			color: #666666;
			height: 43px;
			padding-left: 14px;
			@extend %textstyle;
			border-bottom: 1px solid #e8e8e8;
			border-right: 1px solid #e8e8e8;
		}
		.activeli{
			padding-left: 11px;
			color: #47b34f;
			background-color: #FFF;
			border-left: 3px solid #47b34f;
			border-right-color: #FFF;
		}
	}
	.maincnt{
		padding-left: 95px;
		padding-bottom: 50px;
		background-color: #FFF;
		min-height: 527px;
		margin-top: 44px;

	}
	.d1{
		padding-top: 9px;
	}
	.d2{
		height: 19px;
		margin-top: 9px;
		margin-bottom: 9px;
		margin-left: 7%;
		line-height: 19px;
		font-size: 13px;
		color: #666666;
	}
	.d3{
		font-size: 0;
		a{
			display: inline-block;
			width: 33%;
			min-height: 94px;
			margin-top: 6px;
			img{
				display: block;
				width: 62px;
				height: 62px;
				margin: 0 auto;
				background-color: #f4f4f4;
			}
			span{
				display: block;
				width: 100%;
				text-align: center;
				font-size: 12px;
				color: #7d7d7d;
				padding: 8px 0;
			}
		}
	}
	
</style>