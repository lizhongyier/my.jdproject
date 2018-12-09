<template>
	<div class="box_goods">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="/img3/1.jpg">
			</div>
			<div class="swiper-slide">
				<img src="/img3/2.jpg">
			</div>
			<div class="swiper-slide">
				<img src="/img3/3.jpg">
			</div>
		</div>
		<div class="swiper-pagination"></div>

	</div>
		<div class="sologan">
		<b>￥35.5</b><span>限时抢购</span>
	</div>
	<div class="title">
		<span>12.12</span><p>多功能家用调料储物盒200mml*4双十二特惠提前加入购物车</p>
		<i class="fa fa-heart"></i>
	</div>
	<a href="#" class="mad">【12.12年终盛典】【疯抢价35.5元，火热抢购中，限时限量拼手速，手慢无，京东自营！】更多爆款低价，点击查看》》</a>
	<ul class="mprice">
		<li class="discount"></li>
		<li class="val1">加入购物车</li>
		<li class="val2">立即购买</li>
	</ul>
	<dl class="pay">
		<dt>支付方式</dt>
		<dd class="baitiao">【激活白条】新用户立减百元</dd>
		<dd class="jdzhifu">【京东支付】用户随机立减20元</dd>
	</dl>
	<dl class="delever">
		<dt>送至：</dt>
		<dd>北京朝阳区三环到四环之间</dd>
		<dd><span><i class="fa fa-check-circle-o"></i>99元免基础运费(20kg内)</span><span><i class="fa fa-check-circle-o"></i>京东发货售后</span><span><i class="fa fa-check-circle-o"></i>7天无理由退货（拆封后不支持）</span><span><i class="fa fa-check-circle-o"></i>可配送港澳台及海外</span></dd>
	</dl>
	</div>
	
</template>

<script>
	import Swiper from "swiper"
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
//			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});

		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/font-awesome.min.css");
	/*@import url("../assets/css/bootstrap.min.css");*/
	@import url("../assets/css/swiper.css");
	/*轮播图*/
	a.router-link-exact-active {
		color: #f23030;
	}
	.swiper-container {
		margin-top: 40px;
	}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
	.sologan{
		width: 100%;
		display: flex;
		height: 60px;
	}
	.sologan b{
		display: inline-block;
		flex: 2;
		font: 30px arial;
		color: #FFFFFF;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background-color: orangered;
		
	}
	.sologan span{
		display: inline-block;
		flex: 1;
		font: 24px "微软雅黑";
		color: #FFFFFF;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background-color: #FFBE00;
	}
	.title{
		width: 100%;
		height: 80px;
		padding: 10px;
		display: flex;
		margin: 20px auto;
	}
	.title span{
		flex: 1;
		height: 60px;
		font: 38px arial;
		color: #FFFFFF;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background-color: red;
	}
	.title p{
		flex: 6;
		height: 60px;
		font: 20px arial;
		color: #333333;
		text-indent: 2em;
		height: 60px;
	}
	.title i{
		flex: 1;
		font-size: 38px;
		color: red;
	}
	.mad{
		font-size: 16px;
		color: red;
		text-decoration: none;
	}
	.mprice{
		width: 100%;
		margin: 10px;
		height: 80px;
		line-height: 40px;
		padding: 0px;
		background-color: #EEEEEE;
		list-style-type: none;
		overflow: hidden;
		zoom: 1;
	}
	.mprice li{
		font: 24px "微软雅黑";
		color: #333333;
		line-height: 80px;
		text-align: center;
	}
	.mprice .val1{
		float: left;
		height: 80px;
		width: 150px;
		background-color: red;
		color: #FFFFFF;
		border-radius: 15px 0 0 15px;
	}
	.mprice .val2{
		float: right;
		height: 80px;
		width: 150px;
		background-color: yellow;
		border-radius: 0px 15px 15px 0px;
	}
	.pay{
		width: 100%;
		border: 1px solid #999999;
		margin: 20px auto;
	}
	.pay dt,.pay dd{
		height: 40px;
		font: 18px "微软雅黑";
		color: #333333;
		line-height: 40px;
		padding-left: 20px;
		border-bottom: 1px dashed #999999;
	}
	.pay dd:nth-last-of-type(1){
		border-width: 0px;
	}
	.delever{
		width: 100%;
		margin: 10px auto;
		
	}
	.delever dt,.delever dd{
		font: 18px "微软雅黑";
		height: 40px;
		line-height: 40px;
		background-color: #EEEEEE;
		padding-left: 20px;
	}
	.delever i{
		color: red;
		margin: 5px;
	}
</style>