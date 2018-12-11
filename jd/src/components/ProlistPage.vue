<template>
	<div class="prolist_page">
		<search-bar></search-bar>
		<ul class="prolist_head">
			<li><a href="#" @click.prevent="menuShow=!menuShow">综合</a><i class="caret"></i>
			
			</li>
			<li>销量<i class="caret"></i></li>
			<li>服务<i class="caret"></i></li>
			<li>筛选<i class="fa fa-filter"></i></li>
		</ul>
		<ul class="menu_lister" v-show="menuShow">
				<li>家电</li>
				<li>服装</li>
				<li>护肤</li>
				<li>玩具</li>
				<li>食品</li>
			</ul>	
			<div class="head_masker" v-show="menuShow" @click="menuShow=false">	</div>

		<ul class="prolist_sorts">
			<li><span></span></li>
			<li>品牌<i class="caret"></i></li>
			<li>类别<i class="caret"></i></li>
			<li>详细分类<i class="caret"></i></li>
		</ul>
		<dl class="prolist_item" v-for="(item,index) in prolist">
			<dt class="clear"><img :src="item.image"/><div class="imgtitle">
				12.12年终盛典
			</div> </dt>
			<dd class="title">
				<p v-text="item.title"></p>
				<span class="pricer">¥ <b v-text="item.price"></b></span>
				<span class="discount">满99-20</span>
			</dd>
			<dd class="sologan"><b></b><span>10000+条评价 好评率99%</span></dd>
		</dl>

	</div>
</template>

<script>
	import SearchBar from "@/components/SearchBar.vue";
	export default {
		components: {
			SearchBar
		},
		data() {
			return {
				menuShow: false,
				prolist: [{
					title: "正品七匹狼皮带男真皮不带头自动扣无头男士头层牛皮裤腰带无扣单",
					image: "/img4/pic1.jpg",
					price: 169.00
				},{
					title: "力箭手动剥线钳多功能电工拨线钳剥皮器剥皮刀扒线钳子工具电线钳",
					image: "/img4/pic2.jpg",
					price: 12.37
				},{
					title: "飞利浦电动剃须刀充电式三刀头全身水洗男刮胡刀胡须刀正品S1010",
					image: "/img4/pic3.jpg",
					price: 399.00
				},{
					title: "蒙牛奶粉女士400gx2袋高钙高铁小袋条装含脱脂乳粉左旋肉碱",
					image: "/img4/pic4.jpg",
					price: 109.00
				},
				
				
				
				]
			}
		},

	}
</script>

<style>
	.prolist_page{
		overflow-y: auto;
	}
	
	.prolist_page .search-bar{
		background-color: red;
	}
	.prolist_page .prolist_head {
		margin-top: 50px;
		height: 50px;
		padding-top: 12px;
		width: 100%;
		display: flex;
		list-style-type: none;
		border-bottom: 1px solid #E3E3E3;
		border-top: 1px solid #E3E3E3;
		box-sizing: border-box;
	}
	
	.prolist_page .prolist_head li {
		flex: 1;
		height: 25px;
		font: 16px "微软雅黑";
		text-align: center;
		line-height: 25px;
		color: #333333;
		padding: 0;
	}
	.prolist_page .menu_lister{
		width: 100%;
	}
	.prolist_page .menu_lister li{
		width: 100%;
		height: 30px;
		font: 18px "微软雅黑";
		padding-left: 20px;
		color: #666666;
		line-height: 30px;
		border-bottom: 1px solid #E3E3E3;
		background-color: #FFFFFF;
	}
	.prolist_page .prolist_head li:last-of-type {
		border-left: 1px solid #E3E3E3;
	}
	
	.prolist_page .prolist_head li i {
		margin: 5px;
		color: #999999;
	}
	
	.prolist_page .prolist_sorts {
		margin-top: 0px;
		height: 50px;
		padding-top: 3px;
		width: 100%;
		display: flex;
		list-style-type: none;
		border-bottom: 1px solid #E3E3E3;
		box-sizing: border-box;
	}
	
	.prolist_page .prolist_sorts li {
		flex: 1;
		height: 25px;
		margin: 5px;
		text-align: center;
		line-height: 25px;
		background-color: #E3E3E3;
		color: #666666;
		border-radius: 5px;
	}
	
	.prolist_page .prolist_sorts li i {
		margin: 5px;
		color: #999999;
	}
	
	.prolist_page .prolist_sorts li span {
		display: inline-block;
		width: 50px;
		height: 25px;
		background: url(../../public/img4/pic0.png) no-repeat center center;
		background-size: contain;
	}
	
	.prolist_page .prolist_item {
		width: 100%;
		display: inline-flex;
		height: 132px;
		padding-right: 30px;
		box-sizing: border-box;
		position: relative;
	}
	
	.prolist_page .prolist_item dt {
		width: 25%;
		position: relative;
	}
	
	.prolist_page .prolist_item dt img {
		width: 100%;
	}
	
	.prolist_page .prolist_item dt .imgtitle {
		width: 100%;
		height: 20%;
		position: absolute;
		background: url(../../public/img4/pic9.png) no-repeat center center;
		background-size: contain;
		bottom: 20px;
		left: 0;
		font: 8px "微软雅黑";
		text-align: center;
		line-height: 250%;
		color: #FFFFFF;
		box-sizing: border-box;
	}
	
	.prolist_page .prolist_item .title {
		width: 70%;
		position: absolute;
		right: 0px;
		top: 5px;
	}
	
	.prolist_page .prolist_item .sologan {
		width: 75%;
		margin-left: 10px;
		height: 25px;
		padding: 0;
		margin: 0;
		position: absolute;
		right: -40px;
		top: 90px;
		box-sizing: border-box;
		position: relative;
		border-bottom: 1px solid #E3E3E3;
	}
	
	.prolist_page .prolist_item .sologan b {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 70px;
		height: 25px;
		padding: 0;
		margin: 0;
		background: url(../../public/img4/pic10.png) no-repeat center center;
		background-size: contain;
		box-sizing: border-box;
	}
	
	.prolist_page .prolist_item .sologan span {
		position: absolute;
		bottom: 0px;
		left: 75px;
		height: 25px;
		line-height: 25px;
		color: #999999;
	}
	
	.prolist_page .prolist_item .title .pricer {
		font: bold 18px arial;
		color: red;
	}
	
	.prolist_page .prolist_item .title .discount {
		padding: 0px;
		margin: 0px 5px;
		font: 14px "微软雅黑";
		border: 1px solid deeppink;
		color: deeppink;
	}
</style>