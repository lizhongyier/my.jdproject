<template>
	<div class="pro_detail">
		<shoppingcartop>
			<ul class="topnav">
				<li :class="{active:navIndex==index}" @click="navIndex=index;scroll(item.ref)" v-for="(item,index) in topnav" ><span v-text="item.title"></span></li>
			</ul>
		</shoppingcartop>
		<goods id="product" ref="product"></goods>
		<div id="comment" ref="comment" style="height: 600px;background-color: white;">
		<div class="comtitle">
			<span class="com1">评价</span><b>好评98%</b><span class="com2">共8.5万条<i class="el-icon-arrow-right"></i></span>
			</div>
			<ul class="comcontent">
				<li>评论1</li>
				<li>评论2</li>
				<li>评论3</li>
				<li>评论4</li>
				<li>评论...</li>
			</ul>
			<ul class="ask">
				<li class="asktitle"><span class="ask1">问答专区</span> <span class="ask2">查看全部问答<i class="el-icon-arrow-right"></i></span></li>
				<li class="asklist">膜事贴好的么?钢化膜么?</li>
				<li class="asklist">可以闪充么?</li>
			</ul>
		
		</div>
		<div id="recommend" ref="recommend" style="height: 600px;background-color: cadetblue;">
			<!--<reco-swiper></reco-swiper>-->
			
		</div>
		<div id="detail" ref="detail" >
			<ul>
				<li><img src="../../public/img5/opop4.jpg"/></li>
				<li><img src="../../public/img5/opop5.jpg"/></li>
				<li><img src="../../public/img5/opop6.jpg"/></li>
			</ul>
		</div>
		

		<buy-foot></buy-foot>
		
	</div>

</template>

<script>
	import Shoppingcartop from "@/components/Shoppingcartop.vue"
	import Goods from "@/components/Goods.vue"
	import BuyFoot from "@/components/BuyFoot.vue"
//	import RecoSwiper from "@/components/RecoSwiper.vue"
	export default {
		components: {
			Shoppingcartop,
			Goods,
			BuyFoot,
//			RecoSwiper
		},
		data() {
			return {
				navIndex:0,
				topnav: [{
					ref: "product",
					title: "商品"
				}, {
					ref: "comment",
					title: "评价"
				}, {
					ref: "detail",
					title: "详情"
				}, {
					ref: "recommend",
					title: "推荐"
				}]
			}
		},
		methods:{
			scroll(ref){
				console.log(this.$refs[ref]);
				var top=this.$refs[ref].offsetTop;
				document.documentElement.scrollTop=top;
			}
		},
		mounted() {
			
			console.log(document.body.scrollTop);
			
		},
		created() {},
		
	}
</script>

<style>
	.pro_detail .topnav{
		margin: 0;
		padding: 0;
		text-align: center;
		list-style-type: none;
		padding: 0px 40px;
	}
	.pro_detail .topnav li{
		float: left;
		width: 25%;
	}
	.pro_detail .topnav li.active span {
		color: #e4393c;
		font-weight: bold;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
	#comment{
		padding:45px 0px 0px 0px;
	}
	#comment .comtitle{
		width: 100%;
		height: 40px;
		color: #333333;
		font-size: 16px;
		line-height: 40px;
		overflow: hidden;
		zoom: 1;
		padding: 0 10px;
		border-bottom: 1px solid #E3E3E3;
		box-sizing: border-box;
	}
	#comment .comtitle .com1{
		float: left;
	}
	#comment .comtitle b{
		margin-left: 10px;
		float: left;
	}
	#comment .comtitle .com2{
		float: right;
		margin-right: 0px;
		
	}
	#comment .comcontent{
		list-style-type: none;
	}
	#comment .comcontent li{
		height: 80px;
		padding: 5px 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #E3E3E3;
	}
	#comment .asktitle{
		width: 100%;
		height: 40px;
		color: #333333;
		font-size: 16px;
		line-height: 40px;
		overflow: hidden;
		zoom: 1;
		padding: 0 10px;
		border-bottom: 1px solid #E3E3E3;
		box-sizing: border-box;
	}
	#comment .ask .asktitle .ask1{
		float: left;
	}
	#comment .ask .asktitle .ask2{
		float: right;
	}
	#comment .ask .asklist{
		height: 30px;
		padding: 5px 10px;
		box-sizing: border-box;
	}
	#comment .ask{
		list-style-type: none;
	}
	#detail{
		padding-top: 45px;
	}
	#detail ul{
		list-style-type: none;
	}
	#detail ul li img{
		width: 100%;
	}
</style>