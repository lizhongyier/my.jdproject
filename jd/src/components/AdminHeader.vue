<template>
	<div class="containerr">
		<div class="head_logo">
			<div class="bg-purple ">
				<p><span>京东</span><br/>JD.COM</p>
			</div>
		</div>
		<div class="head_category">
			<div class="grid-content bg-purple-light">
				<span><i class="fa fa-home"></i>
					<router-link to="/">首页</router-link>
				</span>
				<span><i class="fa fa-folder"></i>
					<router-link to="/admin/folder">收藏夹</router-link>
				</span>
				<span><i class="fa fa-heart"></i>
					<router-link to="/admin/store">关注店铺</router-link>
				</span>
				<span><i class="fa fa-paw"></i>
					<router-link to="/admin/footint">我的足迹</router-link>
				</span>
				<span><i class="fa fa-shopping-bag"></i>
					<router-link to="/admin/discount">红包卡券</router-link>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.containerr {
    width: 100%;
    display: flex;
    max-height:80px;
  	}
  	/*.head_category a.is-active{
  		color: rgb(255, 208, 75);
  	}*/
  	.head_category a:-webkit-any-link{
  		color: #FFFFFF;
  		text-decoration: none;
  	}
  .head_logo{
  	flex: 1;
  	height: 80px;
  	background-color: #f23030;
  	border-bottom: 2px solid #FFFFFF;
  	line-height: 80px;
  	box-sizing: border-box;
  	
  }
  .head_category{
  	flex: 3;
  	margin: 0 20px;
  }
  .bg-purple {
  	height: 80px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 3px 3px 5px #333333;
  }
  .bg-purple span{
  	font:bolder 24px "微软雅黑";
  	
  }
  .bg-purple p{
  	height: 80px;
  	font: 16px arial;
  	margin-top: 10px;
  }
  .bg-purple-light {
  	margin-top: 10px;
  	font: 18px "微软雅黑";
    color: #FFFFFF;
    background: #f23030;
     max-height: 80px;
  }
  .bg-purple-light span{
  	padding: 20px;
  }
  .bg-purple-light span i{
  	margin: 10px;
  }
  .grid-content {
    border-radius: 9px;
    min-height: 50px;
    line-height: 50px;
  }

</style>