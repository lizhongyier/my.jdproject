<template>
	<footer>
		<ul>
			<li v-for="(item,index) in botomnav">
				<router-link :to="item.to">
			<span class="fa" :class="item.icon"></span>
			<span class="title" v-text="item.title"></span>
			</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default {
		data() {
			return {
				botomnav: [{
					title: "首页",
					icon: "fa-home",
					to:"/"
				}, {
					title: "分类",
					icon: "fa-list",
					to:"/category"
				}, {
					title: "搜索",
					icon: "fa-search",
					to:"/search"
				}, {
					title: "购物车",
					icon: "fa-shopping-cart",
					to:"/cart"
				}, {
					title: "用户",
					icon: "fa-user",
					to:"/admin"
				}, ]
			}
		}
	}
</script>

<style>
  footer{
  	    width: 100%;
		height: 50px;
		background-color: red;
		position: fixed;
		bottom: 0px;
		left: 0px;
        color: #353535;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
  }
  footer ul{
  		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
        list-style-type: none;
  }
  footer ul li{
  	padding-top: 5px;
  	flex: 1;

  }
  footer a:-webkit-any-link {
		color:  #252525;
		text-decoration: none;
	}
  /*footer a{
  	color: #252525;
  	text-decoration: none;
  }*/
  footer a.router-link-exact-active {
		color: #f23030;
	}

  footer ul li span.fa{
  	font-size: 20px;
  }
    footer ul li span{
    	
    	margin: 0 5px;
    }
    footer ul li .title{
    	display: block;
    	font-size: 12px;
    }
</style>