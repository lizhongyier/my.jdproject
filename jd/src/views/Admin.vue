<template>
	<div class="admin">
	<header>
		<router-view name="header"></router-view>
	</header>
	<div class="main">
		<aside>
			<router-view name="aside"></router-view>
		</aside>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
	</div>
</template>

<script>
</script>

<style>
	/*html,body,#app,.admin{
		height: 100%;
	}*/
	.admin{
		width: 100%;
		/*height: 100%;*/
	}
	.admin .main{
		overflow: hidden;
		box-sizing: border-box;
	}
	.admin header{
		height: 80px;
		width: 100%;
		z-index: 9999;
		position: fixed;
		padding: 0;
		top: 0px;
		left: 0px;
		background-color: #fff;
		border-bottom: solid 1px #f23030;
		box-sizing: border-box;
	}
	.admin aside{
		width: 260px;
		height: 100%;
		position: fixed;
		z-index: 9999;
		top: 80px;
		left: 0px;
		overflow-y: auto;
		box-sizing: border-box;
		background-color: #f23030;
	}
	.admin .content{
		width: 100%;
		height: 100%;
		margin-top: 80px;
		padding-left: 260px;
		overflow-y: auto;
		overflow-x: auto;
	}
</style>