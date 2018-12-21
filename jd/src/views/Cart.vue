<template>
	<div class="cart">
		<shoppingcartop>购物车</shoppingcartop>
		<!--v-if,满足条件即显示-->
		<cart-login  v-if="!login"></cart-login>
		<shoppingcarbody  v-if="login"></shoppingcarbody>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import Shoppingcartop from "@/components/Shoppingcartop.vue"
	import Shoppingcarbody from "@/components/Shoppingcarbody.vue"
	import Footerbar from "@/components/Footerbar.vue"
	import CartLogin from "@/views/CartLogin.vue"
	export default{
		components:{
			Shoppingcartop,
			Shoppingcarbody,
			Footerbar,
			CartLogin
			
		},
		computed:{
			login(){return this.$store.state.user.login}
		},
		created(){
			console.log(this.login)
		}
	}
</script>

<style>
	
</style>