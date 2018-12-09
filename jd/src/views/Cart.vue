<template>
	<div class="cart">
		<shoppingcartop>购物车</shoppingcartop>
		<shoppingcarbody></shoppingcarbody>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import Shoppingcartop from "@/components/Shoppingcartop.vue"
	import Shoppingcarbody from "@/components/Shoppingcarbody.vue"
	import Footerbar from "@/components/Footerbar.vue"
	export default{
		components:{
			Shoppingcartop,
			Shoppingcarbody,
			Footerbar
			
		}
	}
</script>

<style>
	
</style>