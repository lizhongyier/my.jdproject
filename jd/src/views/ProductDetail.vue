<template>
	<div class="pro_detail">
		<shoppingcartop>
			<div class="protitle">
				
			</div>
		</shoppingcartop>
		<goods></goods>
		
		<buy-foot></buy-foot>
	</div>
	
</template>

<script>
	import Shoppingcartop from "@/components/Shoppingcartop.vue"
	import Goods from "@/components/Goods.vue"
	import BuyFoot from "@/components/BuyFoot.vue"
	export default{
		components:{Shoppingcartop,Goods,BuyFoot},
		data(){
			return{
			id:0,}
		},
		created(){
			this.id=this.$route.params.id
		}
	}
</script>
  
<style scoped="scoped">
	  .sorts{
    margin: auto 20px;
    font-size: 24px;	
    }
</style>