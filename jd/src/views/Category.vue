<template>
	<div class="box_category">
		<shoppingcartop><input type="search" class="search" placeholder="请搜索" /></shoppingcartop>
		<div class="categorybody">
			<div class="categoryleft">
				<ul>
					<li><a href="#">热门推荐</a></li>
					<li><a href="#">家用电器</a></li>
					<li><a href="#">电脑办公</a></li>
					<li><a href="#">计生情趣</a></li>
					<li><a href="#">美妆护肤</a></li>
					<li><a href="#">个护清洁</a></li>
					<li><a href="#">汽车用品</a></li>
					<li><a href="#">京东超市</a></li>
					<li><a href="#">男装</a></li>
					<li><a href="#">男鞋</a></li>
					<li><a href="#">女装</a></li>
					<li><a href="#">女鞋</a></li>
				</ul>
			</div>
			<div class="categoryright"></div>
		</div>
		
		<footerbar></footerbar>	
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	import Shoppingcartop from "@/components/Shoppingcartop.vue";
	export default{
		 data () {
      return {
      	
      }
   },
		components:{
			Footerbar,
			Shoppingcartop
		}
	}
</script>

<style>
	.box_category .search{
		width: 70%;
		border-radius: 20px;
		font-size: 16px;
		padding-left: 10px;
		box-sizing: border-box;
		height: 30px;
		background-color: #EEEEEE;
		outline: none;
		border-style: solid;
		border-width: 0px;
	}
	.categorybody{
		margin-top: 50px;
		width: 100%;
		padding: 15px;
		overflow: hidden;
		zoom: 1;
	}
	.categorybody .categoryleft{
		float: left;
		width: 20%;
		height: 1000px;
		background-color: red;
	}
	.categorybody .categoryright{
		float: right;
		width: 80%;
		height: 1000px;
		background-color: yellow;
	}
</style>