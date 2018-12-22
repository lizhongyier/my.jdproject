<template>
	<div class="box_category">
		<shoppingcartop><input type="search" class="search" placeholder="请搜索" /></shoppingcartop>
		<div class="categorybody">
			<div class="categoryleft">
				<ul>
					<li class="slidetitle"><a href="#">热门推荐</a></li>
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
					<li><a href="#">母婴童装</a></li>
					<li><a href="#">图书音像</a></li>
					<li><a href="#">运动户外</a></li>
					<li><a href="#">内衣配饰</a></li>
					<li><a href="#">食品生鲜</a></li>
					<li><a href="#">酒水饮料</a></li>
					<li><a href="#">家具家装</a></li>
					<li><a href="#">家居厨具</a></li>
					<li><a href="#">箱包手袋</a></li>
					<li><a href="#">钟表珠宝</a></li>
				</ul>
			</div>
			<div class="categoryright">
				<div class="catheader"><img src="../../public/img4/cat1.png"/></div>
				<div class="catbody">
					<div class="hotpro">
						<div class="hottitle">热卖推荐</div>
						<ul>
						<li v-for="(item,index) in hotpro">
							<img :src="item.image" />
							<span v-text="item.title"></span>
						</li>
						</ul>
					</div>
					</div>
				</div>
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
      	hotpro:[{
      		image:"/img4/pic7.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic6.jpg",
      		title:"装饰"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"茶具"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},{
      		image:"/img4/pic5.jpg",
      		title:"手机"
      	},
      	]
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
	.categoryright .catheader{
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
	}
	.categoryright .catheader img{
		width: 100%;
	}
	.categoryright .catbody .hotpro .hottitle{
		width: 100%;
		height: 35px;
		font-size: 18px;
		line-height: 35px;
		padding-left: 10px;
		background-color: blue;
	}
	.categoryright .catbody .hotpro ul{
		width: 100%;
		padding: 5px;
		overflow: hidden;
		zoom: 1;
		text-align: center;
		list-style-type: none;
	}
	.categoryright .catbody .hotpro ul li{
		width: 33%;
		padding: 5px;
		box-sizing: border-box;
		background-color: green;
		float: left;
	}
	.categoryright .catbody .hotpro ul li img{
		width: 100%;
	}
	.categorybody .categoryleft ul{
		padding: 0px;
		margin-top: 10px;
		list-style-type: none;
		text-align: center;
	}
	/*.categorybody .categoryleft .slidetitle{
		height: 35px;
		background-color: #FFFFFF;
	}*/
	.categorybody .categoryleft ul li{
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #333333;
		background-color: #EEEEEE;
	}
	.categorybody .categoryleft ul li a{
		text-decoration: none;
		color: #333333;
	}
</style>