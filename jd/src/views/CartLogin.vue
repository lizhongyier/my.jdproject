<template>
	<div class="cart_login">
		<shoppingcartop>购物车</shoppingcartop>
		<cartlogmiddle></cartlogmiddle>
		<product-list></product-list>
	<footerbar></footerbar>
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	import Shoppingcartop from "@/components/Shoppingcartop.vue";
	import Cartlogmiddle from "@/components/Cartlogmiddle.vue";
	import ProductList from "@/components/ProductList.vue";
	export default{
		data(){
			return{}
		},
		components:{
			Footerbar,
			Shoppingcartop,
			Cartlogmiddle,
			ProductList
		},
		props:{
		},
		methods:{
		},
		computed:{
		login(){return this.$store.state.user.login},
		},
		watch(val){
			console.log(val)
		}
	}
</script>

<style>
</style>