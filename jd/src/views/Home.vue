<template>
	<div class="box">
		<search-bar></search-bar>
		<swiper></swiper>
		<quick-nav></quick-nav>
		<product-list></product-list>
		
		<div class="" style="height: 1000px;">
			<ul>
				<li v-for="(item,index) in product" v-text="item.title"></li>
			</ul>
		</div>
<footerbar></footerbar>		
	</div>
	
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	import SearchBar from "@/components/SearchBar.vue";
	import Swiper from "@/components/Swiper.vue";
	import QuickNav from "@/components/QuickNav.vue";
	import ProductList from "@/components/ProductList.vue";
	import qs from "qs"
	
	
//	import QuickNav from "@/components/QuickNav.vue";
	import axios from "axios";
	export default{
		data(){
			return{
				product:[]
			}
		},
		
		
		components:{
			Footerbar,
			SearchBar,
			QuickNav,
			Swiper,
			ProductList
			
		},
		mounted(){
			axios.get("/data.json").then(res=>{
				console.log(res);
				this.product=res.data;
			}).catch(err=>{});
		}
	}
</script>
