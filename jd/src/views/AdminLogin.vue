<template>
	<div class="admin_login">
	<shoppingcartop>京东登录</shoppingcartop>
	<adminlog-content></adminlog-content>
	<footerbar></footerbar>
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue"
	import Shoppingcartop from "@/components/Shoppingcartop.vue";
	import AdminlogContent from "@/components/AdminlogContent.vue";
	export default{
		components:{
			Shoppingcartop,
			Footerbar,
			AdminlogContent
			
		}
	}
</script>

<style>
</style>