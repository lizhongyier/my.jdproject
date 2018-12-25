<template>
	<div class="buyfoot_box">
	<div class="buyfoot">
		<ul class="buyleft">
			<li><p class="el-icon-service"></p><span>联系客服</span></li>
			<li><p class="el-icon-goods"></p><span>进店</span></li>
			<li><p class="fa fa-shopping-cart"></p><span>购物车</span></li>
		</ul>
		<ul class="buyright">
			<li class="addcart">加入购物车</li>
			<li class="buynow">立即秒杀</li>
		</ul>
	</div>
	</div>
</template>

<script>
</script>

<style>
	.buyfoot{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9999;
	}
	.buyfoot .buyleft{
		float: left;
		width: 50%;
		display: flex;
		list-style-type: none;
	}
	.buyfoot .buyleft li{
		flex: 1;
	}
	.buyfoot .buyright{
		width: 50%;
		display: flex;
		list-style-type: none;
	}
	.buyfoot .buyright li{
		flex: 1;
		line-height: 50px;
        text-align: center;
	}
	.buyfoot .buyright .addcart{
		background: #ff9600;
	}
	.buyfoot .buyright .buynow{
		
		background: #e4393c;
	}
</style>