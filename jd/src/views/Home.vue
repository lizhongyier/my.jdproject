<template>
	<div class="box">
		<search-bar></search-bar>
		<swiper></swiper>
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
			Swiper
			
		},
		mounted(){
			axios.get("/data.json").then(res=>{
				console.log(res);
				this.product=res.data;
			}).catch(err=>{});
		}
	}
</script>
