<template>
	<div class="box">
		<div class="toparea">
			<div class="go_back">
				<a href="#" @click.prevent="goBack"><i class="fa fa-angle-left"></i> </a>
			</div>
			<div class="slot">
				<slot></slot>
			</div>
			<div class="menu">
				<a href="#" @click.prevent="menuShow=true"><i class="fa fa-ellipsis-h"></i></a>
				<ul class="menu_list" v-show="menuShow">
					<li v-for="(item,index) in menu">
						<router-link :to="item.to">
							<i class="fa" :class="item.icon"></i><span v-text="item.title"></span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="head_mask" v-show="menuShow" @click="menuShow=false">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuShow: false,
				menu: [{
					title: "首页",
					icon: "fa-home",
					to: "/"
				}, {
					title: "分类搜索",
					icon: "fa-search",
					to: "/category"
				}, {
					title: "管理",
					icon: "fa-cog",
					to: "/"
				}, {
					title: "我的京东",
					icon: "fa-user",
					to: "/user"
				}, {
					title: "我的钱包",
					icon: "fa-jpy",
					to: "/"
				}]

			}
		},
		methods: {
			goBack: function() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
			}
		}
	}
</script>

<style>
	.toparea {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		z-index: 999;
		border-bottom: 2px solid #EEEEEE;
	}
	
	.toparea a {
		color: #252525;
	}
	
	.toparea .slot {
		flex: 1;
		font: 20px "微软雅黑";
		line-height: 44px;
	}
	
	.toparea .go_back,
	.toparea .menu {
		width: 40px;
		height: 50px;
		font-size: 22px;
		line-height: 50px;
		position: relative;
	}
	
	.toparea .menu_list {
		position: absolute;
		z-index: 9999;
		width: 125px;
		top: 53px;
		right: 10px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		list-style: none;
		text-align: left;
		background: rgba(0, 0, 0, .9);
	}
	
	.toparea .menu_list a {
		color: #fff;
		text-decoration: none;
	}
	
	.toparea .menu_list li {
		height: 40px;
		line-height: 40px;
		margin-left: 40px;
		position: relative;
		border-bottom: 1px solid hsla(0, 0%, 100%, .2);
	}
	
	.toparea .menu_list i.fa {
		width: 40px;
		height: 40px;
		line-height: 40px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 30px;
		left: -40px;
	}
	
	.toparea .head_mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
	}
</style>