<template>
	<div class="cartlogmiddle">
		<div class="cart">
			<img src="../../public/img4/cart2.png"/>
			<p>登录后可同步购物车商品</p>
			<a href="#" @click="pageto">登录</a>
		</div>
		<ul>
			<li class="title"><span>新用户福利<i class="fa fa-circle"></i>专属优惠礼包</span><a>一键领取</a></li>
			<li class="tip">
				<div class="tip1"><p>全品类可用</p><p>满150可用</p></div>
				<div class="tip2"><p>运费券</p><p>满0可用</p></div>
				<div class="tip3"><p>全品类可用</p><p>满120可用</p></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			pageto(){
				this.$router.push("/adminlogin");
			}
		}
		
	}
</script>

<style>
	.cartlogmiddle .cart{
		width:100%;
		text-align: center;
		margin-top: 60px;
	}
	.cartlogmiddle .cart img{
		width: 20%;
	}
	.cartlogmiddle .cart p{
		font-size: 16px;
	    color: rgba(51,51,51,.66);
	    line-height: 24px;
	    margin: 11px 0;
	}
	.cartlogmiddle .cart a{
		text-decoration: none;
		display: inline-block;
		width: 60px;
	    height: 30px;
	    border: 1px solid #e4393c;
	    color: #e4393c;
	    font-size: 14px;
	    line-height: 30px;
	    border-radius: 4px;
	    margin: 0 auto 15px;
	}
	.cartlogmiddle ul {
		padding: 20px;
		list-style-type: none;
	}
	.cartlogmiddle ul .title{
		width: 100%;
		overflow: hidden;
		zoom: 1;
	}
	.cartlogmiddle ul .title span{
		float: left;
		font-size: 16px;
	    color: #333;
	    line-height: 30px;
	}
	.cartlogmiddle ul .title span i{
		font-size: 1px;
		margin:5px ;
	}
	.cartlogmiddle ul .title a{
		float: right;
		height: 30px;
	    color: #fff;
	    font-size: 14px;
	    line-height: 30px;
	    background-image: -webkit-gradient(linear,right top,left top,from(#e93b3d),to(#ff9574));
	    background-image: -webkit-linear-gradient(right,#e93b3d,#ff9574);
	    background-image: linear-gradient(-90deg,#e93b3d,#ff9574);
	    box-shadow: 0 5px 10px 0 rgba(233,59,61,.2);
	    border-radius: 15px;
	    padding: 0 15px;
	}
	.cartlogmiddle ul .tip{
		width: 100%;
		overflow: hidden;
		zoom: 1;
	}
	.cartlogmiddle ul .tip div{
		float: right;
		width: 30%;
		margin: 5px;
		text-align: center;
		color: #FFFFFF;
		
		border-radius: 5px;
	}
	.cartlogmiddle ul .tip .tip1{    background-image: -webkit-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: -moz-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: -o-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
	}
	.cartlogmiddle ul .tip .tip2{
	 background-image: -webkit-gradient(linear,left top,left bottom,from(#7da7ce),color-stop(98%,#5f92c2)); 
    background-image: -webkit-linear-gradient(top,#7da7ce,#5f92c2 98%);
    background-image: linear-gradient(-180deg,#7da7ce,#5f92c2 98%);
	}
	.cartlogmiddle ul .tip .tip3{
	background-image: -webkit-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: -moz-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: -o-linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
    background-image: linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
	}
	.cartlogmiddle ul .tip p{
	line-height: 30px;
	padding: 0;
	margin: 0;
	}
</style>