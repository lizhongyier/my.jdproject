<template>
	<div class="quick-nav clear">
		<div class='quick-nav-item' v-for="(nav,index) in quickNavs">
			<a href='#'>
				<img :src='nav.image'>
				<span v-text='nav.title'></span>
			</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				quickNavs: [{
					title: "京东超市",
					image: "/image/1.png"
				}, {
					title: "京东超市",
					image: "/image/2.png"
				}, {
					title: "京东超市",
					image: "/image/3.png"
				}, {
					title: "京东超市",
					image: "/image/4.png"
				}, {
					title: "京东超市",
					image: "/image/5.png"
				}, {
					title: "京东超市",
					image: "/image/6.png"
				}, {
					title: "京东超市",
					image: "/image/7.png"
				}, {
					title: "京东超市",
					image: "/image/8.png"
				}, {
					title: "京东超市",
					image: "/image/9.png"
				}, {
					title: "京东超市",
					image: "/image/10.png"
				}]
			}
		}
	}
</script>
<style type="text/css">
.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.quick-nav {
		background-color: #fff;
	}
	
	.quick-nav-item {
		padding-top: 10px;
		width: 20%;
		float: left;
		text-align: center;
	}
	
	.quick-nav-item a {
		text-decoration: none;
	}
	
	.quick-nav-item img {
		width: 42px;
		height: 42px;
	}
	
	.quick-nav-item span {
		display: block;
		color: #666;
		margin-top: 6px;
		font-size: 13px;
	}
</style>