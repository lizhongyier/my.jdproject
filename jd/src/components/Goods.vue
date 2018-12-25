<template>
	<div class="box_goods">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../../public/img5/opop1.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../../public/img5/opop2.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../../public/img5/opop8.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../../public/img5/opop9.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../../public/img5/opop10.jpg">
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="lijian"></div>

	</div>
		<div class="sologan">
		<div class="sologan-price"><span>￥</span>2799.00</div><div class="timesale">3033333人已预约</div>
	</div>
	<div class="adtitle">
		<div class="txt">
		<span>自营</span><p>OPPO R17新年版 2500万美颜拍照 6.4英寸水滴屏 光感屏幕指纹 6G+128G 全网通 移动联通电信4G 双卡双待手机</p>
		</div>
		<div class="colect">
		<i class="fa fa-heart"></i>
		<p>收藏</p>
		</div>
	</div>
	<a href="#" class="mad">R17新年版新品首发，定制UI，金色点缀摄像头边框，背部机身更精美，前置2500万摄像头。买送高值新年礼盒和音箱</a>
	<ul class="process">
		<li><span>流程 : </span><b>1.预约 2.秒杀 3.发货</b></li>
		<li><span>秒杀时间 : </span><b>2018.12.21 10:01:06-2018.12.29 10:01:08</b></li>
	</ul>
	<dl class="pay">
		<dt>支付方式</dt>
		<dd class="baitiao">【激活白条】新用户立减百元</dd>
		<dd class="jdzhifu">【京东支付】用户随机立减20元</dd>
	</dl>
	<ul class="huodong">
		<li>
			<span>赠品</span><b>【赠品】OPPO 奇幻新年礼盒套装 X1</b>
		</li>
		<li>
			<span>满额返券</span><b>消费满10元返配件优惠券</b>
		</li>
		<li>
			<span>优惠套餐</span><b>消费满10元返配件优惠券</b>
		</li>
	</ul>
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
	.lijian{
		z-index: 9999;
		background: url(../../public/img5/lijian.jpg) no-repeat center center;
		background-size: contain;
		position: absolute;
		width: 90px;
		height: 90px;
		bottom: 10px;
		left: 10px;
	}
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
	.sologan{
		width: 100%;
		height: 60px;
		background: -webkit-linear-gradient(left,#9391f6,#287ed8);
        background: linear-gradient(90deg,#9391f6,#287ed8);
        padding: 15px 10px;
        box-sizing: border-box;
        overflow: hidden;
        zoom: 1;
	}
	.box_goods .sologan .sologan-price{
		float: left;
		color: #FFFFFF;
		font:bold 28px arial;
	}
	.box_goods .sologan .sologan-price span{
		font: 16px arial;
	}
	.box_goods .sologan .timesale{
		float: left;
		margin: 5px 15px;
		color: #FFFFFF;
		font-size: 14px;
		background-color: darkslateblue;
		border-radius: 10px;
		padding: 0px 5px;
	}
	.adtitle{
		width: 100%;
		display: flex;
		padding: 10px;
	}
	.adtitle .txt{
		flex: 9;
		height: 60px;
		color: #333333;
		margin: 0px;
		padding: 0px;
		background-color: #FFFFFF;
	}
	.adtitle .colect{
		flex: 1;
		text-align: center;
		color: #F23030;
	}
	.adtitle .txt span{
		float: left;
		width: 30px;
		height: 25px;
		border-radius: 5px;
		background-color: #F23030;
		font-size: 12px;
		line-height: 25px;
		text-align: center;
		color: #FFFFFF;
		padding: 0;
		margin: 0;
	}
	.adtitle .txt p{
		float: left;
		font: 16px "微软雅黑";
	}
	.mad{
		display: block;
		margin-top: 20px;
		width: 100%;
		font-size: 14px;
		line-height: 1.5em;
		color: red;
		text-decoration: none;
	}
	.process{
		width: 100%;
		margin: 10px;
		list-style-type: none;
	}
	.process li span{
		color: #999999;
	}
	.pay{
		width: 100%;
		border-style: solid;
		border-width: 1px 0px 1px 0px;
		border-color: #E3E3E3;
		margin: 10px auto;
	}
	.pay dt,.pay dd{
		height: 30px;
		font: 14px "微软雅黑";
		color: #333333;
		line-height: 30px;
		padding-left: 10px;
		border-bottom: 1px dashed #E3E3E3;
	}
	.pay dd:nth-last-of-type(1){
		border-width: 0px;
	}
	.huodong{
		width: 100%;
		padding: 10px;
	}
	.huodong li{
		font-size: 14px;
		height: 25px;
		color: #333333;
		line-height: 25px;
	}
	.huodong li span{
		display: inline-block;
		font: 14px "微软雅黑";
		color: #F23030;
		padding: 0px 5px;
		margin: 5px;
		border:1px solid #F23030;
		border-radius: 5px;
	}
	.delever{
		width: 100%;
		margin: 10px auto;
		background-color: #EEEEEE;
	}
	.delever dt,.delever dd{
		font: 14px "微软雅黑";
		line-height: 30px;
		padding-left: 10px;
	}
	.delever i{
		color: red;
		margin: 5px;
	}
</style>