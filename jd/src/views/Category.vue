<template>
	<div class="box_category">
		<shoppingcartop><input type="search" class="search" placeholder="请搜索" /></shoppingcartop>
		
		
		<footerbar></footerbar>	
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	import Shoppingcartop from "@/components/Shoppingcartop.vue";
	export default{
		 data () {
      return {
      	
      }
   },
		components:{
			Footerbar,
			Shoppingcartop
		}
	}
</script>

<style>
	
	
	
</style>