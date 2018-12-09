<template>
	<div class="pro_detail">
		<shoppingcartop>
			<router-link :to="'/product/'+id+'/goods'"><span class="sorts">商品</span></router-link>
			<router-link :to="'/product/'+id+'/detail'"><span class="sorts">详情</span></router-link>
			<router-link :to="'/product/'+id+'/comment'"><span class="sorts">评价</span></router-link>
			<router-link :to="'/product/'+id+'/recommend'"><span class="sorts">推荐</span></router-link>
		</shoppingcartop>
		<router-view/>
	</div>
	
</template>

<script>
	import Shoppingcartop from "@/components/Shoppingcartop.vue"
	export default{
		components:{Shoppingcartop},
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