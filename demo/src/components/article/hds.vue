<template>
	<div class="searcha">
		<!-- 搜索框 -->
		<search class="hds" :hold="placehold">
			<a href="" title="" class="back" slot="a1">
				<i></i>
			</a>
			<span class="searchbtn" slot="span">搜索</span>
		</search>
		<!-- 热门搜索 -->
		<div class="s1a2">
			<div class="hotsearch">
				<div class="hots1">
					<div class="hots1a">热门搜索</div>
					<div class="hots1b">
						<a href="" v-for="(hotsearch,index) in hotsearch">{{hotsearch.text}}</a>
					</div>
				</div>
				<!-- 搜索历史 -->
				<div class="hots2">
					<div class="hots2a">搜索历史</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	"use strict";
	import search from '../element/search';
	export default {
		name:"hds",
		components:{search},
		data(){
			return {
				placehold:"搜索附近的商品和门店",
				hotsearch:[
				{text:"两个苹果"},
				{text:"立秋"},
				{text:"西瓜"},
				{text:"乳宁颗粒"},
				{text:"扁豆"},
				{text:"小儿氨酚"},
				{text:"西芹"},
				{text:"调料"},
				{text:"速冻"},
				{text:"感冒药"},
				{text:"莲子心"},
				{text:"蔬菜"}
				]
			}
		}
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	/*搜索框头部样式*/
	.hds{
		&::before{
			height: 1px;
			content: '';
			width: 100%;
			border-bottom: 1px solid #e8e8e8;
			@include position(bottom,right,-1px,0);
		}
		/*返回按钮*/
		.back{
			display: block;
			width: 34px;
			height: 44px;
			i{
				display: inline-block;
				width: 12px;
				height: 12px;
				border-left: 2px solid #848484;
				border-bottom: 2px solid #848484;
				-webkit-transform: rotate(45deg) translate3d(1px,1px,0); 
				-moz-transform: rotate(45deg) translate3d(1px,1px,0);
				-ms-transform: rotate(45deg) translate3d(1px,1px,0);
				transform: rotate(45deg) translate3d(1px,1px,0); 
				margin-left: 14px;
			}
		}
	}
	.searchbtn{
		padding: 0 10px;
		height: 30px;
		@include fl(14px,30px,#333333);
		display: inline-block;
		background-color: #e5e5e5;
		border-radius: 3px;
		margin-left:12px;
		margin-right:13px;
	}
	/*热门搜索*/
	.s1a2{
		@include fl(14px,17px,#555);
		text-align: left;
		overflow: auto;
		background: #f4f4f4;
	}
	.hots1a{
		@extend %bgsearch;
		padding: 8px;
		background-position: -8px -94px;
		padding-left: 28px;
	}
	.hots1b{
		padding: 15px 0 0 10px;
		background: #fff;
		a{
			display: inline-block;
			margin-bottom: 15px;
			margin-right: 10px;
			width: calc((100% - 10px - 10px*4)/4);
			height: 25px;
			line-height: 25px;
			border-radius: 5px;
			background: #fff;
			border: 1px solid #e8e8e8;
			text-align: center;
		}
	}
	/*搜索历史*/
	.hots2{
		padding-bottom: 5px;
		.hots2a{
			@extend %bgsearch;
			padding: 8px;
			background-position: -8px -49px;
			padding-left: 28px;
			background-color: #f4f4f4;
			&::before{
				height: 1px;
				content: '';
				width: 100%;
				border-bottom: 1px solid #e8e8e8;
				@include position(bottom,right,-1px,0);

			}
		}
	}
</style>