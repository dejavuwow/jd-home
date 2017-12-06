<template>
	<ul>
		<slot></slot>
		<li v-for="(type,index) in type" :class="className(index)">
			<a href="">
				<div>
					<em>{{type.text1}}</em>
					<span>{{type.text2}}</span>
				</div>
				<img :src="type.img" alt="">
			</a>
		</li>
	</ul>
</template>
<script>
	"use strict";
	export default {
		name:"goodtype",
		props:["type","className"]
	}
</script>
<style lang="scss">
	@import '../../assets/sass/index.scss';
	.wright{
		height: 1.7rem;
		display: inline-block;
		width: 49.5%;
		position: relative;
		a{
			display: block;
			height: 100%;
			position: relative;
			line-height: 0.48rem;
			text-align: left;
			div{
				float: left;
				width: 50%;
				text-align: left;
				padding-left: 20px;
				em{
					font-style: normal;
					display: block;
					font-size: 0.28rem;
					line-height: 0.3rem;
					color: #333333;
					padding-top: 0.2rem;
					height: 0.3rem;
					font-weight: bold;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				span{
					color: #9cac96;
					display: block;
					height: 0.44rem;
					font-size: 0.22rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			img{
				margin-top: 0.32rem;
				margin-right: 0.4rem;
				width: 1.1rem;
				height: 1.1rem;
				display: block;
			}
		}
	}
	.line::after{
		height: 1px;
		content: '';
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		@include position(bottom,right,-1px,0);
	}
</style>